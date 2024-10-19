import Section from '../Section.js'
import React_Projects from '../all_projects.json'
import Accordion from './ReactCard.js'

export default function ReactPage() {
    let RString = ['Front End Proficiency', 'CSS Skils', 'Dinamic website', 'React projects']
    let ReP = 'Here are a few of my React projects, inclouding - (need to add all my react projects)'
    let RTitle = "My React Journy"

    

    // Pass React_Projects.React_Apps as a prop to the Accordion component
    return (
      <div className='react'>
        <Section Strings={RString} Title={RTitle} Paragraph={ReP} />
        <Accordion data={React_Projects.React_Projects.React_Apps} />
      </div>
    )
}