import React from 'react'
import Slider from 'infinite-react-carousel';
import { ReactComponent as Logo1 } from '../assets/logoipsum-logo-12.svg'
import { ReactComponent as Logo2 } from '../assets/logoipsum-logo-17.svg'
import { ReactComponent as Logo3 } from '../assets/logoipsum-logo-28.svg'
import { ReactComponent as Logo4 } from '../assets/logoipsum-logo-30.svg'
import { ReactComponent as Logo5 } from '../assets/logoipsum-logo-32.svg'
import { ReactComponent as Logo6 } from '../assets/logoipsum-logo-33.svg'
import { ReactComponent as Logo7 } from '../assets/logoipsum-logo-34.svg'
import {ReactComponent as Arrow} from '../assets/viewall-arrow.svg'

const PartnersCarousel = () => {
    const carouselSettings =  {
        autoplaySpeed: 1000,
        duration: 10000,
        initialSlide: 2,
        slidesToShow: 3,
        centerMode: true,
        arrows: false,
        wheel: true,
        centerPadding: 0
        
      };

    return (
        <div style={{height: '200px'}} >
            <Slider {...carouselSettings} style={{height: '200px'}} >
                    <Logo1 height='200px' className="test"/>
                    <Logo2 height='200px' className="test"/>
                    <Logo3 height='200px' className="test"/>
                    <Logo4 height='200px' className="test"/>
                    <Logo5 height='200px' className="test"/>
                    <Logo6 height='200px' className="test"/>
                    <Logo7 height='200px' className="test"/>
            </Slider>
        </div>
    )
}

export default PartnersCarousel
