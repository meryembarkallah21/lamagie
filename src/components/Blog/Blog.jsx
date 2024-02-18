import React from 'react';
import './Blog.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import BlogImage from '../../assets/blog/blog.gif';

export default function Blog() {
    // Icon
    const faRocketIcon = <FontAwesomeIcon icon={faRocket} />

    return (
        <>
            <section id="blog">
                <div className="container">
                    <div className="blog_wrapper">
                        <div className="blog_col">
                            <h3>Unlock Success with La Magie des Montages et Construction Métallique</h3>
                            <p>Explore our wealth of experience gained from working across multiple countries and rest assured of 100% project success with our expertise in metal fabrication and construction.</p>
                            <div className="btn_wrapper">
                            <a className="btn" href="https://drive.google.com/file/d/1mxK1tv4AHzJvLKVSH6UWQ6mIIa2JgN7A/view?usp=sharing" target="_blank" rel="noopener noreferrer">Read Owner's Resume {faRocketIcon}</a>
                            </div>
                        </div>
                        <div className="blog_col">
                            <div className="blog_image">
                                <img src={BlogImage} alt="Blog" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
