import React from 'react';
import Form from 'react-bootstrap/form';
import Row from 'react-bootstrap/row';
import Col from 'react-bootstrap/col';
import { years, subjects, subcategories } from '../stats.js';

class StatsForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.handleChange(event.target.name, event.target.value);
    }

    render() {
        const params = this.props.params;
        let availableSubcategories = subcategories[params.subject] || null;
        return (
            <Form className="mb-3">
                <Row>
                    <Col md={6} lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Subject</Form.Label>
                            <Form.Select name="subject" value={params.subject}
                                onChange={this.handleChange}>
                                <option value="null">-</option>
                                {
                                    subjects.map((s) =>
                                        <option key={s.toString()}>{s}</option>
                                    )
                                }
                            </Form.Select>
                        </Form.Group>
                        {availableSubcategories === null &&
                            <Form.Group className="mb-3">
                                <Form.Label>Subcategory</Form.Label>
                                <Form.Select name="subcategory" value={params.subcategory}
                                    onChange={this.handleChange} disabled>
                                    <option value="null">-</option>
                                </Form.Select>
                            </Form.Group>
                        }
                        {availableSubcategories !== null &&
                            <Form.Group className="mb-3">
                                <Form.Label>Subcategory</Form.Label>
                                <Form.Select name="subcategory" value={params.subcategory}
                                    onChange={this.handleChange}>
                                    <option value="null">-</option>
                                    {
                                        availableSubcategories.map((s) =>
                                            <option key={s.toString()}>{s}</option>
                                        )
                                    }
                                </Form.Select>
                            </Form.Group>
                        }
                    </Col>
                    <Col md={6} lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Year</Form.Label>
                            <Form.Select name="year" value={params.year}
                                onChange={this.handleChange}>
                                <option value="null">-</option>
                                {
                                    years.map((y) =>
                                        <option key={y.toString()}>{y}</option>
                                    )
                                }
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Gender</Form.Label>
                            <Form.Select name="gender" value={params.gender}
                                onChange={this.handleChange}>
                                <option value="null">-</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="total">Total</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                    <Col md={6} lg={4}>
                        <Form.Group className="mb-3">
                            <Form.Label>Candidate Type</Form.Label>
                            <Form.Select name="candidateType" value={params.candidateType}
                                onChange={this.handleChange}>
                                <option value="a">Day School Candidates</option>
                                <option value="b">All Candidates</option>
                            </Form.Select>
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        );
    }
}

export default StatsForm;
