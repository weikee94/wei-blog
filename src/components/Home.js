import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/home.scss';

const Home = () => {
    return (
        <div className="blog-home">
            <p className="about">
                Hi, I'm a noob developer!
                I like to collaborate with people and able to work and communicate well with different people from various background.
                Tend to be a front-end developer and experienced working in software development life cycle like Agile and etc.
            </p>
            <p>
                Find me on  <a href="https://github.com/weikee94"><i className="fab fa-github"></i></a>&nbsp;
                            <a href="https://www.linkedin.com/in/wei-kee-haw-2806b8109/"><i className="fab fa-linkedin"></i></a>&nbsp; and <a href="mailto:weikee070194@gmail.com"><i className="fas fa-envelope"></i></a>
            </p>

            <div className="archives-section">
                <p className="title">Archives</p>
                <ul className="list">
                    <li className="item">
                        <div>
                            <span className="post-time">01 May 2018</span>
                            <span className="post-title">
                                <NavLink className="back-home" to="../archives/1">
                                    <span>Init React Project</span>
                                </NavLink>
                            </span>
                        </div>
                    </li>
                    <li className="item">
                        <div>
                            <span className="post-time">19 April 2018</span>
                            <span className="post-title">
                                <NavLink className="back-home" to="../archives/2">
                                    <span>Tools Using</span>
                                </NavLink>
                            </span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className="explore-section">
                <p className="title">Explore Playground</p>
                <ul className="explore-item">
                    <li><a href="https://www.apollographql.com/">Apollo - GraphQL over REST</a></li>
                    <li><a href="https://graphql.org/">GraphQL - GraphQL is a query language for APIs</a></li>
                    <li><a href="https://neo4j.com/">Neo4j - The graph database platform</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Home;