import React from 'react';

const About = React.forwardRef((props, ref) => (
  <div ref={ref} style={{
    position: 'relative',
    textAlign: 'center',
    width: '50%',
    marginTop: '30px',
    margin: '0 auto',
    boxSizing: 'inherit',
    display: 'block'
  }}>
    <h2 style={{
      marginTop: '20%',
      textAlign: 'center',
      fontSize: '50px'
    }}>
      About Me:
    </h2>

    <p style={{
      fontSize: '20px',
      marginTop: '8%',
      paddingBottom: '10%'
    }}>
      In the Idf I learned Web Development and after I got proficient in python for backend Development and html, css, JavaScript for frontend Development i started experimenting with React and with time became proficient in that as well. <br />
      This gave me a lot of experience learning code and working with multiple technologies such as SQL, Elasticsearch, mongoDB, Openshift - doker and more. <br />
      After getting that experience I decided to become a profesional at python development, so I learned by making a lot of projects, in this portfolio project I decided to show you my faveret and or best projects. <br /> enjoy👍 <br />
    </p>
    <h2
    style={{
      marginTop: '5%',
      textAlign: 'center',
      fontSize: '50px'}}
      >
        Work Experience
      </h2>
    <p style={{
      fontSize: '20px',
      marginTop: '8%',
      paddingBottom: '10%',
      textAlign: 'left',
    }}>
      •	Completed full service in the IDF in 8200 unit as a full-stack developer.<br />
      •	Developed web applications using React, Python, TypeScript and SQL, Elasticsearch, Kubernetes, Docker.<br />
      •	Over 100 projects in Python, React, JavaScript and TypeScript ranging from automations, games, web scraping, web-development and more.<br />
      •	Implemented RESTful APIs and integrated third-party services for automations.<br />
    </p>
    <h2
    style={{
      marginTop: '5%',
      textAlign: 'center',
      fontSize: '50px'}}
      >
        Education Background
      </h2>
    <p style={{
      fontSize: '20px',
      marginTop: '8%',
      paddingBottom: '10%',
      textAlign: 'left',
    }}>
      Finished Tora U-mada high school with a high School - full bagrut. <br />
      •	5 units Theory Of Electricity.<br />
      •	5 units Computer Science.<br />
      •	5 units Physics.<br />
      •	5 units Mathematics.<br />
      •	5 units English.<br />
    </p>
  </div>
));

export default About;
