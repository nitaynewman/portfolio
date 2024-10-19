import React from 'react';
import './React.css';
import '../App.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ReactPlayer from 'react-player'
import React_Projects from '../all_projects.json';
// import {} from 'react-icons/fa'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function JsCards() {
    // Check if JsProjectsData contains the required data
    if (!React_Projects || !React_Projects.React_Projects || !React_Projects.React_Projects.React_Apps) {
        console.error("JS Data is missing or incorrect:", React_Projects);
        return <div>Error: Data is missing or incorrect.</div>;
    }

    return (
        <div>
            <VerticalTimeline lineColor='#00abf0'>
                {React_Projects.React_Projects.React_Apps.map(project => (
                    <VerticalTimelineElement
                        key={project.id}
                        className='verticla-timeline-element--education'
                        visible={false}
                        iconStyle={{ backgroundColor: '#081b29' }}
                        // date='2000-2014'
                        // icon={ }
                    >
                        <h3 style={{
                              fontSize:'3rem'
                        }}>{project.title}</h3>
                        <p style={{
                              fontSize:'16px'
                        }}>{project.paragraph}</p>
                        <button className='BTNN '>
                            <a className='LINK' href={`${project.git_url}`} target="_blank" rel="noopener noreferrer">GitHub Code</a>
                        </button>
                        <button className='BTNN'>
                            <Link to={`${project.url}`} className="LINK">Go To</Link>
                        </button>
                        <ReactPlayer 
                        className='video'
                        url={project.video}
                        width={'90%'}
                        height={'200px'}
                        style={{margin: '20px'}}
                        controls={false}
                        loop={true}
                        playing={true}
                        muted={true}
                        />
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </div>
    );
}
