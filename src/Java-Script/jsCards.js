import { useState } from "react";
import './Js.css';
import ReactPlayer from 'react-player';
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../App.css";

function AccordionItems({ num, title, children, curOpen, onOpen }) {
    const isOpen = num === curOpen;
    
    function handleToggle() {
        onOpen(isOpen ? null : num);
    }
    
    return (
        <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
            <p className="num">{num < 9 ? `0${num + 1} ` : num + 1}</p>
            <p className="title">{title}</p>
            <p className="icon">{isOpen ? "-" : "+"}</p>
            {isOpen && <div className="content-box">{children}</div>}
        </div>
    );
}

export default function Accordion({ data, apiBaseUrl = 'http://localhost:8000' }) {
    const [curOpen, setCurOpen] = useState(null);

    // Check if data contains the required array
    if (!data || !Array.isArray(data) || data.length === 0) {
        console.error("Data is missing or incorrect:", data);
        return (
            <div style={{ textAlign: 'center', padding: '50px' }}>
                <p>No JavaScript projects available.</p>
            </div>
        );
    }

    return (
        <div className="accordion">
            {data.map((el, i) => {
                // Construct full video URL from backend
                const videoUrl = el.video 
                    ? `${apiBaseUrl}/data/${el.video}`
                    : '';

                return (
                    <AccordionItems
                        curOpen={curOpen}
                        onOpen={setCurOpen}
                        title={el.title}
                        num={i}
                        key={el.id || i}
                    >
                        <div className="card">
                            <div className='card-container'>
                                <div className="sides slide">
                                    <p style={{ fontSize: '15px' }}>
                                        {el.paragraph}
                                    </p>
                                    
                                    {el.git_url && (
                                        <button>
                                            <a 
                                                className='LINK' 
                                                href={el.git_url} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                            >
                                                GitHub-Code
                                            </a>
                                        </button>
                                    )}
                                    
                                    {el.url && (
                                        <button className='BTNN'>
                                            <a href={el.url} className="LINK">
                                                Go To
                                            </a>
                                        </button>
                                    )}
                                </div>
                                
                                <div className="sides video-container">
                                    {videoUrl ? (
                                        <ReactPlayer 
                                            className='video'
                                            url={videoUrl}
                                            controls={false}
                                            loop={true}
                                            playing={true}
                                            muted={true}
                                        />
                                    ) : (
                                        <div style={{ 
                                            width: '100%', 
                                            height: '100%', 
                                            display: 'flex', 
                                            alignItems: 'center', 
                                            justifyContent: 'center',
                                            background: '#f0f0f0'
                                        }}>
                                            <p>No video available</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </AccordionItems>
                );
            })}
        </div>
    );
}