import React from 'react';
import './React.css';
import '../App.css';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function ReactCard({ data, apiBaseUrl = process.env.REACT_APP_BACKEND_URL }) {
    // Check if data contains the required data
    if (!data || !Array.isArray(data) || data.length === 0) {
        console.error("React Data is missing or incorrect:", data);
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>No React projects available.</p>
            </div>
        );
    }

    return (
        <div>
            <VerticalTimeline lineColor='#00abf0'>
                {data.map(project => {
                    // Construct full video URL from backend
                    const videoUrl = project.video 
                        ? `${apiBaseUrl}/data/${project.video}`
                        : '';

                    return (
                        <VerticalTimelineElement
                            key={project.id}
                            className='verticla-timeline-element--education'
                            visible={false}
                            iconStyle={{ backgroundColor: '#081b29' }}
                        >
                            <h3 style={{ fontSize: '3rem' }}>
                                {project.title}
                            </h3>
                            <p style={{ fontSize: '16px' }}>
                                {project.paragraph}
                            </p>
                            
                            {project.git_url && (
                                <button className='BTNN'>
                                    <a 
                                        className='LINK' 
                                        href={project.git_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                    >
                                        GitHub Code
                                    </a>
                                </button>
                            )}
                            
                            {project.url && (
                                <button className='BTNN'>
                                    <a href={project.url} className="LINK">
                                        Go To
                                    </a>
                                </button>
                            )}
                            
                            {videoUrl && (
                                <ReactPlayer 
                                    className='video'
                                    url={videoUrl}
                                    width={'90%'}
                                    height={'200px'}
                                    style={{ margin: '20px' }}
                                    controls={false}
                                    loop={true}
                                    playing={true}
                                    muted={true}
                                />
                            )}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
}