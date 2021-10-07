import React, { useRef, useState, useEffect } from 'react'
import Slider from "react-slick"
import {  Box, Typography, Rating } from '@mui/material'
import { styled } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';

const TestimonialsCarousel = () => {


    const TestimonialsText = styled(Typography)(() => ({
        fontFamily: 'Mulish',
        fontSize: '24px',
        fontWeight: '500',
    }))


    const TestimonialsAuthor = styled(Typography)(() => ({
        fontFamily: 'Inter',
        fontSize: '22px',
        fontWeight: '700',
        paddingBottom: '10px',
        paddingTop: '50px'
    }))


    const TestimonialsJob = styled(Typography)(({theme}) => ({
        fontFamily: 'Inter',
        fontSize: '18px',
        fontWeight: '500',
        [theme.breakpoints.down('md')]: {
            paddingBottom: '45px'
        }

    }))

    const settings = {
        slidesToShow: 1,
        infinite: false,
        arrows: false,
        fade: true,
        draggable: false
    }

    const slider = useRef()
    const prevIcon = useRef()
    const nextIcon = useRef()
    const [slideCounter, setSlideCounter] = useState(1)

    const nextSlide = () => {
        nextIcon.current.style.pointerEvents = 'none'
        if (slideCounter < 3) {
            setTimeout(() => {
                nextIcon.current.style.pointerEvents = 'initial'
                setSlideCounter(slideCounter => slideCounter + 1)
                slider.current.slickNext()
            }, 500)
        }

    }

    const prevSlide = () => {
        prevIcon.current.style.pointerEvents = 'none'
        if (slideCounter !== 1) {
            setTimeout(() => {
                prevIcon.current.style.pointerEvents = 'initial'
                setSlideCounter(slideCounter => slideCounter - 1)
                slider.current.slickPrev()
            }, 500)
        }
        else {
            prevIcon.current.style.filter = 'grayscale(1)'

        }
    }

    useEffect(() => {
        if (slideCounter === 1) {
            prevIcon.current.style.filter = 'grayscale(1)'
        }
        else if (slideCounter !== 1) {
            prevIcon.current.style.filter = 'none'
        }
        if (slideCounter === 3) {
            nextIcon.current.style.filter = 'grayscale(1)'
        }
        else if (slideCounter !== 3) {
            nextIcon.current.style.filter = 'none'
        }
        console.log(slideCounter)
    })

    const FlexBox = styled(Box)(({theme}) => ({
        display: 'flex', 
        justifyContent: 'space-between', 
        paddingRight: '55px',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center',
            padding: '0'
        }
    }))

    const TextBox = styled(Box)(({theme}) => ({
        display: 'flex', 
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'start', 
        width: '40%',
        [theme.breakpoints.down('md')]: {
            width: '75%'
        }
    }))

    return (
        <Box sx={{ position: 'relative' }}>
            <Slider ref={slider} {...settings}>
                <Box >
                    <FlexBox >
                        <TextBox >
                            <Rating name="read-only" value={5} readOnly sx={{ paddingBottom: '20px' }} />
                            <TestimonialsText>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</TestimonialsText>
                            <TestimonialsAuthor>Jonathan Green</TestimonialsAuthor>
                            <TestimonialsJob>CEO of Racism</TestimonialsJob>
                        </TextBox>
                        <Box >
                            <img src='https://picsum.photos/id/12/400/500' style={{ borderRadius: '8px' }} />
                        </Box>
                    </FlexBox>
                </Box>
                <Box>

                    <FlexBox >
                        <TextBox >
                            <Rating name="read-only" value={4} readOnly sx={{ paddingBottom: '20px' }} />
                            <TestimonialsText>“Lorem ipsum dolor sit amet consectetur sit amet consectetur sit amet consectetur adipisicing elit. Necessitatibus consectetur inventore voluptate nesciunt consequuntur deserunt dolore dignissimos saepe distinctio maxime! Vitae, sunt. Eligendi, consectetur sint.”</TestimonialsText>
                            <TestimonialsAuthor>Oliver Green</TestimonialsAuthor>
                            <TestimonialsJob>CEO of Friendship</TestimonialsJob>
                        </TextBox>
                        <Box >
                            <img src='https://picsum.photos/id/13/400/500' style={{ borderRadius: '8px' }} />
                        </Box>
                    </FlexBox>
                </Box>
                <Box>

                    <FlexBox >
                        <TextBox >
                            <Rating name="read-only" value={5} readOnly sx={{ paddingBottom: '20px' }} />
                            <TestimonialsText>“Lorem ipsum dolor sit amet Lorem ipsum dolor sit consectetur adipisicing elit. Necessitatibus consectetur inventore voluptate nesciunt consequuntur deserunt dolore dignissimos saepe distinctio maxime! Vitae, sunt. Eligendi, consectetur sint.”</TestimonialsText>
                            <TestimonialsAuthor>Jim Jonson</TestimonialsAuthor>
                            <TestimonialsJob>CEO of Apple</TestimonialsJob>
                        </TextBox>
                        <Box >
                            <img src='https://picsum.photos/id/14/400/500' style={{ borderRadius: '8px' }} />
                        </Box>
                    </FlexBox>
                </Box>
            </Slider>
            <Box sx={{
                position: 'absolute', width: '120px', height: '50px', background: 'white', bottom: '0', right: '0',
                borderRadius: '8px 0px 0px 0px', display: 'flex', justifyContent: 'end', alignItems: 'end'
            }}>
                <PlayCircleFilledIcon ref={prevIcon} onClick={prevSlide} sx={{ transform: 'rotate(180deg)', height: '40px', width: 'auto', color: '#1ABE84', marginRight: '7px' }} />
                <PlayCircleFilledIcon ref={nextIcon} onClick={nextSlide} sx={{ height: '40px', width: 'auto', color: '#1ABE84', marginLeft: '7px', marginRight: '10px' }} />

            </Box>
        </Box>
    )
}

export default TestimonialsCarousel
