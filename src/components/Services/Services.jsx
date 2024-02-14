import React from 'react';
import './Services.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faCog, faTools, faClipboardCheck, faUsersCog, faHandshake } from '@fortawesome/free-solid-svg-icons';

export default function Services() {

    // Icons
    const faWrenchIcon = <FontAwesomeIcon icon={faWrench} />
    const faCogIcon = <FontAwesomeIcon icon={faCog} />
    const faToolsIcon = <FontAwesomeIcon icon={faTools} />
    const faClipboardCheckIcon = <FontAwesomeIcon icon={faClipboardCheck} />
    const faUsersCogIcon = <FontAwesomeIcon icon={faUsersCog} />
    const faHandshakeIcon = <FontAwesomeIcon icon={faHandshake} />

    return (
        <>
            <div id="services">
                <div className="container">
                    <div className="title_headling">
                        <h3>Our Services</h3>
                        <p>Explore the range of services we offer to our customers.</p>
                    </div>
                    <div className="service_wrapper">
                        <div className="service_box">
                            <div className="service_icon blue_icon">{faWrenchIcon}</div>
                            <h4 className="number">01</h4>
                            <div className="service_content">
                                <h5>Welding and Fabrication</h5>
                                <p>Skilled in welding techniques, metal fabrication, and assembly. We specialize in assembling new mills like the "OCRIM Model" and constructing wheat storage silos such as the "BBCA Model" and "My Silo Model."</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon">{faCogIcon}</div>
                            <h4 className="number">02</h4>
                            <div className="service_content">
                                <h5>Pipefitting</h5>
                                <p>Expertise in pipefitting and pneumatic piping</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon green_icon">{faToolsIcon}</div>
                            <h4 className="number">03</h4>
                            <div className="service_content">
                                <h5>Assembly</h5>
                                <p>Experience in assembling various industrial equipment</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon">{faClipboardCheckIcon}</div>
                            <h4 className="number">04</h4>
                            <div className="service_content">
                                <h5>Project Management</h5>
                                <p>Ability to interpret blueprints and manage project timelines</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon green_icon">{faUsersCogIcon}</div>
                            <h4 className="number">05</h4>
                            <div className="service_content">
                                <h5>Team Management</h5>
                                <p>Proven ability to communicate effectively and manage teams</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                        <div className="service_box">
                            <div className="service_icon blue_icon">{faHandshakeIcon}</div>
                            <h4 className="number">06</h4>
                            <div className="service_content">
                                <h5>Customer Satisfaction</h5>
                                <p>Dedicated to providing top-notch service and ensuring customer satisfaction</p>
                                <a href="/" className="read">Read more</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
