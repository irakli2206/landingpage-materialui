import React from 'react'
import { Button, Box, Container, Divider, Typography } from '@mui/material'
import { ReactComponent as GuidesBG } from '../assets/guides-bg.svg'
import { styled } from '@mui/material/styles';
import '@fontsource/playfair-display'
import '@fontsource/mulish'


const Guides = () => {
    const GuidesTitle = styled(Typography)(({ theme }) => ({
        fontFamily: 'Playfair Display',
        fontSize: '2.5rem',
        fontWeight: '600',
        paddingBottom: '20px',
        letterSpacing: '0.1px'
    }))

    const GuidesText = styled(Typography)(({ theme }) => ({
        fontFamily: 'Mulish',
        fontWeight: '500',
        color: '#7D7987',
        fontSize: '17px'
    }))

    const GuidesButton = styled(Button)(({ theme }) => ({
        height: '52px',
        width: '180px',
        borderRadius: '8px',
        fontFamily: 'Mulish',
        fontWeight: '700',
        color: 'white',
        fontSize: '16px',
        letterSpacing: '2px',
        marginTop: '10%',
        textTransform: 'none'
    }))

    const BGBox = styled(Box)(({ theme }) => ({
        position: 'absolute',
        width: '100%',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            display: 'none'
        }
    }))

    const ContentBox = styled(Box)(({ theme }) => ({
        position: 'absolute', 
        height: '100%', 
        width: '40%', 
        left: '0', 
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }))

    return (
        <Container maxWidth='lg' sx={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{ width: '100%', height: '70%', position: 'relative' }}>
                <BGBox sx={{}} >
                    <GuidesBG width='100%' height='100%' />
                </BGBox>
                <ContentBox sx={{

                }}>
                    <GuidesTitle variant='h1' component='h1'>Guides by New Paths</GuidesTitle>
                    <GuidesText variant='p' component='p'>Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip.</GuidesText>
                    <GuidesButton variant='contained'>Download</GuidesButton>
                </ContentBox>
            </Box>
        </Container>
    )
}

export default Guides
