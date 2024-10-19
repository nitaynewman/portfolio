import React from "react";
import Slider from "react-slick";
import './slick.css';
import './slick-theme.css';
import './python.css';
import '../App.css';
import ReactPlayer from 'react-player';
import { ArrowBackIosRounded, ArrowForwardIosRounded } from '@mui/icons-material';

function Arrow(props) {
    const { className, style, onClick, type } = props;
    return (
        <div 
            className={className}
            style={{ 
                ...style, 
                display: 'block',
                background: 'transparent',
                zIndex: 1,
                position: 'absolute',
                top: '50%',
                transform: 'translateY(-50%)',
                left: type === 'prev' ? '-3%' : 'auto',
                right: type === 'next' ? '-2%' : 'auto',
                cursor: 'pointer',
                color: '#063d65',
                fontSize: '40px',
            }}
            onClick={onClick}
        >
            {type === 'prev' ? <ArrowBackIosRounded fontSize="60px" /> : <ArrowForwardIosRounded fontSize="60px" />}
        </div>
    );
}

function Carousel({ data, title }) {
    if (!data || data.length === 0) {
        // Handle the case where data is undefined or empty
        return <div>No data available</div>;
    }

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <Arrow type="next" />,  // Custom next arrow
        prevArrow: <Arrow type="prev" />,  // Custom prev arrow
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
            <h2 style={{ fontSize: "40px" }}>{title}</h2>
            <Slider {...settings}>
                {data.map((item) => (
                    <div key={item.id} className="card">
                        <div className="card-body">
                            <h3>{item.title}</h3>
                            <div className="card-container">
                                <div className="sides">
                                    <p>{item.paragraph}</p>
                                    <button onClick={() => window.open(item.git_url, '_blank')} className='LINK'>GitHub-Code</button>
                                    <button onClick={() => window.open(item.git_url, '_blank')}>Download</button>
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
