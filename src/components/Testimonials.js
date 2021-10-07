import React from 'react'
import { Box, Container, Typography} from '@mui/material'
import { styled } from '@mui/material/styles';
import { ReactComponent as TestimonialsBG } from '../assets/testimonials-bg.svg'
import TestimonialsCarousel from './TestimonialsCarousel'
import '@fontsource/playfair-display'
import '@fontsource/mulish'
import '@fontsource/inter'



const Testimonials = () => {

    const TestimonialsTitle = styled(Typography)(() => ({
        fontFamily: 'Playfair Display',
        fontSize: '36px',
        fontWeight: '600',
    }))

   

    return (
        <Container maxWidth='lg' sx={{ height: 'auto', display: 'flex', alignItems: 'center', padding: '200px 0px 30px 0px'}}>
            <Box sx={{ width: '100%', height: '80%', position: 'relative' }}>
                <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
                    <TestimonialsBG width='100%' height='100%' />
                </Box>
                <Box sx={{ paddingBottom: '150px' }}>
                    <TestimonialsTitle>Testimonials <span style={{fontFamily: 'Mulish'}}>&</span> FAQ</TestimonialsTitle>
                </Box>
                <Box>
                    <TestimonialsCarousel sx={{position: 'relative'}}>
                        <Box sx={{position: 'absolute', width: '100px', height: '100px', background: 'black', left: '0', zIndex: '99'}}></Box>
                    </TestimonialsCarousel>
                </Box>
            </Box>

        </Container>
    )
}

export default Testimonials
