import './Experience.css';
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMicrosoft} from "@fortawesome/free-brands-svg-icons";
import {faChalkboard} from "@fortawesome/free-solid-svg-icons";

const event = [
    {
        date: "Jun 2024 - Present",
        company: "SBSH",
        location: "(Stony Brook, NY)",
        position: "Data Analyst Intern",
        icon: <FontAwesomeIcon icon={faMicrosoft} size="2x" />,
        description: <p><li>Updated and maintained patient database using CPSI EHR and Soarian EDM systems. </li>
            <li>Cleaned large datasets using MS Power Query, built data pipelines on MS Fabric to transfer data to a lake storage, and leveraged Spark SQL for efficient querying and analysis.</li> 
            <li> Utilized data analytics and visualization techniques in MS Power BI to develop dashboards and reports, aiding financial decision-making across 6+ hospital sub-departments, identifying areas of improvements and growth strategies to optimize healthcare quality and patient outcomes.</li>
        </p>    
    },

    {
        date: "Jan 2024 - May 2024",
        company: "SBU CS",
        location: "(Stony Brook, NY)",
        position: "Teaching Assistant",
        icon: <FontAwesomeIcon icon={faChalkboard} size="2x" />,
        description: <p><li>Taught Python Programming to a diverse cohort of 200+ students weekly through instructional feedback and support.</li>
            <li>Coordinated and facilitated office hours and lab sessions on Wednesdays to groups of 30+ students.</li>
        </p>
    }
]

const Experience = () => {
    return (
        <VerticalTimeline className='experience'>
            {event.map(event => (
                <VerticalTimelineElement
                    key={event.company}
                    date={event.date + " " + event.location}    
                    iconStyle={{background: "#d999a3", color: "#fff"}}
                    contentStyle={{background: "#d999a3", color: "#fff", }}
                    icon={event.icon}
                    dateClassName='date'>
                    <h3 className="vertical-timeline-element-title">{event.company + " - " + event.position}</h3>
                    <p>{event.description}</p>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>
    )
}

export default Experience;