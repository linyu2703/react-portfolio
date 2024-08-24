import './Projects.css';
import food from '../assets/food.png';
import excel from '../assets/excel.jpg';
import stock from '../assets/stock.webp';
import working from '../assets/working.jpg';

const Projects = () => {
    return (
        <div className='projects'>
            <div className='projects-containers'>
                <div className='projects-item'>
                    <h1>Dining Food Exploratory</h1>
                    <a href='https://github.com/linyu2703' target='blank'><img src={food} alt='food analysis project'/></a>
                    <li>Analyzed Stony Brook University's Dining Hall food data using Python to guide students toward healthier meal choices.</li>
                    <li>Developed a Tableau dashboard to present statistical insights and visualize food health benefits and drawbacks.</li>
                </div>
                <div className='projects-item'>
                    <h1>Stock Market Analysis</h1>
                    <a href='https://github.com/linyu2703' target='blank'><img src={stock} alt='stock market project'/></a>
                    <li>Conducted stock market analysis using Python to identify trends and patterns in historical stock price data.</li>
                    <li>Built data visualizations and generated statistical insights to inform investment strategies and decision-making, using PowerBI.</li>
                </div>
                <div className='projects-item'>
                    <h1>Excel Guidebook</h1>
                    <a href='https://github.com/linyu2703' target='blank'><img src={excel} alt='excel cheatsheet project'/></a>
                    <li>Designed and developed a user-friendly website providing a comprehensive cheat sheet for Excel fundamentals.</li>
                </div>
                <div className='projects-item'>
                    <h1>Upcoming</h1>
                    <a href='https://github.com/linyu2703' target='blank'><img src={working} alt='food analysis project'/></a>
                    <li>Currently working on...</li>
                </div>
            </div>  
        </div>
    )
}

export default Projects;