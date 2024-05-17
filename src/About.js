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
      Work Experience:
    </h2>

    <p style={{
      fontSize: '20px',
      marginTop: '8%',
      paddingBottom: '10%'
    }}>
      In the Idf I learned Web Development and after I got proficient in python for backend Development and html, css, JavaScript for frontend Development i started experimenting with React and with time became proficient in that as well. <br />
      This gave me a lot of experience learning code and working with multiple technologies such as SQL, Elatic, mongo, Openshift - doker and more. <br />
      After getting that experience i decided to become a prefinal at python development, so I learned by making a lot of projects, in this portfolio project I decided to show you my faveret and or best projects. <br /> enjoy👍 <br />
    </p>
  </div>
));

export default About;
