import React, { useState } from 'react'
import { Button, Box, Container, Divider, Typography, Card, CardContent, CardActions, CardMedia, Fade } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import '@fontsource/playfair-display'
import '@fontsource/mulish'
import { ReactComponent as Arrow } from '../assets/viewall-arrow.svg'
import { ReactComponent as DestinationBG } from '../assets/destination-bg.svg'

const Destinations = () => {


    const [arrow, setArrow] = useState(false)

    const handleChange = () => {
        setArrow((prev) => !prev);
    };



    const CardPlace = styled(Typography)(({ theme }) => ({
        fontSize: '17px',
        fontFamily: 'Inter',
        fontWeight: '600',
        paddingTop: '15px',
        paddingLeft: '10px'
    }))

    const CardCountry = styled(Typography)(({ theme }) => ({
        fontSize: '15px',
        fontFamily: 'Inter',
        fontWeight: '500',
        paddingLeft: '10px',
        color: '#80918E'
    }))

    const DestinationCard = styled(Card)(({theme}) => ({
        width: '260px',
        height: '330px',
        position: 'relative',
        borderRadius: '8px 8px 8px 0px',
        boxShadow: 'none',
        cursor: 'pointer',
        [theme.breakpoints.down('md')]: {
            marginTop: '15px'
        }
    }))

    const DestinationMedia = styled(CardMedia)(() => ({
        transition: 'transform 0.5s ease',
        '&:hover': {
            transform: 'scale(1.1)'
        }
    }))

    const DestinationContent = styled(CardContent)(() => ({
        position: 'absolute',
        padding: '0',
        paddingBottom: '0',
        background: 'white',
        height: '10%',
        width: '60%',
        bottom: '0',
        left: '0',
        borderRadius: '0px 8px 0px 0px',

    }))



    const FeaturedDestinations = styled(Typography)(({theme}) => ({
        fontFamily: 'Playfair Display',
        fontSize: '36px',
        fontWeight: '900',
        position: 'absolute',
        left: '0',
        bottom: '0',
        [theme.breakpoints.only('sm')]: {
            fontSize: '24px'
        },
        [theme.breakpoints.only('xs')]: {
            fontSize: '20px'
        }
    }))

    const ViewDestinations = styled(Typography)(() => ({
        fontFamily: 'Playfair Display',
        fontSize: '17px',
        color: '#FB8F1D',
        fontWeight: '700',
        position: 'absolute',
        right: '0',
        bottom: '0',
        cursor: 'pointer'
    }))

    const CardsBox = styled(Box)(({theme}) => ({
        marginTop: '5%', 
        display: 'flex', 
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'center'
        }
    }))


    return (
        <Container maxWidth='lg' sx={{ height: 'auto', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingTop: '250px' }}>

            <Box sx={{ position: 'absolute', width: '100%', height: '100%' }}>
                <DestinationBG width='100%' height='100%' />
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', paddingBottom: '50px' }}>
                <Box sx={{ display: 'flex', width: '100%', position: 'relative' }}>
                    <FeaturedDestinations >Featured Destinations</FeaturedDestinations>
                    <ViewDestinations onMouseEnter={handleChange} onMouseLeave={handleChange}>View all &nbsp;
                        <Fade in={arrow} >
                            <Arrow />
                        </Fade>
                    </ViewDestinations>
                </Box>
                <CardsBox>
                    <DestinationCard>
                        <DestinationMedia
                            component='img'
                            height='100%'
                            image='https://picsum.photos/id/10/300/350'
                            sx={{ position: 'absolute' }}

                        />
                        <DestinationContent>
                            <CardPlace variant="h5" component="div">Ujarma</CardPlace>
                            <CardCountry variant="h5" component="div">Georgia</CardCountry>
                        </DestinationContent>
                    </DestinationCard>
                    <DestinationCard >
                        <DestinationMedia
                            component='img'
                            height='100%'
                            image='https://picsum.photos/id/11/300/350'
                            sx={{ position: 'absolute' }}
                        />
                        <DestinationContent >
                            <CardPlace variant="h5" component="div">Seoul</CardPlace>
                            <CardCountry variant="h5" component="div">South Korea</CardCountry>
                        </DestinationContent>
                    </DestinationCard>
                    <DestinationCard >
                        <DestinationMedia
                            component='img'
                            height='100%'
                            image='https://picsum.photos/id/12/300/350'
                            sx={{ position: 'absolute' }}
                        />
                        <DestinationContent>
                            <CardPlace variant="h5" component="div">Brooklyn</CardPlace>
                            <CardCountry variant="h5" component="div">USA</CardCountry>
                        </DestinationContent>
                    </DestinationCard>
                    <DestinationCard>
                        <DestinationMedia
                            component='img'
                            height='100%'
                            image='https://picsum.photos/id/13/300/350'
                            sx={{ position: 'absolute' }}
                        />
                        <DestinationContent>
                            <CardPlace variant="h5" component="div">Prague</CardPlace>
                            <CardCountry variant="h5" component="div">Czechia</CardCountry>
                        </DestinationContent>
                    </DestinationCard>
                </CardsBox>
            </Box>
        </Container>
    )
}

export default Destinations
