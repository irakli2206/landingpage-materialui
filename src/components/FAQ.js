import React from 'react'
import { Button, Box, Container, Accordion, AccordionSummary, AccordionDetails, Typography, FormControl, Select, InputLabel, MenuItem, Rating } from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import '@fontsource/playfair-display'
import '@fontsource/mulish'
import {ReactComponent as FAQBG} from '../assets/random-bg2.svg'
import { styled } from '@mui/material/styles';


const FAQ = () => {
    const FAQAccordion = styled(Accordion)(() => ({
        background: 'whitesmoke'
    }))

    const FAQTitle = styled(Typography)(() => ({
        fontFamily: 'Mulish',
        fontSize: '24px'
    }))

    const FAQText = styled(Typography)(() => ({
        fontFamily: 'Mulish',
        fontSize: '24px'
    }))

    return (
        <Container maxWidth='lg' sx={{ height: '70vh', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', height: '50%', position: 'relative' }}>
                <Box sx={{position: 'absolute', width: '100%', height: '100%'}}>
                    <FAQBG width='100%' height='100%'/>
                </Box>
                <FAQAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                    >
                        <FAQTitle >Lorem ipsum dolor sit amet?</FAQTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FAQText >
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </FAQText>
                    </AccordionDetails>
                </FAQAccordion>
                <FAQAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <FAQTitle>Was this website made with Material UI?</FAQTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FAQText>
                            Yes, it was
                        </FAQText>
                    </AccordionDetails>
                </FAQAccordion>
                <FAQAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <FAQTitle>Will this FAQ really answer my questions?</FAQTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FAQText>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.
                        </FAQText>
                    </AccordionDetails>
                </FAQAccordion>
                <FAQAccordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <FAQTitle>Are there better FAQs than this?</FAQTitle>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FAQText>
                            Probably not!
                        </FAQText>
                    </AccordionDetails>
                </FAQAccordion>
            </Box>


        </Container>
    )
}

export default FAQ
