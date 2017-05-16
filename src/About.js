import React, { Component } from 'react';
import { Grid, Row, Col, Button } from 'react-bootstrap';

import './About.css';
class About extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <section className="block-content t-block-teal l-block-spacing">
                <div className="l-contained">
                    <header className="heading-group">
                        <h2>Curriculum Vitae</h2>
                        <p className="subtitle">
                            Akademische Laufbahn
							</p>
                    </header>
                    <ul className="timeline-list">
                        <li>
                            <div className="content">
                                <h3>Ab 2014</h3>
                                <p>
                                    Bachelor-Studium an der Technischen Universität München (Informatik: Games Engineering)
								</p>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <h3>2009-2013</h3>
                                <p>
                                    Robert Bosch Gymnasium Langenau
                                    Abschluss: Abitur im Jahr 2013
								</p>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <h3>2007-2009</h3>
                                <p>
                                    Colegio Humboldt Puebla, Mexiko
								</p>
                            </div>
                        </li>
                        <li>
                            <div className="content">
                                <h3>2005-2007</h3>
                                <p>
                                    Robert Bosch Gymnasium Langenau
								</p>
                            </div>
                        </li>



                        <li>
                            <div className="content">
                                <h3>2001-2005</h3>
                                <p>
                                    Grundschule Bernstadt
                                </p>
                            </div>
                        </li>
                    </ul>



                </div>

            </section>
        );
    }
}

export default About;