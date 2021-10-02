import React from 'react'
import Slider from "react-slick"
import { Button, Box, Container, Paper, Typography, FormControl, Select, InputLabel, MenuItem, Rating } from '@mui/material'
import { styled } from '@mui/material/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {PlayCircleFilledIcon as TestimonialsArrow} from '@mui/icons-material/PlayCircleFilled';

const TestimonialsCarousel = () => {

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
        arrows: false
    }

    return (
        <Box sx={{position: 'relative'}}>
            <Slider {...settings}>
                <Box >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingRight: '55px' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '40%' }}>
                            <Rating name="read-only" value={5} readOnly sx={{ paddingBottom: '20px' }} />
                            <TestimonialsText>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</TestimonialsText>
                            <TestimonialsAuthor>Jonathan Green</TestimonialsAuthor>
                            <TestimonialsJob>CEO of Racism</TestimonialsJob>
                        </Box>
                        <Box >
                            <img src='https://picsum.photos/400/500' style={{ borderRadius: '8px' }} />
                        </Box>
                    </Box>
                </Box>
                <Box>

                    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'start', width: '40%' }}>
                            <Rating name="read-only" value={5} readOnly sx={{ paddingBottom: '20px' }} />
                            <TestimonialsText>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</TestimonialsText>
                            <TestimonialsAuthor>Oliver Green</TestimonialsAuthor>
                            <TestimonialsJob>CEO of Friendship</TestimonialsJob>
                        </Box>
                        <Box >
                            <img src='https://picsum.photos/400/500' style={{ borderRadius: '8px' }} />
                        </Box>
                    </Box>
                </Box>
            </Slider>
            <Box sx={{position: 'absolute', width: '150px', height: '75px', background: 'black', bottom: '0', right: '0', transform: 'translateX(-36%)',
            borderRadius: '8px 0px 0px 0px', display: 'flex', }}>
                
            </Box>
        </Box>
    )
}

export default TestimonialsCarousel
