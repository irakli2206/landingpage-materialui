import React from 'react'
import { Button, Box, Container, Divider, Typography, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import '@fontsource/playfair-display'
import '@fontsource/mulish'
import { ReactComponent as NewWayBG } from '../assets/newway-bg.svg'


const NewWay = () => {
    const NewTitle = styled(Typography)(({ theme }) => ({
        fontFamily: 'Playfair Display',
        fontSize: '2.5rem',
        fontWeight: '600',
        paddingBottom: '20px',
    }))

    const NewText = styled(Typography)(({ theme }) => ({
        fontFamily: 'Mulish',
        fontWeight: '500',
        color: '#7D7987',
        fontSize: '17px'
    }))

    const NewButton = styled(Button)(({ theme }) => ({
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
        right: '0',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '100%'
        }
    }))

    return (
            <Container maxWidth='lg' sx={{ height: '90vh', display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', height: '70%', position: 'relative' }}>
                    <BGBox  >
                        <NewWayBG width='100%' height='100%' />
                    </BGBox>
                    <ContentBox >
                        <NewTitle variant='h1' component='h1'>A new way to explore the world</NewTitle>
                        <NewText variant='p' component='p'>For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                            trip, but now, they can also let Lonely Planet Experiences lead the way</NewText>
                        <NewButton variant='contained'>Learn More</NewButton>
                    </ContentBox>
                </Box>
            </Container>
    )
}

export default NewWay
