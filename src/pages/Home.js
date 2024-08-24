import "./Home.css";
import Header from "../components/Header";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faFileLines, faLaptop, faCode, faEnvelopeOpen} from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return (
        <div>
            <Header />
            <div className='home'>
            <hr width='35%' align='left' color='#333'/>
            <FontAwesomeIcon className='home-icon1' icon={faFileLines}/>
                <ul><Link to='/about.html'>about.html</Link></ul>
            <FontAwesomeIcon className='home-icon2' icon={faLaptop}/>
                <ul><Link to='/experience.html'>experience.html</Link></ul>
            <FontAwesomeIcon className='home-icon2' icon={faCode}/>
                <ul><Link to='/projects.html'>projects.html</Link></ul>
            <FontAwesomeIcon className='home-icon3' icon={faEnvelopeOpen}/>
                <ul><Link to='/contact.html'>contact.html</Link></ul>
            <hr width='35%' align='left' color='#333'/>
            </div>
        </div>
    )
}

export default Home;