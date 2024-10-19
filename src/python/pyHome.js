import React from "react";
import Section from '../Section.js';
import Footer from '../footer.js';
import Carousel from './pyCarousel.js';
import Python_Projects from '../all_projects.json';

export default function Python() {
    const categories = Object.keys(Python_Projects?.Python_Projects || {});

    const PYstring = ['API', 'Automations and Selenium', 'Basics']; 
    const PyP = 'Here you can see all my journey in Python. This includes API calls, automations, backend projects, Games, GUI apps, and more.';
    const PyTitle = 'My Python Journey';

    // Check if Python_Projects contains the required data
    if (!Python_Projects || !Python_Projects.Python_Projects) {
        return <div>Error: Data is missing or incorrect.</div>;
    }

    return (
        <div className="python">
            <Section Strings={PYstring} Title={PyTitle} Paragraph={PyP} />
            {categories.map(category => (
                <Carousel key={category} data={Python_Projects.Python_Projects[category]} title={category} />
            ))}
            <Footer />
        </div>
    );
}
