import React, { useState, useEffect } from "react";
import Section from "../Section.js";
import Footer from "../footer.js";
import ReactCard from "./ReactCard.js";

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL;

export default function ReactPage() {
  const [reactProjects, setReactProjects] = useState([]);
  const [reactNativeProjects, setReactNativeProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const RString = [
    "Front End Proficiency",
    "CSS Skills",
    "Dynamic website",
    "React projects",
  ];
  const ReP =
    "Here are my React and React Native projects, including modern web applications and mobile apps with interactive features and beautiful UIs.";
  const RTitle = "My React Journey";

  useEffect(() => {
    fetchReactProjects();
  }, []);

  const fetchReactProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/data/react`);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setReactProjects(data.React_Apps || []);
      setReactNativeProjects(data.React_Native_Apps || []);
      setError(null);
    } catch (err) {
      console.error("Error fetching React projects:", err);
      setError("Failed to load projects. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="react">
        <Section Strings={RString} Title={RTitle} Paragraph={ReP} />
        <div style={{ textAlign: "center", padding: "50px" }}>
          <h3>Loading projects...</h3>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="react">
        <Section Strings={RString} Title={RTitle} Paragraph={ReP} />
        <div style={{ textAlign: "center", padding: "50px", color: "red" }}>
          <h3>{error}</h3>
          <button onClick={fetchReactProjects}>Retry</button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="react">
      <Section Strings={RString} Title={RTitle} Paragraph={ReP} />

      {/* React Web Projects Section */}
      {reactProjects.length > 0 && (
        <>
          <div style={{ textAlign: "center", margin: "40px 0 20px 0" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "#00abf0",
                borderBottom: "2px solid #00abf0",
                display: "inline-block",
                padding: "10px 20px",
              }}
            >
              React Web Apps
            </h2>
          </div>
          <ReactCard
            data={reactProjects}
            apiBaseUrl={API_BASE_URL}
            type="web"
          />
        </>
      )}

      {/* React Native Projects Section */}
      {reactNativeProjects.length > 0 && (
        <>
          <div style={{ textAlign: "center", margin: "60px 0 20px 0" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                color: "#f06c00",
                borderBottom: "2px solid #f06c00",
                display: "inline-block",
                padding: "10px 20px",
              }}
            >
              📱 React Native Mobile Apps
            </h2>
          </div>
          <ReactCard
            data={reactNativeProjects}
            apiBaseUrl={API_BASE_URL}
            type="native"
          />
        </>
      )}

      <Footer />
    </div>
  );
}
