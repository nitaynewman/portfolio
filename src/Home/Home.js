import Section from '../Section.js'

export default function Home() {
    let HomeS = ['Java-Script Developer', 'React Developer', 'Python Developer', 'Full Stack Developer']
    let HomeP = 'In this website I put a compalation of all my coding projects and my learning journey hope you enjoy!'
    let HomeT = "Hi, I'm Nitay Newman"
  
    return (
      <>

      <Section Strings={HomeS} Title={HomeT} Paragraph={HomeP} />
      <p></p>
      
      </>
    )
    
  }

  