import React from 'react'
import { Link, Box, Container, Typography, Divider} from '@mui/material'
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
        width: '40px',
        height: '40px',
        color: 'gray',
        transition: '0.3s',
        cursor: 'pointer',
        '&:hover': {
            transition: '0.3s',
            color: '#4267B2',
        }
    }))

    const InstaStyled = styled(InstagramIcon)(({
        width: '40px',
        height: '40px',
        transition: '0.2s',
        cursor: 'pointer',
        filter: 'grayscale(1) contrast(0)',
        transition: '0.3s',
        '&:hover': {
            filter: 'none',
            transition: '0.3s'
        }
    }))

    const TwitterStyled = styled(TwitterIcon)(({
        width: '40px',
        height: '40px',
        transition: '0.2s',
        cursor: 'pointer',
        color: 'gray',
        transition: '0.3s',
        '&:hover': {
            transition: '0.3s',
            color: '#1DA1F2',
        }
    }))

    const YTStyled = styled(YouTubeIcon)(({
        width: '40px',
        height: '40px',
        transition: '0.2s',
        cursor: 'pointer',
        color: 'gray',
        transition: '0.3s',
        '&:hover': {
            transition: '0.3s',
            color: '#FF0000',
        }
    }))



    return (
        <Box sx={{
            width: '100%', height: '400px', backgroundColor: '#F3F3F3', display: 'flex', flexDirection: 'column',
            justifyContent: 'end'
        }}>
            <Container maxWidth='lg' sx={{ height: '85%', position: 'relative', display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ height: '80%', display: 'flex', justifyContent: 'space-between' }}>
                    <Box >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            <Logo height='50px' width='50px' />
                            <Typography sx={{ fontFamily: 'Playfair Display', fontWeight: '600', fontSize: '20px', whiteSpace: 'nowrap', height: '25px', marginLeft: '15px' }}>New Paths</Typography>
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
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', paddingTop: '30px' }}>
                            <svg width="0" height="0" style={{ position: 'absolute' }}>
                                <linearGradient id="insta-gradient" x1="20%" y1="75%" x2="75%" y2="20%" >
                                    <stop stopColor="#f09433" offset="0%" />
                                    <stop stopColor="#e6683c" offset="25%" />
                                    <stop stopColor="#dc2743" offset="50%" />
                                    <stop stopColor="#cc2366" offset="75%" />
                                    <stop stopColor="#bc1888 " offset="100%" />
                                </linearGradient>
                            </svg>
                            <Link href='https://facebook.com' target="_blank">
                                <FBStyled />
                            </Link>
                            <Link href='https://twitter.com' target="_blank">
                                <TwitterStyled />
                            </Link>
                            <Link href='https://instagram.com'  target="_blank">
                                <InstaStyled  style={{ fill: "url(#insta-gradient)" }} />
                            </Link>
                            <Link href='https://youtube.com' target="_blank">
                                <YTStyled />
                            </Link>
                        </Box>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'right', paddingBottom: '20px', height: '80%' }}>
                        <Typography sx={{ fontFamily: 'Playfair Display', fontSize: '22px', fontWeight: '600' }}>Get in touch</Typography>
                        <Typography sx={{ fontFamily: 'Mulish', fontSize: '16px', color: '#848484' }}>(+1) 991 12 32 22</Typography>
                        <Typography sx={{ fontFamily: 'Mulish', fontSize: '16px', color: '#848484' }}>Temqa Monument, Tbilisi</Typography>
                        <Typography sx={{ fontFamily: 'Mulish', fontSize: '16px', color: '#848484' }}>fakemail @gmail.com</Typography>
                    </Box>
                </Box>
                <Divider sx={{ margin: '20px 0px 20px 0px' }} />
                <Box sx={{ margin: 'auto', paddingBottom: '20px' }}>
                    <Typography sx={{ fontFamily: 'Mulish', color: '#848484' }}>©2021 New Paths. All rights reserved</Typography>
                </Box>
            </Container >
        </Box >
    )
}

export default Footer
