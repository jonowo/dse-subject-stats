import React from 'react';
import StatsForm from './StatsForm';
import StatsTable from './StatsTable';

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

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(key, value) {
        this.setState({ [key]: value });
        if (key === "subject") {
            this.setState({ subcategory: "null" });
        }
    }

    render() {
        return (
            <>
                <StatsForm handleChange={this.handleChange} params={this.state} />
                <StatsTable params={this.state} />
            </>
        );
    }
}

export default StatsView;
