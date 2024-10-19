import { useState } from "react";
import './Js.css'
import ReactPlayer from 'react-player'
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "../App.css"

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

export default function Accordion({ data }) {
    const [curOpen, setCurOpen] = useState(null);

    // Check if data contains the required array
    if (!data || !Array.isArray(data)) {
        console.error("Data is missing or incorrect:", data);
        return <div>Error: Data is missing or incorrect.</div>;
    }

    return (
      <div className="accordion">
        {data.map((el, i) => (
          <AccordionItems
            curOpen={curOpen}
            onOpen={setCurOpen}
            title={el.title}
            num={i}
            key={i}
          >
            <div className="card">
                <div className='card-container'>
                    <div className="sides slide">
                        <p style={{fontSize: '15px'}}>{el.paragraph}</p>
                        <button>
                          <a className='LINK' href={`${el.git_url}`} target="_blank" rel="noopener noreferrer">GitHub-Code</a>
                        </button>
                        <button >
                          <Link to={`${el.url}`} className="LINK">Go To</Link>
                        </button>
                    </div>
                    <div className="sides video-container">
                        <ReactPlayer 
                        className='video'
                        url={el.video}
                        controls={false}
                        loop={true}
                        playing={true}
                        muted={true}
                        />
                    </div>
                
                </div>
            </div>
          </AccordionItems>
        ))}
      </div>
    );
}
