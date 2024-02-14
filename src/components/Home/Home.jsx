import React from 'react';
import './Home.css';
import BannerImage from '../../assets/banner/lamagie.gif';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWrench, faShieldAlt, faChartArea } from '@fortawesome/free-solid-svg-icons';

export default function Home() {

    // Icons
    const faWrenchIcon = <FontAwesomeIcon icon={faWrench} />
    const faShieldAltIcon = <FontAwesomeIcon icon={faShieldAlt} />
    const faChartAreaIcon = <FontAwesomeIcon icon={faChartArea} />

    // Function to open email client
    const handleContactEmail = () => {
        window.location.href = 'mailto:lamagiemcm@gmail.com';
    };

    return (
        <>
            <section id="home">
                <div className="banner_image"></div>
                <div className="container">
                    <div className="banner_outer">
                        <div className="col">
                            <h3 className="title">
                                Welcome to La Magie des Montages et Construction Métallique
                            </h3>
                            <p>Your trusted partner for metal fabrication and construction projects. At La Magie des Montages et Construction Métallique, we specialize in providing high-quality metal fabrication and construction services tailored to meet your specific needs. Whether it's welding, pipefitting, assembly, or any other metalwork, we have the expertise and dedication to deliver exceptional results.</p>
                            <div className="btn_wrapper">
                                <button className="btn" onClick={handleContactEmail}>Contact Us</button>
                            </div>
                        </div>
                        <div className="col">
                            <div className="sub_banner_image">
                                <img src={BannerImage} alt="Banner_image" />
                            </div>
                            <div className="banner_style_1">
                                {faWrenchIcon}
                                <h4>Expertise in Metal Fabrication</h4>
                            </div>
                            <div className="banner_style_1 banner_style_2">
                                {faShieldAltIcon}
                                <h4>Guaranteed Success</h4>
                            </div>
                            <div className="banner_style_1 banner_style_3">
                                {faChartAreaIcon}
                                <h4>Strategic Solutions</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
