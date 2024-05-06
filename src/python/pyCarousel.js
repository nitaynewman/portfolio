import React from "react";
import Slider from "react-slick";
import './slick.css'
import './slick-theme.css'
import './python.css'
// import 'react-html5video/dist/index'
import ReactPlayer from 'react-player'



function Arrow(props) {
  
    const { className, style, onClick } = props;
    return (
        <div 
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
        >
            
        </div>
    )
}

function Carousel({ data, title }) {
  if (!data || data.length === 0) {
    // Handle the case where data is undefined or empty
    return <div>No data available</div>;
  }
    const Settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow />,
        prevArrow: <Arrow />,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 900,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2
            }
          },
          {
            breakpoint: 700, 
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
        ]
    };
    
    return (
        <div className="container">
            <h2 style={{fontSize: "40px"}}>{title}</h2>
            <Slider {...Settings} >
                {data.map((item) => (
                    <div key={item.id} className="card">
                        <div className="card-body">
                            <h3>{item.title}</h3>
                            <div className="card-container">
                              <div className="sides">
                                <p>{item.paragraph}</p>
                                <button href={item.git_url}>Git-Code</button>
                                <button href={item.git_url}>Download</button>
                              </div>
                              <div className="sides video-container">
                                <ReactPlayer 
                                className='video'
                                url={item.video}
                                controls={false}
                                loop={true}
                                playing={true}
                                muted={true}
                                />
                              </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Carousel;
