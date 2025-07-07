import React, { useState, useEffect, useRef } from 'react';
import './styles.css';
import logo_img from '../img/logo.svg'
import projectImg1 from '../img/img1.jpg'
import projectImg2 from '../img/img1.jpg'
import projectImg3 from '../img/img1.jpg'

import HTML from '../img/html.png';
import CSS from '../img/css.png';
import JAVASCRIPT from '../img/javascript.png';
import NODE from '../img/node-js.png';
import REACT from '../img/react1.png';
import SQL from '../img/sql.png';
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css";

const words = [`My\u00A0Portfolio.`, `My\u00A0Blog.`];

const project = [
    {
        title: 'Dashboard Manager',
        desc: 'Web-based dashboard app using React & Node.js.',
        github: 'https://github.com/your-username/dashboard-manager',
        live: 'https://dashboard-manager.example.com',
        project_img: projectImg1
    },
    {
        title: 'Customer Product Manager',
        desc: 'Inventory & customer management platform.',
        github: 'https://github.com/your-username/customer-product-manager',
        live: 'https://customer-product-manager.example.com',
        project_img: projectImg2
    },
    {
        title: 'Virtual Mouse',
        desc: 'Gesture-controlled app using Python & OpenCV.',
        github: 'https://github.com/your-username/virtual-mouse',
        live: 'https://virtual-mouse.example.com',
        project_img: projectImg3
    },
];
const skills = [
    { name: 'HTML', image: HTML, stars: '★★★☆☆' },
    { name: 'CSS', image: CSS, stars: '★★★☆☆' },
    { name: 'JavaScript', image: JAVASCRIPT, stars: '★★☆☆☆' },
    { name: 'React', image: REACT, stars: '★★★☆☆' },
    { name: 'Node.js', image: NODE, stars: '★★★★☆' },
    {
        name: 'Python',
        stars: '★★★★★',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
            </svg>
        ),
    },
    {
        name: 'Java',
        stars: '★★★★★',
        svg: (
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
            </svg>
        ),
    },
    { name: 'SQL', image: SQL, stars: '★★★★☆' },
];

