import React from 'react'
import { Button, Box, Container, List, ListItemButton, ListItemText, ListItemAvatar, ListItem } from '@mui/material'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { styled } from '@mui/material/styles';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@fontsource/inter/400.css'

const Header = () => {

    const HeaderText = styled(ListItemText)(({ theme }) => ({
        color: '#B8BECD',
        cursor: 'pointer',
        fontSize: '16px',
        fontWeight: 'bold',
        '&:hover': {
            color: 'black',
            transition: '0s',
        }
    }))

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
                    <Logo style={{ width: 60, height: 60, cursor: 'pointer' }} />
                    <Box sx={{ position: 'absolute', left: 'auto', right: '0' }}>
                        <List sx={{ display: 'flex' }}>
                            <ListItem sx={{ pointer: 'cursor', paddingRight: '40px' }}>
                                <HeaderText primary="Home" />
                            </ListItem>
                            <ListItem sx={{ pointer: 'cursor', paddingLeft: '40px', paddingRight: '40px' }}>
                                <HeaderText primary="Destinations" />
                            </ListItem>
                            <ListItem sx={{ pointer: 'cursor', paddingLeft: '40px', paddingRight: '40px' }}>
                                <HeaderText primary="About" />
                            </ListItem>
                            <ListItem sx={{ pointer: 'cursor', paddingLeft: '40px', paddingRight: '40px' }}>
                                <HeaderText primary="Partner" />
                            </ListItem>
                            <ListItem sx={{ pointer: 'cursor', paddingLeft: '40px' }}>
                                <Button variant="outlined" sx={{ borderRadius: '8px', width: '132px', height: '44px',
                            textTransform: 'none', fontSize: '16px'}}>
                                    Contact
                                </Button>
                            </ListItem>
                        </List>
                    </Box>
                </Container>
            </Box >
    )
}

export default Header
