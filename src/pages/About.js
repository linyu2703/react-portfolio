import './About.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faPython, faHtml5, faReact, faCss3Alt, faJava, faJsSquare, faMicrosoft, faRProject, faGit} from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div className='about'>
            <div className='about-container'>
                <div className='about-description'>
                    <h1>About Me</h1>
                    <p>
                    Hello, and welcome to my React portfolio website! 
                    My name is Yu Lin, I am an aspiring data analyst with a deep passion for big data. 
                    I am fascinated by the endless possibilities that data presents and the constant learning it offers.
                    I am always looking for ways to hone my data analysis skills and actively keep up with the latest advancements in data science.
                    </p>
                    <p><i>"You can have data without information, but you cannot have information without data."</i></p>
                </div>
                <div className = 'about-skills'>
                    <ul>
                        <li><FontAwesomeIcon icon={faReact} beat size='2xl'/></li>
                        <li><FontAwesomeIcon icon={faHtml5} beat size='2xl'/></li>
                        <li><FontAwesomeIcon icon={faCss3Alt} beat size='2xl'/></li>
                        <li><FontAwesomeIcon icon={faJsSquare} beat size='2xl'/></li>
                        <li><FontAwesomeIcon icon={faPython} beat size='2xl'/></li>
                        <li><FontAwesomeIcon icon={faJava} beat size='2xl'/></li>
                        <li><FontAwesomeIcon icon={faRProject} beat size='2xl'/></li>
                        <li><FontAwesomeIcon icon={faGit} beat size='2xl'/></li>
                        <li><FontAwesomeIcon icon={faMicrosoft} beat size='2xl'/></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About;