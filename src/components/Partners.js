import React from 'react'

import { Button, Box, Container, Divider, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import PartnersCarousel from './PartnersCarousel';


const Partners = () => {
    const PartnersText = styled(Typography)(() => ({
        fontFamily: 'Playfair Display',
        fontSize: '36px',
        fontWeight: '700',
    }))



    return (
        <Container maxWidth='lg' sx={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                <PartnersText>Our Partners</PartnersText>
                <Box sx={{ width: '100%', position: 'relative', zIndex: '18'}}>
                    <Box sx={{ position: 'absolute', width: '100%', background: 'gray', zIndex: '19'}}>
                        <PartnersCarousel />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}

export default Partners
