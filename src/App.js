import { Button } from '@mui/material'
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
    //Testimonials შევაკეთო მოგვიანებით
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Home />
        <NewWay />
        <Destinations />
        <Guides />
        <Partners />
        <Testimonials />
        <FAQ />
        <Contact />
      </div>
    </ThemeProvider>
  );
}

export default App;
