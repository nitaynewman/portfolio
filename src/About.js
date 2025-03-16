import React from 'react';

const About = (({ id }) => (
  <div
    id={id} // Add the id prop for hash linking
    style={{
      position: 'relative',
      textAlign: 'center',
      width: '50%',
      marginTop: '30px',
      margin: '0 auto',
      boxSizing: 'inherit',
      display: 'block',
    }}
  >
    <h2
      style={{
        marginTop: '20%',
        textAlign: 'center',
        fontSize: '50px',
      }}
    >
      About Me:
    </h2>

    <p
      style={{
        fontSize: '20px',
        marginTop: '8%',
        paddingBottom: '10%',
      }}
    >
      In the IDF, I learned Web Development, and after becoming proficient in Python for backend development and HTML, CSS, and JavaScript for frontend development, I started experimenting with React. Over time, I became proficient in React as well. <br />
      This gave me a lot of experience learning code and working with multiple technologies such as SQL, Elasticsearch, MongoDB, OpenShift - Docker, and more. <br />
      After gaining that experience, I decided to specialize in Python development, so I honed my skills by working on numerous projects. In this portfolio project, I decided to showcase my favorite and/or best projects. <br />
      Enjoy 👍 <br />
    </p>

    <h2
      style={{
        marginTop: '5%',
        textAlign: 'center',
        fontSize: '50px',
      }}
    >
      Work Experience
    </h2>

    <p
      style={{
        fontSize: '20px',
        marginTop: '8%',
        paddingBottom: '10%',
        textAlign: 'left',
      }}
    >
      • Completed full service in the IDF in 8200 unit as a full-stack developer.<br />
      • Developed web applications using React, Python, TypeScript, SQL, Elasticsearch, Kubernetes, and Docker.<br />
      • Over 100 projects in Python, React, JavaScript, and TypeScript, ranging from automations, games, web scraping, web development, and more.<br />
      • Implemented RESTful APIs and integrated third-party services for automations.<br />
    </p>

    <h2
      style={{
        marginTop: '5%',
        textAlign: 'center',
        fontSize: '50px',
      }}
    >
      Education Background
    </h2>

    <p
      style={{
        fontSize: '20px',
        marginTop: '8%',
        paddingBottom: '10%',
        textAlign: 'left',
      }}
    >
      Finished Tora U-Mada high school with a full Bagrut diploma. <br />
      • 5 units Theory Of Electricity.<br />
      • 5 units Computer Science.<br />
      • 5 units Physics.<br />
      • 5 units Mathematics.<br />
      • 5 units English.<br />
    </p>
  </div>
));

export default About;
