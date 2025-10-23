import React, { useState, useEffect } from "react";
import Section from '../Section.js';
import Footer from '../footer.js';
import Carousel from './pyCarousel.js';

// Configuration for API
const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default function Python() {
    const [pythonProjects, setPythonProjects] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const PYstring = ['API', 'Automations and Selenium', 'Basics']; 
    const PyP = 'Here you can see all my journey in Python. This includes API calls, automations, backend projects, Games, GUI apps, and more.';
    const PyTitle = 'My Python Journey';

    useEffect(() => {
        fetchPythonProjects();
    }, []);

    const fetchPythonProjects = async () => {
        try {
            setLoading(true);
            // Updated endpoint to /data/python
            const response = await fetch(`${API_BASE_URL}/data/python`);
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            // Data is now directly the categories object
            setPythonProjects(data);
            setError(null);
        } catch (err) {
            console.error('Error fetching Python projects:', err);
            setError('Failed to load projects. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return (
            <div className="python">
                <Section Strings={PYstring} Title={PyTitle} Paragraph={PyP} />
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h3>Loading projects...</h3>
                </div>
                <Footer />
            </div>
        );
    }

    if (error) {
        return (
            <div className="python">
                <Section Strings={PYstring} Title={PyTitle} Paragraph={PyP} />
                <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>
                    <h3>{error}</h3>
                    <button onClick={fetchPythonProjects}>Retry</button>
                </div>
                <Footer />
            </div>
        );
    }

    if (!pythonProjects || Object.keys(pythonProjects).length === 0) {
        return (
            <div className="python">
                <Section Strings={PYstring} Title={PyTitle} Paragraph={PyP} />
                <div style={{ textAlign: 'center', padding: '50px' }}>
                    <h3>No projects available.</h3>
                </div>
                <Footer />
            </div>
        );
    }

    const categories = Object.keys(pythonProjects);

    return (
        <div className="python">
            <Section Strings={PYstring} Title={PyTitle} Paragraph={PyP} />
            {categories.map(category => (
                <Carousel 
                    key={category} 
                    data={pythonProjects[category]} 
                    title={category}
                    apiBaseUrl={API_BASE_URL}
                />
            ))}
            <Footer />
        </div>
    );
}