import React from 'react'

import { Button, Box, Container, Divider, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles';
import PartnersCarousel from './PartnersCarousel';


const Partners = () => {
    const PartnersText = styled(Typography)(() => ({
        fontFamily: 'Playfair Display',
        fontSize: '36px',
        fontWeight: '700',
        paddingBottom: '20px'
    }))

    const WhiteBox = styled(Box)(() => ({
        position: 'absolute', 
        pointerEvents: 'none', 
        background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0) 50%, rgba(255,255,255,0.4962359943977591) 75%, rgba(255,255,255,1) 100%)', 
        zIndex: '20', 
        height: '150px', 
        width: '100%', 
        bottom: '0',
    }))

    const GrayBox = styled(Box)(() => ({
        width: '100%', 
        position: 'relative', 
        filter: 'grayscale(1)',
        transition: '0.5s',
        '&:hover': {
            filter: 'none',
            transition: '0.5s'
        }
    }))


    return (
        <Container maxWidth='lg' sx={{ height: '30vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%' }}>
                <PartnersText>Partners</PartnersText>
                <GrayBox sx={{ }}>
                    <PartnersCarousel />
                    <WhiteBox />
                </GrayBox>
            </Box>
        </Container>
    )
}

export default Partners
