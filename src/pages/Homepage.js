import Header from "../components/Header";
import Footer from "../components/Footer";
import Section from "../components/Section";
import Banner from "../components/Banner";

import "../styles/pages/Homepage.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBrain, faBriefcase, faGraduationCap, faLanguage } from "@fortawesome/free-solid-svg-icons";

export default function Homepage() {
    return (
        <main>
            <Header/>
            <Banner src="/images/background.png">
                <h1>Fay Verberk</h1>
                <h5>Actor, Teacher, Photographer</h5>
            </Banner>
            <Section outer>
                <h1>About Me</h1>
                <p>A creative millipede, that is how a lot of people see me. My creativity is one of my strongest properties and passion.</p>
                <div className='info'>
                    <div className='info__education'>
                        <h3><FontAwesomeIcon icon={faGraduationCap} /> Education</h3>
                        <div className='sideline__item sideline'>
                            <h4>Het College Vos</h4>
                            <span>2008 - 2012 GLT - KBL</span>
                            <p>Graduated</p>
                        </div>
                        <div className='sideline__item sideline'>
                            <h4>MAVO Vos</h4>
                            <span>2012 - 2014 MAVO</span>
                            <p>Graduated</p>
                        </div>
                        <div className='sideline__item sideline'>
                            <h4>Codarts Muziektheater Vooropleiding</h4>
                            <span>2014 - 2015 Musical & Muziektheater</span>
                            <p>Certified</p>
                        </div>
                        <div className='sideline__item sideline'>
                            <h4>MBO Theaterschool</h4>
                            <span>2014 - 2017 Artiest</span>
                            <p>Graduated</p>
                        </div>
                        <div className='sideline__item sideline'>
                            <h4>MBO Musicalperformer</h4>
                            <span>2017 - 2018 Interdisciplinair Performer</span>
                            <p>Graduated</p>
                        </div>
                    </div>
                    <div className='work-experience'>
                        <h3><FontAwesomeIcon icon={faBriefcase}/> Work Experience</h3>
                        <div className="sideline sideline__item">
                            <h4>Studio Forza</h4>
                            <p>Musical lessons for children</p>
                        </div>
                        <div className="sideline sideline__item">
                            <h4>Cultuurschool</h4>
                            <p>Theatre workshops</p>
                            <p>Christmas show workshop</p>
                            <p>Movie acting workshop</p>
                        </div>
                        <div className="sideline sideline__item">
                            <h4>Popschool Westland</h4>
                            <p>Singing lessons for children</p>
                            <p>Piano lessons for children</p>
                        </div>
                    </div>
                    <div className='info__details'>
                        <h3><FontAwesomeIcon icon={faBrain} /> Qualities</h3>
                        <ul>
                            <li>Caring</li>
                            <li>Sales person</li>
                            <li>Photographer</li>
                            <li>Piano Player</li>
                            <li>Writer</li>	
                        </ul>
                        <h3><FontAwesomeIcon icon={faLanguage} /> Languages</h3>
                        <ul>
                            <li>Dutch</li>
                            <li>English</li>
                        </ul>
                    </div>
                </div>
            </Section>
            <Footer/>
        </main>
    );
}