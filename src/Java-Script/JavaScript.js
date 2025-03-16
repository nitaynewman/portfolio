import Section from '../Section.js'
import Accordion from './jsCards.js'
import Js_Projects from '../all_projects.json'
import Footer from '../footer.js'


export default function JavaScript() {
    let JsString = ['Front End Proficiency', 'CSS Skils', 'Dinamic website']
    let JsP = 'Here are a few of my Java-Script projects, inclouding - blog, games and more!'
    let JsTitle = "My Java-Script Journy"


    // Check if React_Projects contains the required data
    if (!Js_Projects || !Js_Projects.Js_Projects || !Js_Projects.Js_Projects.Js_App) {
      console.error("Js Data is missing or incorrect:", Js_Projects);
      return <div>Error: Data is missing or incorrect.</div>;
    }

    return (
      <div className='js'>
      <Section Strings={JsString} Title={JsTitle} Paragraph={JsP} />
      <Accordion data={Js_Projects.Js_Projects.Js_App} />
      <Footer />
      </div>
    )
    
  }

  