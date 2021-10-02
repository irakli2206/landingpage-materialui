import React from 'react'
import Slider from 'infinite-react-carousel';
import { ReactComponent as Logo1 } from '../assets/logoipsum-logo-12.svg'
import { ReactComponent as Logo2 } from '../assets/logoipsum-logo-17.svg'
import { ReactComponent as Logo3 } from '../assets/logoipsum-logo-28.svg'
import { ReactComponent as Logo4 } from '../assets/logoipsum-logo-30.svg'
import { ReactComponent as Logo5 } from '../assets/logoipsum-logo-32.svg'
import { ReactComponent as Logo6 } from '../assets/logoipsum-logo-33.svg'
import { ReactComponent as Logo7 } from '../assets/logoipsum-logo-34.svg'
import { ReactComponent as Arrow } from '../assets/viewall-arrow.svg'

const PartnersCarousel = () => {
    const carouselSettings = {
        autoplaySpeed: 1000,
        duration: 10000,
        initialSlide: 2,
        slidesToShow: 3,
        centerMode: true,
        autoPlay: 'true',
        arrows: false,
        centerPadding: 0,
        pauseOnHover: 'true',
        className: 'carousel-container'
    };

    return (
        <div style={{ height: '150px' }} >
            <Slider {...carouselSettings} style={{ height: '150px' }} >
                <div  className="test" >
                    <Logo1 height='auto' width='auto' />
                </div>
                <div className="test">
                    <Logo2 height='auto' width='auto'/>
                </div>
                <div className="test">
                    <Logo3 height='auto' width='auto'/>
                </div>
                <div className="test">
                    <Logo4 height='auto' width='auto' />
                </div>
                <div className="test">
                    <Logo5 height='auto' width='auto' />
                </div>
                <div className="test">
                    <Logo6 height='auto' width='auto' />
                </div>
                <div className="test">
                    <Logo7 height='auto' width='auto' />
                </div>
            </Slider>
        </div>
    )
}

export default PartnersCarousel
