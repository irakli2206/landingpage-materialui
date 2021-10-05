import React from 'react'
import { Button, TextField, Box, Container, Typography, FormControl, Select, InputLabel, MenuItem, Input } from '@mui/material'
import { ReactComponent as ContactBG } from '../assets/contact-bg.svg'
import { styled } from '@mui/material/styles';
import '@fontsource/playfair-display'
import '@fontsource/mulish'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'


const Contact = () => {

    const ContactTitle = styled(Typography)(({
        fontFamily: 'Playfair Display',
        fontSize: '36px',
        fontWeight: '700'
    }))

    const ContactText = styled(TextField)(({
        paddingBottom: '20px',
        '& .MuiOutlinedInput-root': {
            background: 'rgba(21, 150, 103, 0.1)',
            borderRadius: '30px',
            fontFamily: 'Mulish',
            '& fieldset': {
                borderColor: 'rgba(21, 150, 103, 0.25)',
                borderRadius: '30px'
            },
            '&:hover fieldset': {
                borderColor: 'rgba(21, 150, 103, 0.5)',
                borderRadius: '30px',
                transition: '0'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(21, 150, 103, 0.5)',
                borderRadius: '30px'
            },
        },
    }))

    const ContactMessage = styled(TextField)(({
        paddingBottom: '20px',
        '& .MuiOutlinedInput-root': {
            background: 'rgba(21, 150, 103, 0.1)',
            borderRadius: '30px',
            fontFamily: 'Mulish',
            '& fieldset': {

                borderColor: 'rgba(21, 150, 103, 0.25)',
                borderRadius: '30px'
            },
            '&:hover fieldset': {
                borderColor: 'rgba(21, 150, 103, 0.5)',
                borderRadius: '30px',
                transition: '0'
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(21, 150, 103, 0.5)',
                borderRadius: '30px'
            },
        },
    }))

    const ContactButton = styled(Button)(({
        margin: 'auto',
        height: '52px',
        width: '200px',
        borderRadius: '8px',
        fontFamily: 'Mulish',
        fontWeight: '700',
        color: 'white',
        fontSize: '16px',
        letterSpacing: '2px',
        textTransform: 'none',
        marginTop: '20px',


    }))


    const CustomMap = styled(MapContainer)(({
        width: '100%',
        height: '100%',
        filter: 'grayscale(0.7)'

    }))



    return (
        <Container maxWidth='lg' sx={{ height: '120vh', display: 'flex', alignItems: 'center' }}>
            <Box sx={{
                width: '100%', height: '100%', position: 'relative', display: 'flex', flexDirection: 'column',
                alignItems: 'center'
            }}>
                <ContactTitle >Feel free to ask anything!</ContactTitle>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', height: '100%', alignItems: 'center' }}>
                    <ContactBG width='70%' height='70%' style={{ transform: 'translateX(-5%)' }} />
                    <FormControl sx={{ width: '50%', position: 'relative' }}>
                        <ContactText name="name" color='secondary' placeholder='First Name'></ContactText>
                        <ContactText color='secondary' placeholder='Last Name'></ContactText>
                        <ContactText color='secondary' placeholder='Email'></ContactText>
                        <ContactMessage color='secondary' placeholder='Email' multiline rows={4} ></ContactMessage>
                        <ContactButton variant='contained'>Send Message</ContactButton>
                    </FormControl>
                </Box>
                <CustomMap center={[41.770449, 44.810501]} zoom={15} scrollWheelZoom={true} zoomControl={false}>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={[41.770449, 44.810501]} />
                </CustomMap>



            </Box>

        </Container>
    )
}

export default Contact
