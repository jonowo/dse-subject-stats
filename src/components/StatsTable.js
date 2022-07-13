import React from 'react';
import Table from 'react-bootstrap/table';
import { genders, grades, stats, years } from '../stats';
import CopyButton from './CopyButton';

class StatsTable extends React.Component {
    render() {
        let params = this.props.params;

        if (params.subject === "null" && params.year === "null") {
            return (
                <>
                    <h5 className="mb-3">Specify either subject or year to see results.</h5>
                    <p>
                        <a href="" onClick={
                            (e) => {
                                this.props.handleChanges({
                                    subject: "Mathematics",
                                    subcategory: "Compulsory Part",
                                    year: "null",
                                    gender: "total",
                                    candidateType: "a"
                                });
                                e.preventDefault();
                            }
                        }>
                            Show example
                        </a>
                    </p>
                </>
            );
        }

        // Horrible code
        let rows = [];
        for (let year of years) {
            if (params.year !== "null" && params.year !== year) continue;

            const group = stats[year][params.candidateType];
            for (let i = 0; i < group.length; i++) {
                const data = group[i];
                if (params.subject !== "null" && params.subject !== data.subject) continue;
                if (params.subcategory !== "null" && params.subcategory !== data.subcategory) continue;

                let subjectRowSpan = 0, subcategoryRowSpan = 0, subjectColSpan = 1;

                if (data.subcategory && params.subcategory === "null") {
                    if (i === 0 || group[i - 1].subject !== data.subject) {
                        for (let j = i; j < group.length; j++) {
                            if (group[j].subject === data.subject) {
                                subjectRowSpan++;
                            } else {
                                break;
                            }
                        }
                    }
                } else {
                    subjectRowSpan = 1;
                }

                if (data.subcategory) {
                    subcategoryRowSpan = 1;
                } else {
                    subjectColSpan = 2;
                }

                if (params.gender === "null") {
                    subjectRowSpan *= 3;
                    subcategoryRowSpan *= 3;
                }

                for (let gender of (params.gender === "null" ? genders : [params.gender])) {
                    let isLastRow = params.gender !== "null" || gender === genders[genders.length - 1];
                    rows.push(
                        <tr key={`${year}.${data.subject}.${data.subcategory}.${gender}`}
                            className={isLastRow ? "bottom-border" : ""}>

                            {
                                subjectRowSpan
                                    ? (
                                        <>
                                            <td rowSpan={subjectRowSpan.toString()}
                                                className="all-border text-center">{year}</td>
                                            <td rowSpan={subjectRowSpan.toString()}
                                                colSpan={subjectColSpan.toString()}
                                                className="all-border text-start">{data.subject}</td>
                                        </>
                                    )
                                    : ""
                            }
                            {
                                subcategoryRowSpan
                                    ? <td rowSpan={subcategoryRowSpan.toString()}
                                        className="all-border text-start">{data.subcategory}</td>
                                    : ""
                            }
                            <td className="color-bg text-start">
                                {gender.charAt(0).toUpperCase() + gender.slice(1)}
                            </td>
                            <td className="color-bg">{data[gender].no_entered.toString()}</td>
                            <td className="color-bg">{data[gender].no_sat.toString()}</td>
                            <td className="color-bg text-center">
                                {
                                    data[gender].chinese_version !== null
                                        ? data[gender].chinese_version.toFixed(1) + "%"
                                        : "-"
                                }
                            </td>

                            {
                                grades.map((g) =>
                                    <td key={g} className="color-bg">
                                        {data[gender][g].toString()} <br />
                                        {(data[gender][g] / data[gender].no_sat * 100).toFixed(1)}%
                                    </td>
                                )
                            }
                        </tr>
                    );

                    subjectRowSpan = 0;
                    subcategoryRowSpan = 0;
                }
            }
        }

        // When LS bey
        if (!rows) {
            return (
                <p>No results.</p>
            );
        }

        return (
            <>
                <CopyButton />
                <Table responsive bordered size="sm" className="stats-table">
                    <thead>
                        <tr>
                            <th rowSpan="2" width="4%">Year</th>
                            <th rowSpan="2" colSpan="2">Subject</th>
                            <th rowSpan="2" width="6%">Gender</th>
                            <th rowSpan="2" width="6%">No. entered</th>
                            <th rowSpan="2" width="6%">No. sat</th>
                            <th rowSpan="2" width="6%">Chinese version</th>
                            <th colSpan="8">Grades Attained</th>
                        </tr>
                        <tr>
                            {
                                grades.map(g =>
                                    <th key={g} width="5.3%">{g}</th>
                                )
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </Table>
            </>
        );
    }
}

export default StatsTable;
