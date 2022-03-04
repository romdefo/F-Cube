import React,{useEffect} from 'react';
import './Student.css';
import CarouselNews from './assets/CarouselNews';
import Footer from ".//../../components/Footer";
import Navbar from ".//../../components/Navbar2";
import { Grid, Button, ButtonGroup } from '@mui/material'

import CardEvents from './assets/CardEvents'
import SportCard from './assets/SportCard'
import Calendar from './assets/Calendar'
import BasicTabs from './assets/Tabs'



import AOS from "aos";
import "aos/dist/aos.css";

const Student = () => {
  
  useEffect(() => {
    
    const aosAnime =  () => {
      AOS.init(
        {duration : 1000}
      );
      AOS.refresh();
    }

    aosAnime()
  }, [])
  

  return (
    <>
    <Navbar nav={["Accueil","Sorties", "Football", "Taekwondo", "Contact"]}  />
    <div className='Student' style = {myStyle.studentContainer} id="Accueil">
     
        <CarouselNews />
    

      <div className='sorties' id="Sorties" >
        <h1>Prochaines Sorties</h1>

        <div style= {myStyle.upcomingEvents} >
          <CardEvents
            title='Ski'
            desc='Séjour de ski dans l’une des plus belle station de France'
            img='ski.jpg'
            date='Du 04/04/2022 au 10/04/2022'
          />
          <CardEvents
            title='Musée du Louvre'
            desc='Visite d’une journée au musée du Louvre'
            img='louvre.jpg'
            date='10/04/2022'
          />

          <Grid item xs={12} md={4} style={{margin: '1rem'}}>
            <Calendar />
          </Grid>

        </div>
      </div>


      <Grid container xs={12} height='100vh' className='football' id="Football" >
        <Grid 
      
        item xs={11} md={8}
        data-aos="zoom-in" 
        style={myStyle.footballInfoContainer}>
          <div
          style={myStyle.footballInfoContainer.textContainer}>
            <h1 style={{ color: 'white', borderBottom: '2px solid white', width: '80%' }}>Football</h1>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
              <p style={{ color: 'white', alignSelf: 'center' }}>Le club de football "les Enfants de la Goutte D’Or" est une activité historique de l'association. Ce sont les habitants du quartier qui sont à l’origine de cette idée. Les Enfants de la Goutte D'Or est un Club de football alliant l'éducatif au sportif et ne pratiquant aucune détection préalable. </p>
              <Button variant="contained" style={{ backgroundColor: '#3FA2B0', width: '300px', alignSelf: 'center' }}>Je m'inscris</Button>
           
            </div>
          </div>
        </Grid>
      </Grid>

      <div className='football-info'>
        <BasicTabs/>
      </div>

      <Grid container xs={12} minHeight='100vh'  className='taekwondo' id="Taekwondo">
        <Grid item xs={11} md={5} style={{
          backgroundImage: "url('./student/imgs/taekwondo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.60)",
          height:'60vh',
          margin:'1rem'
        }}
        data-aos="fade-right">
          <div 
          style={{
            height: "100%",
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
            <h1 style={{ color: 'white', borderBottom: '2px solid white', width: '100%' }} >Taekwondo</h1>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
              <p style={{ color: 'white', alignSelf: 'center' }}>L’activité est affiliée FFTDA n° 750978 et proposée depuis 1999-2000 en mixte dans la salle Cap-Dadi du gymnase de la Goutte d’Or.</p>
              <a href="/student/files/inscription-tkw.pdf" download style={{textDecoration:'none', alignSelf: 'center'}}> <Button variant="contained" style={{ backgroundColor: '#3FA2B0', width: '300px' }}>Je m'inscris</Button></a>
             
            </div>
          </div>
        </Grid>

        <Grid item xs={11} md={5} style={{
          backgroundImage: "url('./student/imgs/taekwondoF.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.7)",
          height:'60vh'
        }}
        data-aos="fade-left">
          <div 
          style={{
            height: "100%",
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
          }}>
            <h1 style={{ color: 'white', borderBottom: '2px solid white', width: '100%' }} >Body Tae Feminin</h1>
            <div style={{ display: 'flex', flexDirection: 'column', padding: '1rem' }}>
              <p style={{ color: 'white', alignSelf: 'center' }}>Le Body Taekwondo féminin est un mélange de fitness et de Taekwondo en musique.</p>
              <a href="/student/files/inscription-tkw-f.pdf" download style={{textDecoration:'none', alignSelf: 'center'}}> <Button variant="contained" style={{ backgroundColor: '#3FA2B0', width: '300px' }}>Je m'inscris</Button></a>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container xs={12} justifyContent='center'>
     

      <SportCard
            terrain= "Gymnase de la Goutte d'Or"
            adress= '12 rue de la Goutte d’Or'
            city='75018 Paris'
            img='tkw-6a'
            category= {[{cat:'6-8 ans',trainingDays:[{day:'Mardi',hour:'De 17h45 à 18h30'},{day:'Samedi',hour:'De 14h00 à 14h45'}]}]}
            coachs = {[]}
            sport='tkw'
            />

      <SportCard
            terrain= "Gymnase de la Goutte d'Or"
            adress= '12 rue de la Goutte d’Or'
            city='75018 Paris'
            img='tkwu12'
            category= {[{cat:'9-11 ans',trainingDays:[{day:'Mardi',hour:'De 18h30 à 19h30'},{day:'Samedi',hour:'De 14h45 à 15h45'}]}]}
            coachs = {[]}
            sport='tkw'
            />

      <SportCard
            terrain= "Gymnase de la Goutte d'Or"
            adress= '12 rue de la Goutte d’Or'
            city='75018 Paris'
            img='u16tkw'
            category= {[{cat:'12-17 ans',trainingDays:[{day:'Mardi',hour:'De 19h30 à 20h30'},{day:'Samedi',hour:'De 15h45 à 17h00'}]}]}
            coachs = {[]}
            sport='tkw'
            />

      </Grid>
      <Footer />
    </div>

    </>
  )


}


export default Student

const myStyle = {
  studentContainer: {
    backgroundImage: `url(./student/imgs/bg-student.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundRepeat:'no-repeat',
    backgroundAttachment: 'fixed'
  },
 
  upcomingEvents: {
    display:'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width:'100%'
},
footballInfoContainer:{
  backgroundImage: "url('/student/imgs/bgfootball.jpg')",
  backgroundSize: 'cover',
  backgroundPosition: 'bottom',
  height: '60%',
  boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.48)",
  textContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  
}
}
