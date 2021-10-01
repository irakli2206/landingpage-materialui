import React, { useState } from 'react'
import { Button, Box, Container, Divider, Typography, FormControl, Select, InputLabel, MenuItem } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {ReactComponent as HomeBG} from '../assets/home-bg.svg'
import { styled } from '@mui/material/styles';
import '@fontsource/playfair-display'
import '@fontsource/inter'
import '@fontsource/mulish'


const Home = () => {

   

    const HomeTitle = styled(Typography)(({ theme }) => ({
        fontFamily: 'Playfair Display',
        fontSize: '4rem',
        fontWeight: '500'
    }))

    const HolidayFinder = styled(Typography)(({ theme }) => ({
        fontFamily: 'Inter',
        fontWeight: '500',
        paddingTop: '60px'
    }))

    const HolidayDivider = styled(Divider)(({ theme }) => ({
        width: '7.5%',
        marginTop: '15px',
        borderColor: 'black',
        borderWidth: '1px'
    }))

    const HolidayForm = styled(FormControl)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'row',
        marginTop: '50px'
    }))

    const HolidaySelect = styled(Select)(({ theme }) => ({
        width: '50%'
    }))

    const HolidayButton = styled(Button)(({ theme }) => ({
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


    return (
            <Container maxWidth='lg' sx={{ height: '100vh', display: 'flex', alignItems: 'center'}}>
                <Box sx={{ width: '100%', height: '70%',  position: 'relative' }}>
                    <Box sx={{ position: 'absolute', width: '100%', height: '100%'}} >
                        <HomeBG width='100%' height='100%'/>
                    </Box>
                    <Box sx={{ position: 'relative', height: '100%', width: '50%' }}>
                        <HomeTitle variant='h1' component='h1'>
                            Explore and <br /> Travel
                        </HomeTitle>
                        <HolidayFinder variant='h5' component='h5'>Holiday finder</HolidayFinder>
                        <HolidayDivider />
                        <Box sx={{ display: 'flex', width: '100%', marginTop: '50px' }}>
                            <FormControl color="secondary" sx={{ width: '40%' }}>
                                <InputLabel id="location-select-label">Location</InputLabel>
                                <Select
                                    labelId="location-select-label"
                                    id="location-select"
                                    label="Location"
                                >
                                    <MenuItem value={10}>Paris</MenuItem>
                                    <MenuItem value={20}>London</MenuItem>
                                    <MenuItem value={30}>Moscow</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl color="secondary" sx={{ width: '40%', marginLeft: '5%' }}>
                                <InputLabel id="activity-select-label">Activity</InputLabel>
                                <Select
                                    labelId="activity-select-label"
                                    id="activity-select"
                                    label="Activity"
                                >
                                    <MenuItem value={10}>Skiing</MenuItem>
                                    <MenuItem value={20}>Hunting</MenuItem>
                                    <MenuItem value={30}>Sightseeing</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                        <HolidayButton variant='contained'>Explore</HolidayButton>
                    </Box>
                </Box>
            </Container>
    )
}

export default Home
