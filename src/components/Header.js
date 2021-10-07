import React, { useState } from 'react'
import { Button, Box, Container, List, IconButton, Drawer, ListItemButton, ListItemText, ListItem } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { ReactComponent as Logo } from '../assets/logo.svg'
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/inter/400.css'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

const Header = () => {

    const HeaderText = styled(ListItemText)(({ theme }) => ({
        color: '#B8BECD',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        fontFamily: 'Inter',
        transition: '0.5s',
        '& .MuiTypography-root': {
            fontFamily: 'Inter',
        },
        '&:hover': {
            color: '#1abe84',
            transition: '0.5s',
        },
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }))

    const HeaderButton = styled(Button)(({theme}) => ({
        borderRadius: '8px', 
        width: '132px', 
        height: '44px',
        textTransform: 'none', 
        fontSize: '16px',
        fontFamily: 'Inter',
    }))

    const LargeBox = styled(Box)(({ theme }) => ({
        position: 'absolute',
        left: 'auto',
        right: '0',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }))

    const PhoneBox = styled(Box)(({ theme }) => ({
    }))



    const HeaderDrawer = styled(Drawer)(({ theme }) => ({
        '& .MuiDrawer-paperAnchorTop': {
            height: '300px'
        },
        '& .MuiBackdrop-root': {

        }
    }))

    const CustomMenuIcon = styled(MenuIcon)(({
        height: '45px',
        width: '45px',
    }))

    const CustomIconButton = styled(IconButton)(({ theme }) => ({
        marginRight: '0',
        marginLeft: 'auto',
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'inline'
        }
    }))

    const HeaderPhoneList = styled(List)(({ theme }) => ({
        display: 'flex',
        flexDirection: 'column',
        position: 'absolute',
        textAlign: 'center',
        top: '0px',
        width: '100%',
        paddingInline: '0',
        marginBlock: '0',
        paddingTop: '0px',
        paddingBottom: '0px'

    }))

    const HeaderPhoneLI = styled(ListItem)(({ theme }) => ({
        background: '#d3f4e8',
        outline: '2px solid #24cb8e',
        width: '100%',
        pointer: 'cursor',
        textAlign: 'center'
    }))

    const HeaderPhoneText = styled(ListItemText)(({ theme }) => ({
        color: '#0c6041',
        cursor: 'pointer',
        fontSize: '24px',
        fontWeight: 'bold',
        display: 'none',
        '&:hover': {
            color: 'black',
            transition: '0s',
        },
        [theme.breakpoints.down('md')]: {
            display: 'inline'
        },
        '& .MuiTypography-root': {
            fontSize: '24px',
            fontWeight: '400',
            fontFamily: 'Inter'

        }
    }))

    const [drawer, setDrawer] = useState()

    const toggleDrawer = (open) => (event) => {
        setDrawer(open)
    }

    const drawerList = () => (
        <PhoneBox onClick={toggleDrawer(false)}>
            <HeaderPhoneList >
                <Link to="home" smooth={true} duration={1000} onClick={toggleDrawer(false)}>
                    <HeaderPhoneLI >
                        <HeaderPhoneText primary="Home" />
                    </HeaderPhoneLI>
                </Link>
                <Link to="destinations" smooth={true} duration={1000} onClick={toggleDrawer(false)}>
                    <HeaderPhoneLI >
                        <HeaderPhoneText primary="Destinations" />
                    </HeaderPhoneLI>
                </Link>
                <Link to="partners" smooth={true} duration={1000} onClick={toggleDrawer(false)}>
                    <HeaderPhoneLI >
                        <HeaderPhoneText primary="Partners" />
                    </HeaderPhoneLI>
                </Link>
                <Link to="about" smooth={true} duration={1000} onClick={toggleDrawer(false)}>
                    <HeaderPhoneLI >
                        <HeaderPhoneText primary="About" />
                    </HeaderPhoneLI>
                </Link>
                <Link to="contact" smooth={true} duration={1000} onClick={toggleDrawer(false)}>
                    <HeaderPhoneLI >
                        <HeaderPhoneText primary="Contact" />
                    </HeaderPhoneLI>
                </Link>
            </HeaderPhoneList>
        </PhoneBox>
    )


    return (
        <Box sx={{
            height: '100px',
            width: '100%',
            background: 'white',
            alignItems: 'center',
            display: 'flex',
            position: 'fixed',
            zIndex: '2',
        }}>
            <Container maxWidth='lg' sx={{
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
            }}>
                <Link activeClass="active" to="home" spy={true} smooth={true} duration={500} >
                    <Logo style={{ width: 60, height: 60, cursor: 'pointer' }} />
                </Link>
                <CustomIconButton onClick={toggleDrawer(true)}>
                    <CustomMenuIcon color='secondary' />
                </CustomIconButton>
                <HeaderDrawer
                    anchor={'top'}
                    open={drawer}
                    onClose={toggleDrawer(false)}
                >
                    {drawerList()}
                </HeaderDrawer>
                <LargeBox >
                    <List sx={{ display: 'flex' }}>
                        <ListItem sx={{ pointer: 'cursor', paddingRight: '40px' }}>
                            <Link activeClass="active" to="home" spy={true} smooth={true} duration={1000} >
                                <HeaderText primary="Home" />
                            </Link>
                        </ListItem>
                        <ListItem sx={{ pointer: 'cursor', paddingLeft: '40px', paddingRight: '40px' }}>
                            <Link activeClass="active" to="destinations" spy={true} smooth={true} duration={1000} >
                                <HeaderText primary="Destinations" />
                            </Link>

                        </ListItem>
                        <ListItem sx={{ pointer: 'cursor', paddingLeft: '40px', paddingRight: '40px' }}>
                            <Link activeClass="active" to="partners" spy={true} smooth={true} duration={1000} >
                                <HeaderText primary="Partners" />
                            </Link>

                        </ListItem>
                        <ListItem sx={{ pointer: 'cursor', paddingLeft: '40px', paddingRight: '40px' }}>
                            <Link activeClass="active" to="about" spy={true} smooth={true} duration={1000} >
                                <HeaderText primary="About" />
                            </Link>

                        </ListItem>
                        <ListItem sx={{ pointer: 'cursor', paddingLeft: '40px' }}>
                            <Link activeClass="active" to="contact" spy={true} smooth={true} duration={1000} >
                                <HeaderButton variant="outlined">
                                    Contact
                                </HeaderButton>
                            </Link>

                        </ListItem>
                    </List>
                </LargeBox>
            </Container>
        </Box >
    )
}

export default Header
