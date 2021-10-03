import React, { useRef, useState, useEffect } from 'react'
import Slider from "react-slick"
import { Button, Box, Container, Pagination, Paper, Typography, FormControl, Select, InputLabel, MenuItem, Rating } from '@mui/material'
import { styled } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const TestimonialsCarousel = (props) => {


    const TestimonialsText = styled(Typography)(() => ({
        fontFamily: 'Mulish',
        fontSize: '24px',
        fontWeight: '500'
    }))


    const TestimonialsAuthor = styled(Typography)(() => ({
        fontFamily: 'Inter',
        fontSize: '22px',
        fontWeight: '700',
        paddingBottom: '10px',
        paddingTop: '50px'
    }))


    const TestimonialsJob = styled(Typography)(() => ({
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: '500'

    }))

    const settings = {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        fade: true
    }

    const slider = useRef()
    const prevIcon = useRef()
    const nextIcon = useRef()
    const [slideCounter, setSlideCounter] = useState(1)

    const nextSlide = () => {
        slider.current.slickNext()
        if(slideCounter < 3) setSlideCounter(slideCounter => slideCounter + 1)
    }

    const prevSlide = () => {
        slider.current.slickPrev()
        if(slideCounter > 1) setSlideCounter(slideCounter => slideCounter - 1)
    }

    //სწრაფად თუ დავაჭირე ორჯერ ისარს ვერ ასწრებს ორი სლაიდით გადასვლას
    useEffect(() => {
        if (slideCounter === 1) {
            prevIcon.current.style.filter = 'grayscale(1)'
        }
        else if (slideCounter !== 1) {
            prevIcon.current.style.filter = 'none'
        }
        else if (slideCounter === 3){
            nextIcon.current.style.filter = 'grayscale(1)'
        }
        else if (slideCounter !== 3){
            nextIcon.current.style.filter = 'none'
        }
        console.log(slideCounter)
    })



    return (
        <Box sx={{ position: 'relative' }}>
            <Slider ref={slider} {...settings}>
                <Box >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: '55px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '40%' }}>
                            <Rating name="read-only" value={5} readOnly sx={{ paddingBottom: '20px' }} />
                            <TestimonialsText>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</TestimonialsText>
                            <TestimonialsAuthor>Jonathan Green</TestimonialsAuthor>
                            <TestimonialsJob>CEO of Racism</TestimonialsJob>
                        </Box>
                        <Box >
                            <img src='https://picsum.photos/id/12/400/500' style={{ borderRadius: '8px' }} />
                        </Box>
                    </Box>
                </Box>
                <Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: '55px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '40%' }}>
                            <Rating name="read-only" value={5} readOnly sx={{ paddingBottom: '20px' }} />
                            <TestimonialsText>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur inventore voluptate nesciunt consequuntur deserunt dolore dignissimos saepe distinctio maxime! Vitae, sunt. Eligendi, consectetur sint.”</TestimonialsText>
                            <TestimonialsAuthor>Oliver Green</TestimonialsAuthor>
                            <TestimonialsJob>CEO of Friendship</TestimonialsJob>
                        </Box>
                        <Box >
                            <img src='https://picsum.photos/id/13/400/500' style={{ borderRadius: '8px' }} />
                        </Box>
                    </Box>
                </Box>
                <Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: '55px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '40%' }}>
                            <Rating name="read-only" value={5} readOnly sx={{ paddingBottom: '20px' }} />
                            <TestimonialsText>“Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur inventore voluptate nesciunt consequuntur deserunt dolore dignissimos saepe distinctio maxime! Vitae, sunt. Eligendi, consectetur sint.”</TestimonialsText>
                            <TestimonialsAuthor>Jim Jonson</TestimonialsAuthor>
                            <TestimonialsJob>CEO of Apple</TestimonialsJob>
                        </Box>
                        <Box >
                            <img src='https://picsum.photos/id/14/400/500' style={{ borderRadius: '8px' }} />
                        </Box>
                    </Box>
                </Box>
            </Slider>
            <Box sx={{
                position: 'absolute', width: '120px', height: '50px', background: 'white', bottom: '0', right: '0', transform: 'translateX(-36%)',
                borderRadius: '8px 0px 0px 0px', display: 'flex', justifyContent: 'end', alignItems: 'end'
            }}>
                <PlayCircleFilledIcon ref={prevIcon} onClick={prevSlide} sx={{ transform: 'rotate(180deg)', height: '40px', width: 'auto', color: '#1ABE84', marginRight: '7px' }} />
                <PlayCircleFilledIcon ref={nextIcon} onClick={nextSlide} sx={{ height: '40px', width: 'auto', color: '#1ABE84', marginLeft: '7px', marginRight: '10px' }} />

            </Box>
        </Box>
    )
}

export default TestimonialsCarousel
