import React from 'react';
import { candidateTypes, genders, subcategories, subjects, years } from '../stats';
import StatsForm from './StatsForm';
import StatsTable from './StatsTable';


function getAvailableSubcategories(subject) {
    if (subject in subcategories) {
        return subcategories[subject];
    } else {
        return [];
    }
}


class StatsView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            subject: "null",
            subcategory: "null",
            year: "null",
            gender: "null",
            candidateType: "a"
        };

        this.cleanParams = this.cleanParams.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
        this.updateURL = this.updateURL.bind(this);

        const search = new URLSearchParams(window.location.search);
        const params = Object.fromEntries(search);
        this.state = this.cleanParams(params);
        this.updateURL();
    }

    componentDidMount() {
        window.addEventListener("popstate", (e) => this.setState(e.state));
    }

    cleanParams(params) {
        let state = Object.assign({}, this.state);
        if (subjects.includes(params.subject)) {
            state.subject = params.subject;
        }
        if (getAvailableSubcategories(state.subject).includes(params.subcategory)) {
            state.subcategory = params.subcategory;
        }
        if (years.includes(params.year)) {
            state.year = params.year;
        }
        if (genders.includes(params.gender)) {
            state.gender = params.gender;
        }
        if (candidateTypes.includes(params.candidateType)) {
            state.candidateType = params.candidateType;
        }
        return state;
    }

    handleChange(key, value) {
        let state = {};
        state[key] = value;
        if (key === "subject") {
            state.subcategory = "null";
        }
        this.setState(state, this.updateURL);
    }

    handleChanges(obj) {
        this.setState(obj, this.updateURL);
    }

    updateURL() {
        let params = {};
        for (let key of ["subject", "subcategory", "year", "gender"]) {
            if (this.state[key] !== "null") {
                params[key] = this.state[key];
            }
        }
        if (this.state.candidateType !== "a") {
            params.candidateType = this.state.candidateType;
        }

        let search = new URLSearchParams(params);
        let url = window.location.pathname;
        if (search.toString()) {
            url += "?" + search.toString();
        }
        window.history.pushState(this.state, "", url);
    }

    render() {
        return (
            <>
                <StatsForm handleChange={this.handleChange} params={this.state}
                    availableSubcategories={getAvailableSubcategories(this.state.subject)} />
                <StatsTable handleChanges={this.handleChanges} params={this.state} />
            </>
        );
    }
}

export default StatsView;