export default function Home() {
    const [visible, setVisible] = useState(false);
    const [index, setIndex] = useState(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const triggerTop = window.innerHeight / 1.3;
            const rect = containerRef.current.getBoundingClientRect();
            if (rect.top < triggerTop) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        };

        handleScroll(); // Initial check in case it's already in view
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % words.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    const splitWord = (word) => word.split(" ").map((char, i) => ({ char, i }));
    return (
        <>
            <header className="bg-dark  shadow animate__animated animate__fadeInDown mt-0">
                <nav className="navbar navbar-expand-md navbar-dark shadow animate__animated animate__fadeInDown animate__delay-1s">
                    <div className="container-fluid">
                        <img src={logo_img} alt="img-fluid" className="img-fluid" style={{ width: "140px" }} />
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="#project">Projects</a>
                                </li>
                                <li className="nav-item mx-3">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                        <a href="https://github.com/your-username" target="_blank" rel="noreferrer"
                            className="btn btn-outline-light animate__animated animate__pulse animate__infinite">GitHub</a>
                    </div>
                </nav>
                <div className="text">
                    <div class="overlay"></div>
                    <span className="subtext text-white">Welcome To&nbsp;
                        <AnimatePresence mode="wait">
                            <motion.span
                                key={index}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="word"
                                style={{ display: "inline-block" }}
                            >
                                {splitWord(words[index]).map(({ char, i }) => (
                                    <motion.span

                                        key={i}
                                        className="letter"
                                        initial={{ y: 20, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        exit={{ y: -20, opacity: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                    >
                                        {char}
                                    </motion.span>
                                ))}
                            </motion.span>
                        </AnimatePresence>
                    </span>
                </div>
            </header>
            <section id="project" className="project_sec">
                <div className="title_sec">
                    <h2 className="">Project</h2>
                    <hr />
                </div>
                <div id="carouselExampleIndicators" className="carousel slide mb-5" data-bs-ride="carousel">
                    <div className="carousel-inner ">
                        {project.map((pro, index) => (
                            <div
                                className={`carousel-item ${index === 0 ? 'active' : ''} rounded bg-opacity-100`}
                                key={index}
                            >
                                <div
                                    className="d-flex flex-column justify-content-center align-items-center text-center"
                                    style={{ height: 'auto', position: 'relative' }} // Added padding
                                >
                                    <img
                                        src={pro.project_img}
                                        className="d-block w-50 rounded"
                                        alt="carousel_images"
                                        style={{ position: 'absolute', zIndex: 1 }}
                                    />
                                    <div className="carousel-caption position-static">
                                        <h5>{pro.title}</h5>
                                        <p>{pro.desc}</p>
                                        <div className='carousel_btn1'>
                                            <a
                                                href={pro.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-primary me-2"
                                            >
                                                GitHub
                                            </a>
                                            <a
                                                href={pro.live}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="btn btn-success"
                                            >
                                                Live Demo
                                            </a>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </section>
            <section id="education" className="text-center my-5">
                <div className="title_sec">
                    <h2>My Journey</h2>
                    <hr />
                </div>
                <div className="journey-container d-flex flex-wrap justify-content-center gap-4">
                    <div className="column"
                        style={{ flex: 1, minWidth: "300px", maxWidth: "500px", borderLeft: "3px dashed #0077b6", paddingLeft: "2rem" }}>
                        <h3>🎓 Education</h3>
                        <div className="entry mb-4">
                            <div className="entry-summary bg-white rounded p-3 shadow">
                                <div className="entry-title fw-bold text-primary">D. I. E. T. Satara</div>
                                <div className="entry-subtitle">B.Tech, 78%</div>
                                <div className="entry-details mt-2">
                                    <p>Focused on software engineering, data structures, and algorithm design. Led academic
                                        projects and participated in university-level hackathons.</p>
                                </div>
                            </div>
                        </div>
                        <div className="entry mb-4">
                            <div className="entry-summary bg-white rounded p-3 shadow">
                                <div className="entry-title fw-bold text-primary">K.B.P. Vidyalaya, Bhuinj</div>
                                <div className="entry-subtitle">HSC, 56%</div>
                                <div className="entry-details mt-2">
                                    <p>Covered the foundations of information technology, including networking and databases.
                                        Developed early skills in web technologies and programming.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column"
                        style={{ flex: 1, minWidth: "300px", maxWidth: "500px", borderLeft: "3px dashed #0077b6", paddingLeft: "2rem" }}>
                        <h3>💼 Experience</h3>
                        <div className="entry mb-4">
                            <div className="entry-summary bg-white rounded p-3 shadow">
                                <div className="entry-title fw-bold text-primary">LPC Advisors Pvt. Ltd- Ex. Web Designer</div>
                                <div className="entry-subtitle">2023 - Present</div>
                                <div className="entry-details mt-2">
                                    <p>Built scalable React applications, collaborated with cross-functional teams, and improved
                                        backend performance using Node.js and MongoDB. Mentored junior developers.</p>
                                </div>
                            </div>
                        </div>
                        <div className="entry mb-4">
                            <div className="entry-summary bg-white rounded p-3 shadow">
                                <div className="entry-title fw-bold text-primary">Codekul Institute - Intern</div>
                                <div className="entry-subtitle">Sept 2022</div>
                                <div className="entry-details mt-2">
                                    <p>Contributed to UI development and bug fixing in legacy code. Assisted in writing
                                        documentation and participated in daily stand-ups and sprint reviews.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="text-center my-5" id="skills">
                <div className="py-5" id="skills">
                    <div className="title_sec">
                        <h2>🛠️ My Skills</h2>
                        <hr />
                    </div>

                    {/* <div className="skills-container d-flex flex-wrap justify-content-center gap-3">

                        <div className="skill-card bg-white text-dark rounded p-3 shadow"
                            style={{ minWidth: "150px", maxWidth: "200px" }}>
                                <img src={HTML} alt="html_img" />
                            <div className="skill-name fw-bold">HTML</div>
                            <div className="stars text-warning fs-4">
                                ★★★☆☆
                            </div>
                        </div>

                        <div className="skill-card bg-white text-dark rounded p-3 shadow"
                            style={{ minWidth: "150px", maxWidth: "200px" }}>
                                <img src={CSS} alt="" />
                            <div className="skill-name fw-bold">CSS</div>
                            <div className="stars text-warning fs-4">
                                ★★★☆☆
                            </div>
                        </div>

                        <div className="skill-card bg-white text-dark rounded p-3 shadow"
                            style={{ minWidth: "150px", maxWidth: "200px" }}>
                                <img src={JAVASCRIPT} alt="" />
                            <div className="skill-name fw-bold">JavaScript</div>
                            <div className="stars text-warning fs-4">
                                ★★☆☆☆
                            </div>
                        </div>

                        <div className="skill-card bg-white text-dark rounded p-3 shadow"
                            style={{ minWidth: "150px", maxWidth: "200px" }}>
                                <img src={REACT} alt="" />
                            <div className="skill-name fw-bold">React</div>
                            <div className="stars text-warning fs-4">
                                ★★★☆☆
                            </div>
                        </div>

                        <div className="skill-card bg-white text-dark rounded p-3 shadow"
                            style={{ minWidth: "150px", maxWidth: "200px" }}>
                                <img src={NODE} alt="" />
                            <div className="skill-name fw-bold">Node.js</div>
                            <div className="stars text-warning fs-4">
                                ★★★★☆
                            </div>
                        </div>

                        <div className="skill-card bg-white text-dark rounded p-3 shadow"
                            style={{ minWidth: "150px", maxWidth: "200px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                            </svg>
                            <div className="skill-name fw-bold">Python</div>
                            <div className="stars text-warning fs-4">
                                ★★★★★
                            </div>
                        </div>
                        <div className="skill-card bg-white text-dark rounded p-3 shadow"
                            style={{ minWidth: "150px", maxWidth: "200px" }}>
                            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
                                <path fill="#F44336" d="M23.65,24.898c-0.998-1.609-1.722-2.943-2.725-5.455C19.229,15.2,31.24,11.366,26.37,3.999c2.111,5.089-7.577,8.235-8.477,12.473C17.07,20.37,23.645,24.898,23.65,24.898z"></path><path fill="#F44336" d="M23.878,17.27c-0.192,2.516,2.229,3.857,2.299,5.695c0.056,1.496-1.447,2.743-1.447,2.743s2.728-0.536,3.579-2.818c0.945-2.534-1.834-4.269-1.548-6.298c0.267-1.938,6.031-5.543,6.031-5.543S24.311,11.611,23.878,17.27z"></path><g><path fill="#1565C0" d="M32.084 25.055c1.754-.394 3.233.723 3.233 2.01 0 2.901-4.021 5.643-4.021 5.643s6.225-.742 6.225-5.505C37.521 24.053 34.464 23.266 32.084 25.055zM29.129 27.395c0 0 1.941-1.383 2.458-1.902-4.763 1.011-15.638 1.147-15.638.269 0-.809 3.507-1.638 3.507-1.638s-7.773-.112-7.773 2.181C11.683 28.695 21.858 28.866 29.129 27.395z"></path><path fill="#1565C0" d="M27.935,29.571c-4.509,1.499-12.814,1.02-10.354-0.993c-1.198,0-2.974,0.963-2.974,1.889c0,1.857,8.982,3.291,15.63,0.572L27.935,29.571z"></path><path fill="#1565C0" d="M18.686,32.739c-1.636,0-2.695,1.054-2.695,1.822c0,2.391,9.76,2.632,13.627,0.205l-2.458-1.632C24.271,34.404,17.014,34.579,18.686,32.739z"></path><path fill="#1565C0" d="M36.281,36.632c0-0.936-1.055-1.377-1.433-1.588c2.228,5.373-22.317,4.956-22.317,1.784c0-0.721,1.807-1.427,3.477-1.093l-1.42-0.839C11.26,34.374,9,35.837,9,37.017C9,42.52,36.281,42.255,36.281,36.632z"></path><path fill="#1565C0" d="M39,38.604c-4.146,4.095-14.659,5.587-25.231,3.057C24.341,46.164,38.95,43.628,39,38.604z"></path></g>
                            </svg>
                            <div className="skill-name fw-bold">Java</div>
                            <div className="stars text-warning fs-4">
                                ★★★★★
                            </div>
                        </div>

                        <div className="skill-card bg-white text-dark rounded p-3 shadow"
                            style={{ minWidth: "150px", maxWidth: "200px" }}>
                                <img src={SQL} alt="" />
                            <div className="skill-name fw-bold">SQL</div>
                            <div className="stars text-warning fs-4">
                                ★★★★☆
                            </div>
                        </div>

                    </div> */}
                    <div
                        ref={containerRef}
                        className="container-fluid d-flex flex-wrap justify-content-center gap-3"
                        style={{
                            transition: 'opacity 0.7s ease, transform 0.7s ease',
                            opacity: visible ? 1 : 0,
                            transform: visible ? 'translateY(0)' : 'translateY(50px)',
                        }}
                    >
                        {skills.map((skill, i) => (
                            <div
                                key={i}
                                className="bg-white text-dark rounded p-3 shadow text-center"
                                style={{
                                    minWidth: '150px',
                                    maxWidth: '200px',
                                    transition: 'all 0.6s ease',
                                    // transform: visible
                                    //     ? `translate(${(i % 4) * 10}px, ${Math.floor(i / 4) * 20}px)`
                                    //     : 'translateY(0)',
                                    opacity: visible ? 1 : 0,
                                }}
                            >
                                {skill.image && <img src={skill.image} alt={skill.name} width="80" />}
                                {skill.svg && skill.svg}
                                <div className="fw-bold mt-2">{skill.name}</div>
                                <div className="text-warning fs-4">{skill.stars}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id='about'>
                <h2 className="section-title">About</h2>
                <div class="about-card">
                    <h2>Mayur Kumbhar</h2>
                    <h4>Web Designer</h4>
                    <p>
                        I'm a passionate web designer who loves creating modern, user-friendly websites.
                        When I'm not designing, I enjoy playing cricket with friends and watching movies.
                        My creativity thrives both on the screen and off it.
                    </p>
                </div>
            </section>
            <section className="py-5 contact-section" id="contact">
                <h2>📧 Get in Touch</h2>
                <div className="container-fluid d-flex flex-wrap justify-content-center gap-3">
                    <div class="contact-info">
                        <h3>Let's talk</h3>
                        <p>I’d love to hear from you! Whether it’s a project, collaboration, or just a friendly hello — feel free to reach
                            out.</p>
                        <p><strong>Address:</strong> 123 Designer Lane, Pune, Maharashtra, India</p>
                        <p><strong>Email:</strong> mayur.k@example.com</p>
                        <p><strong>Phone:</strong> +91 98765 43210</p>
                        <div className="contact-img-container text-center">
                            <div className="social-icons mt-4">
                                <a href="https://twitter.com/placeholder" target="_blank" rel="noreferrer" className="social-link">
                                    <i className="fab fa-twitter"></i>
                                </a>
                                <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noreferrer" className="social-link">
                                    <i className="fab fa-linkedin"></i>
                                </a>
                                <a href="https://facebook.com/placeholder" target="_blank" rel="noreferrer" className="social-link">
                                    <i className="fab fa-facebook"></i>
                                </a>
                                <a href="https://github.com/placeholder" target="_blank" rel="noreferrer" className="social-link">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="contact-form">
                        <h3>Contact Form</h3>
                        <form action="#" method="POST">
                            <input type="text" name="name" placeholder="Your Name" required />
                            <input type="email" name="email" placeholder="Your Email" required />
                            <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                            <button type="submit">Send Message</button>
                        </form>
                    </div>
                </div>
                <iframe class="map" title='mapFrame'
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.010607949217!2d73.85674331527361!3d18.520430087393125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c07c5aa7c2df%3A0x2c6b07b4081a76fa!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1620112345678!5m2!1sen!2sin"
                    allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" >
                </iframe>
            </section>
            <section className="footer">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 text-start">
                            <span>Terms and Conditions 2025 @mayurkumbhar</span>
                        </div>
                        <div className="col-4" style={{ display: "flex", justifyContent: 'end', gap: "20px", margin: "auto" }}>
                            <i className="fab fa-twitter fa-lg"></i>
                            <i className="fab fa-facebook-f fa-lg"></i>
                            <i className="fab fa-google fa-lg"></i>
                            <i className="fab fa-linkedin-in fa-lg"></i>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
