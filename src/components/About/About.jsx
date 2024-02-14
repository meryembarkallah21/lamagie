import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faUsers, faBuilding, faChartLine, faPhone } from '@fortawesome/free-solid-svg-icons';
import AboutImage from '../../assets/about/aboutus.gif';

export default function About() {
    // Icons
    const faWrenchIcon = <FontAwesomeIcon icon={faWrench} />
    const faUsersIcon = <FontAwesomeIcon icon={faUsers} />
    const faBuildingIcon = <FontAwesomeIcon icon={faBuilding} />
    const faChartLineIcon = <FontAwesomeIcon icon={faChartLine} />
    const faPhoneIcon = <FontAwesomeIcon icon={faPhone} />

    return (
        <>
            <section id="about">
                <div className="container">
                    <div className="title_headling">
                        <h3>Welcome to La Magie des Montages et Construction Métallique</h3>
                        <p>Your trusted partner for metal fabrication and construction projects</p>
                    </div>
                    <div className="about_box_wrapper">
                        <div className="about_box">
                            <div className="about_icon">
                                {faWrenchIcon}
                            </div>
                            <div className="about_content">
                                <h5>Expertise in Metal Fabrication</h5>
                                <p>Skilled and experienced with expertise in welding, pipefitting, and assembly. We have successfully handled projects involving the assembly of new mills and the construction of storage silos.</p>
                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon green_icon">
                                {faUsersIcon}
                            </div>
                            <div className="about_content">
                                <h5>Effective Team Management</h5>
                                <p>Proven ability to communicate effectively and manage teams to achieve project objectives. Our experienced teams ensure seamless coordination and timely completion of projects.</p>
                            </div>
                        </div>
                        <div className="about_box">
                            <div className="about_icon blue_icon">
                                {faBuildingIcon}
                            </div>
                            <div className="about_content">
                                <h5>Wide Range of Projects</h5>
                                <p>From assembling production lines for pasta and couscous to constructing storage silos like the "BBCA Model" and "My Silo Model," we have a diverse portfolio of successful projects.</p>
                            </div>
                        </div>
                    </div>

                    <div className="about_box_details">
                        <div className="about_col">
                            <div className="about_image">
                                <img src={AboutImage} alt="about" className="about_main" />
                            </div>
                            <div className="img_info__box">
                                <h6 className="img_info__title">Contact Us</h6>
                                <p>For inquiries and quotes:</p>
                                <a href="mailto:lamagiemcm@gmail.com">{faPhoneIcon} <span>lamagiemcm@gmail.com</span></a>
                            </div>
                        </div>
                        <div className="about_col more_space">
                            <h3>Why Choose Us?</h3>
                            <p>With over a decade of professional experience and a commitment to excellence, we deliver exceptional results for your metal fabrication and construction needs.</p>

                            <div className="grid_info">
                                <div className="icon">{faChartLineIcon}</div>
                                <div className="detail">
                                    <h4>Decade of Professional Experience</h4>
                                    <p>With many years in the industry, we bring extensive knowledge and expertise to every project.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
