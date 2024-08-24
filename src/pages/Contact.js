import './Contact.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faLinkedin, faGithub} from "@fortawesome/free-brands-svg-icons";
import {faMapPin, faEnvelopeOpen, faFileLines} from "@fortawesome/free-solid-svg-icons"
import resume from '../assets/resume.pdf'

const Contact = () => {
    return (
        <div className='contact'>
            <div className='contact-container'>
                <div className='contact-info'>
                    <h1>Contact Me</h1>
                    <div className='map'> 
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1507.5556609216685!2d-73.1188184355699!3d40.91330496376644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e83f2e2c584899%3A0xb7b37e4b09342819!2sNew%20Computer%20Science!5e0!3m2!1sen!2sus!4v1724289166348!5m2!1sen!2sus" width='50%' height="200"></iframe>
                </div>
                    <li><FontAwesomeIcon className='contact-icon' icon={faMapPin}/>New Computer Science, Engineering Dr, Stony Brook, NY 11794</li>
                    <li><a href='https://www.linkedin.com/in/yu-lin-cs/' target='blank'><FontAwesomeIcon className='contact-icon' icon={faLinkedin}/>LinkedIn</a></li>
                    <li><a href='https://github.com/linyu2703' target='blank'><FontAwesomeIcon className='contact-icon' icon={faGithub}/>Github</a></li>
                    <li><a href='mailto:yulin2@cs.stonybrook.edu'><FontAwesomeIcon className='contact-icon' icon={faEnvelopeOpen}/>yulin2@cs.stonybrook.edu</a></li>
                    <li><a href={resume} target='blank' rel='noreferrer'><FontAwesomeIcon className='contact-icon' icon={faFileLines}/>Resume</a></li>
                </div>
            </div>
        </div>
    )
}

export default Contact;