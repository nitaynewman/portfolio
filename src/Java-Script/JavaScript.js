import React, { useState, useEffect } from 'react';
import Section from '../Section.js';
import Accordion from './jsCards.js';
import Footer from '../footer.js';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

export default function JavaScript() {
    const [jsProjects, setJsProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const JsString = ['Front End Proficiency', 'CSS Skills', 'Dynamic website'];
    const JsP = 'Here are a few of my JavaScript projects, including blog, games and more!';
    const JsTitle = "My JavaScript Journey";

    useEffect(() => {
        fetchJsProjects();
    }, []);

    const fetchJsProjects = async () => {
        try {
            setLoading(true);
            // Updated endpoint to /data/js
            const response = await fetch(`${API_BASE_URL}/data/js`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            // Extract the Js_App array from the response
            setJsProjects(data.Js_App || []);
            setError(null);
        } catch (err) {
            console.error('Error fetching JS projects:', err);
            setError('Failed to load projects. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className='js'>
                <Section Strings={JsString} Title={JsTitle} Paragraph={JsP} />
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h3>Loading projects...</h3>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className='js'>
                <Section Strings={JsString} Title={JsTitle} Paragraph={JsP} />
                <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                    <h3>{error}</h3>
                    <button onClick={fetchJsProjects}>Retry</button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className='js'>
            <Section Strings={JsString} Title={JsTitle} Paragraph={JsP} />
            <Accordion data={jsProjects} apiBaseUrl={API_BASE_URL} />
            <Footer />
        </div>
    );
}