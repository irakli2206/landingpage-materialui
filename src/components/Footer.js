import React from 'react'
import { Button, TextField, Box, Container, Typography, Divider, Select, InputLabel, MenuItem, Input } from '@mui/material'
import { styled } from '@mui/material/styles';
import { ReactComponent as Logo } from '../assets/logo.svg'
import '@fontsource/playfair-display'
import '@fontsource/mulish'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'


const Footer = () => {

    const FBStyled = styled(FacebookIcon)(({
        width: '50px',
        height: '50px',
        color: 'gray',
        transition: '0.2s',
        cursor: 'pointer',
        '&:hover': {
            color: '#4267B2',
            transition: '0.2s'
        }
    }))

    const InstaStyled = styled(InstagramIcon)(({
        width: '50px',
        height: '50px',
        color: 'gray',
        transition: '0.2s',
        cursor: 'pointer',
        '&:hover': {
            background: 'gray',
        }
    }))

    const TwitterStyled = styled(TwitterIcon)(({
        width: '50px',
        height: '50px',
        color: 'gray',
        transition: '0.2s',
        cursor: 'pointer',
        '&:hover': {
            background: 'gray',
        }
    }))

    const YTStyled = styled(YouTubeIcon)(({
        width: '50px',
        height: '50px',
        color: 'gray',
        transition: '0.2s',
        cursor: 'pointer',
        '&:hover': {
            background: 'gray',
        }
    }))

    return (
        <Box sx={{
            width: '100%', height: '400px', backgroundColor: '#F3F3F3', display: 'flex', flexDirection: 'column',
            justifyContent: 'end'
        }}>
            <Container maxWidth='lg' sx={{ height: '85%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ height: '80%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ width: '30%' }}>
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Logo height='50px' width='50px' />
                            <Typography sx={{ fontFamily: 'Playfair Display', fontWeight: '500', fontSize: '20px', whiteSpace: 'nowrap', height: '25px', marginLeft: '15px' }}>New Paths</Typography>
                        </Box>
                        <Typography sx={{
                            fontFamily: 'Mulish', color: '#848484', fontWweight: '300',
                            fontSize: '18px',
                            lineHeight: '28px',
                            paddingTop: '20px'
                        }}>
                            Plan and book your perfect trip with <br />
                            expert advice, travel tips destination <br />
                            information from us
                        </Typography>
                        <Box sx={{ display: 'flex', width: '100%' }}>

                        </Box>
                        <Box sx={{ display: 'flex',  justifyContent: 'space-between', paddingTop: '30px' }}>
                            <FBStyled />
                            <TwitterStyled />
                            <InstaStyled />
                            <YTStyled />
                        </Box>
                    </Box>

                </Box>
                <Divider sx={{ margin: '20px 0px 20px 0px' }} />
                <Box sx={{ height: '15%' }}></Box>
            </Container >
        </Box >
    )
}

export default Footer
