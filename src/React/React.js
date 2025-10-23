import React, { useState, useEffect } from 'react';
import Section from '../Section.js';
import Footer from '../footer.js';
import ReactCard from './ReactCard.js';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default function ReactPage() {
    const [reactProjects, setReactProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const RString = ['Front End Proficiency', 'CSS Skills', 'Dynamic website', 'React projects'];
    const ReP = 'Here are a few of my React projects, including modern web applications with interactive features and beautiful UIs.';
    const RTitle = "My React Journey";

    useEffect(() => {
        fetchReactProjects();
    }, []);

    const fetchReactProjects = async () => {
        try {
            setLoading(true);
            // Updated endpoint to /data/react
            const response = await fetch(`${API_BASE_URL}/data/react`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            // Extract the React_Apps array from the response
            setReactProjects(data.React_Apps || []);
            setError(null);
        } catch (err) {
            console.error('Error fetching React projects:', err);
            setError('Failed to load projects. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className='react'>
                <Section Strings={RString} Title={RTitle} Paragraph={ReP} />
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h3>Loading projects...</h3>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className='react'>
                <Section Strings={RString} Title={RTitle} Paragraph={ReP} />
                <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                    <h3>{error}</h3>
                    <button onClick={fetchReactProjects}>Retry</button>
                </div>
                <Footer />
            </div>
        );
    }

    return (
        <div className='react'>
            <Section Strings={RString} Title={RTitle} Paragraph={ReP} />
            <ReactCard data={reactProjects} apiBaseUrl={API_BASE_URL} />
            <Footer />
        </div>
    );
}