import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import "./slick.css";
import "./slick-theme.css";
import "./python.css";
import "../App.css";
import ReactPlayer from "react-player";
import {
  ArrowBackIosRounded,
  ArrowForwardIosRounded,
} from "@mui/icons-material";
import Spinner from "../components/Spinner";

function Arrow(props) {
  const { className, style, onClick, type } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "transparent",
        zIndex: 1,
        position: "absolute",
        top: "50%",
        transform: "translateY(-50%)",
        left: type === "prev" ? "-3%" : "auto",
        right: type === "next" ? "-2%" : "auto",
        cursor: "pointer",
        color: "#063d65",
        fontSize: "40px",
      }}
      onClick={onClick}
    >
      {type === "prev" ? (
        <ArrowBackIosRounded fontSize="60px" />
      ) : (
        <ArrowForwardIosRounded fontSize="60px" />
      )}
    </div>
  );
}

function Carousel({
  data,
  title,
  apiBaseUrl = process.env.REACT_APP_BACKEND_URL,
}) {
  const [initialized, setInitialized] = useState({});
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loadedVideos, setLoadedVideos] = useState(new Set([0])); // Load first video immediately
  const videoRefs = useRef({});

  const handleReady = (id) => {
    setInitialized((prev) => ({ ...prev, [id]: true }));
  };

  // Load videos as user navigates
  const handleSlideChange = (index) => {
    setCurrentSlide(index);

    // Load current, next, and previous videos
    const videosToLoad = new Set(loadedVideos);
    videosToLoad.add(index);
    if (index > 0) videosToLoad.add(index - 1);
    if (index < data.length - 1) videosToLoad.add(index + 1);

    setLoadedVideos(videosToLoad);
  };

  // Preload adjacent videos after initial render
  useEffect(() => {
    const timer = setTimeout(() => {
      if (data.length > 1) {
        setLoadedVideos(new Set([0, 1]));
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [data.length]);

  // Add validation for data
  if (!data || !Array.isArray(data) || data.length === 0) {
    return null;
  }

  const settings = {
    dots: true,
    infinite: data.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: data.length > 1,
    nextArrow: data.length > 1 ? <Arrow type="next" /> : <></>,
    prevArrow: data.length > 1 ? <Arrow type="prev" /> : <></>,
    adaptiveHeight: false,
    draggable: data.length > 1,
    swipe: data.length > 1,
    beforeChange: (current, next) => handleSlideChange(next),
    lazyLoad: "ondemand",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: data.length > 1,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container">
      <h2 style={{ fontSize: "40px" }}>{title}</h2>
      <Slider {...settings}>
        {data.map((item, index) => {
          const videoUrl = item.video || "";
          const shouldLoadVideo = loadedVideos.has(index);

          return (
            <div key={item.id} className="card">
              <div className="card-body">
                <h3>{item.title}</h3>
                <div className="card-container">
                  <div className="sides">
                    <p>{item.paragraph}</p>
                    {item.git_url && (
                      <>
                        <button
                          onClick={() => window.open(item.git_url, "_blank")}
                          className="LINK"
                        >
                          GitHub-Code
                        </button>
                        <button
                          onClick={
                            item.url
                              ? () => window.open(item.url, "_blank")
                              : () => window.open(item.git_url, "_blank")
                          }
                        >
                          Download
                        </button>
                      </>
                    )}
                  </div>
                  <div className="sides video-container">
                    {videoUrl ? (
                      shouldLoadVideo ? (
                        <>
                          {!initialized[item.id] && (
                            <div
                              style={{
                                position: "absolute",
                                top: "50%",
                                left: "50%",
                                transform: "translate(-50%, -50%)",
                                zIndex: 1,
                              }}
                            >
                              <Spinner />
                            </div>
                          )}
                          <ReactPlayer
                            ref={(el) => (videoRefs.current[index] = el)}
                            className="video"
                            url={videoUrl}
                            controls={false}
                            loop={true}
                            playing={currentSlide === index}
                            muted={true}
                            onReady={() => handleReady(item.id)}
                            width="100%"
                            height="100%"
                            config={{
                              file: {
                                attributes: {
                                  preload: "metadata",
                                },
                              },
                            }}
                          />
                        </>
                      ) : (
                        <div
                          style={{
                            width: "100%",
                            height: "250px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                              "linear-gradient(135deg, #063d65 0%, #00abf0 100%)",
                            borderRadius: "8px",
                            border: "2px solid #00abf0",
                            color: "#ededed",
                            fontSize: "14px",
                          }}
                        >
                          <div style={{ textAlign: "center" }}>
                            <div
                              style={{ fontSize: "40px", marginBottom: "10px" }}
                            >
                              ▶️
                            </div>
                            <p style={{ margin: 0, fontWeight: 500 }}>
                              Video will load when viewed
                            </p>
                          </div>
                        </div>
                      )
                    ) : (
                      <div
                        style={{
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "#0a2031",
                          borderRadius: "8px",
                          border: "2px dashed #063d65",
                          color: "#999",
                        }}
                      >
                        <p>No video available</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default Carousel;
