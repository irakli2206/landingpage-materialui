import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './components/Header'
import Home from './components/Home'
import NewWay from './components/NewWay'
import Destinations from './components/Destinations'
import Guides from './components/Guides'
import Partners from './components/Partners'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

function App() {

  const theme = createTheme({
    palette: {
      primary: {
        main: '#FB8F1D',
      },
      secondary: {
        main: '#1ABE84',
      },

    }
  })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Element name="home">
          <Home />
        </Element>
        <NewWay />
        <Element name="destinations">
          <Destinations />
        </Element>
        <Guides />
        <Element name="partners">
          <Partners />
        </Element>
        <Element name="about">
          <Testimonials />
          <FAQ />
        </Element>
        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
