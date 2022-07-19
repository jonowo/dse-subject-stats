import React, { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from "react-router-dom";
import { candidateTypes, genders, getAvailableSubcategories, subjects, years } from './stats';
import SubjectsAForm from './Form';
import SubjectsATable from './Table';

function SubjectsAView(props) {
    const [subject, setSubject] = useState("null");
    const [subcategory, setSubcategory] = useState("null");
    const [year, setYear] = useState("null");
    const [gender, setGender] = useState("null");
    const [candidateType, setCandidateType] = useState(candidateTypes[0]);

    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        if (subjects.includes(searchParams.get("subject"))) {
            setSubject(searchParams.get("subject"));
            if (getAvailableSubcategories(searchParams.get("subject")).includes(searchParams.get("subcategory"))) {
                setSubcategory(searchParams.get("subcategory"));
            } else {
                setSubcategory("null");
            }
        } else {
            setSubject("null");
            setSubcategory("null");
        }
        if (years.includes(searchParams.get("year"))) {
            setYear(searchParams.get("year"));
        } else {
            setYear("null");
        }
        if (genders.includes(searchParams.get("gender"))) {
            setGender(searchParams.get("gender"));
        } else {
            setGender("null");
        }
        if (candidateTypes.includes(searchParams.get("candidateType"))) {
            setCandidateType(searchParams.get("candidateType"));
        } else {
            setCandidateType(candidateTypes[0]);
        }
    }, [searchParams]);

    function getState() {
        return {
            subject: subject,
            subcategory: subcategory,
            year: year,
            gender: gender,
            candidateType: candidateType
        };
    }

    function getURLParams(state) {
        let params = {};
        if (state.subject !== "null") params.subject = state.subject;
        if (state.subcategory !== "null") params.subcategory = state.subcategory;
        if (state.year !== "null") params.year = state.year;
        if (state.gender !== "null") params.gender = state.gender;
        if (state.candidateType !== candidateTypes[0]) params.candidateType = state.candidateType;
        return params;
    }

    function handleChange(key, value) {
        let state = getState();
        state[key] = value;
        if (key === "subject") state.subcategory = "null";
        const params = getURLParams(state);
        const search = new URLSearchParams(params);
        navigate(`?${search.toString()}`);
    }

    const state = getState();

    return (
        <>
            <SubjectsAForm handleChange={handleChange} params={state}
                availableSubcategories={getAvailableSubcategories(state.subject)} />
            <SubjectsATable params={state} />
        </>
    );
}

export default SubjectsAView;
