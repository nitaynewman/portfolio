import React from "react";
import "./React.css";
import "../App.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import ReactPlayer from "react-player";

export default function ReactCard({
  data,
  apiBaseUrl = process.env.REACT_APP_BACKEND_URL,
  type = "web",
}) {
  if (!data || !Array.isArray(data) || data.length === 0) {
    console.error("React Data is missing or incorrect:", data);
    return (
      <div style={{ textAlign: "center", padding: "50px" }}>
        <p>
          No {type === "native" ? "React Native" : "React"} projects available.
        </p>
      </div>
    );
  }

  // Different styling based on project type
  const isNative = type === "native";
  const accentColor = isNative ? "#f06c00" : "#00abf0";
  const backgroundColor = isNative ? "#2a1a0f" : "#081b29";

  return (
    <div>
      <VerticalTimeline lineColor={accentColor}>
        {data.map((project) => {
          const videoUrl = project.video || "";

          return (
            <VerticalTimelineElement
              key={project.id}
              className={`vertical-timeline-element--education ${isNative ? "native-project" : ""}`}
              visible={false}
              iconStyle={{
                backgroundColor: backgroundColor,
                boxShadow: `0 0 0 4px ${accentColor}, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)`,
              }}
              contentStyle={{
                border: `2px solid ${accentColor}`,
                boxShadow: `0 3px 0 ${accentColor}`,
              }}
              contentArrowStyle={{
                borderRight: `7px solid ${accentColor}`,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "10px",
                }}
              >
                {isNative && <span style={{ fontSize: "2rem" }}>📱</span>}
                <h3 style={{ fontSize: "3rem", margin: 0 }}>{project.title}</h3>
              </div>

              {isNative && (
                <span
                  style={{
                    display: "inline-block",
                    backgroundColor: accentColor,
                    color: "#081b29",
                    padding: "4px 12px",
                    borderRadius: "4px",
                    fontSize: "14px",
                    fontWeight: "bold",
                    marginBottom: "15px",
                  }}
                >
                  React Native
                </span>
              )}

              <p style={{ fontSize: "16px" }}>{project.paragraph}</p>

              {project.git_url && (
                <button
                  className="BTNN"
                  style={{
                    background: accentColor,
                    borderColor: accentColor,
                  }}
                >
                  <a
                    className="LINK"
                    href={project.git_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Code
                  </a>
                </button>
              )}

              {project.url && (
                <button
                  className="BTNN"
                  style={{
                    background: accentColor,
                    borderColor: accentColor,
                  }}
                >
                  <a href={project.url} className="LINK">
                    Go To
                  </a>
                </button>
              )}

              {videoUrl && (
                <ReactPlayer
                  className="video"
                  url={videoUrl}
                  width={"90%"}
                  height={"200px"}
                  style={{ margin: "20px" }}
                  controls={false}
                  loop={true}
                  playing={true}
                  muted={true}
                />
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
