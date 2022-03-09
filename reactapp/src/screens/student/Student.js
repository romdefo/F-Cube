import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import './Student.css';
import CarouselNews from './assets/CarouselNews';
import Footer from ".//../../components/Footer";
import Navbar from "../../components/Navbar";
import { Grid, Button } from '@mui/material'

// Unique key
import uuid from 'react-uuid'

// Components
import CardEvents from './assets/CardEvents'
import SportCard from './assets/SportCard'
import Calendar from './assets/Calendar'
import { StudentTabs } from './assets/Tabs'
import { EventNoteSharp } from '@mui/icons-material';



const Student = (props) => {

  const [events, setEvents] = useState([])
  const [eventsDay, setEventsDay] = useState([])

  const dateFormat = function (d) {
    var newDate = new Date(d);
    var format = newDate.getDate() + '/' + (newDate.getMonth() + 1) + "/" + newDate.getFullYear()
    return format
  }

  const dateToday = new Date()
  const dateTodayFormat = dateFormat(dateToday)

  useEffect(() => {

    const fetchEvents = async () => {
      const res = await fetch('/event/see-events/students')
      const allEvents = await res.json()
      await setEvents(allEvents.events)
    }
    fetchEvents()

    const todayEvents = () => {

      const eventsTodayFilter = events.filter(event => {
        const eventDay = dateFormat(event.date)
        return dateTodayFormat == eventDay
      })

      if (eventsTodayFilter.length !== 0) {
        setEventsDay(eventsTodayFilter)
      }
    }
    todayEvents()

  }, [])



  const eventsData = eventsDay.map(({ title, description, type, date, maxNumberOfPeople }) => {

    return (<CardEvents
      key={uuid()}
      title={title}
      desc={description}
      img={`${type.replace(/\s/g, '-').replace(/é|è/g, 'e').replace(/à|â/g, "a")}.jpg`}
      date={date}
      maxPeople={maxNumberOfPeople}
    />)
  })

  return (
    <>
      <Navbar nav={["Actualités", "Sorties", "Football", "Taekwondo", "Contact"]} />
      <div className='Student' style={myStyle.studentContainer} >

        <CarouselNews
          news={[
            {
              img: '/images/sportcards/tkwu12.jpg',
              title: "Saison 2022-2023 : Inscriptions !",
              subtitle: "Ouverture des inscriptions pour le Taekwondo."
            },
            {
              img: '/student/imgs/asterix.avif',
              title: "Sortie au Parc Astérix",
              subtitle: "Onze jeunes de l'association EGDO ont eu la chance de passer une journée chez les Gaulois !"
            }]} />

        <div className='sorties' id="Sorties" >


          <div style={myStyle.upcomingEvents} >

            <Grid item xs={12} style={{ margin: '1rem' }}>
              <Calendar events={events} setEvents={setEvents} eventsDay={eventsDay} setEventsDay={setEventsDay} />
              {eventsDay.length === 0 && <h6 style={{ textAlign: 'center' }}> Aucune activité n'est disponible pour ce jour, merci de sélectionner une autre date</h6>}
            </Grid>
            {eventsData}

          </div>

          <Grid container xs={12} height='100vh' className='football' id="Football" >
            <Grid item xs={11} md={8} className="football-info-container">
              <div className="sports-name">
                <h1 style={{ color: "white", fontSize: 75, textShadow: "black 2px 3px" }}>Football</h1>
              </div>
              <div className="sports-text">
                <p style={{ marginBottom: 25 }}>Alliant l'éducatif au sportif, le club de foot d'EGDO est animé avec passion par des coachs du quartier. Il comporte des équipes pour tous les âges.</p>
                <Button variant="contained" style={{ backgroundColor: '#003D55', width: '180px', alignSelf: 'center', borderRadius: 15 }}>Je m'inscris</Button>
              </div>
            </Grid>
          </Grid>

          <div className='football-info'>
            <StudentTabs />
          </div>

          <Grid container xs={12} height='100vh' className='taekwondo' id="Taekwondo">
            <Grid item xs={11} md={5} className="taekwondo-info-container">
              <div className="sports-name">
                <h1 style={{ color: "#4c83bc", fontSize: 75, textShadow: "white 2px 3px" }}>Taekwondo</h1>
              </div>
              <div className="sports-text">
                <p style={{ marginBottom: 25 }}>Au sein d'EGDO, on pratique un art martial olympique depuis un quart de siècle ! Le taekwondo est proposé en mixte dans la salle Cap-Dadi du gymnase de la Goutte d’Or.</p>
                <a href="/student/files/inscription-tkw.pdf" download style={{ textDecoration: 'none', alignSelf: 'center' }}> <Button variant="contained" style={{ backgroundColor: '#003D55', width: '180px', alignSelf: 'center', borderRadius: 15 }}>Je m'inscris</Button></a>
              </div>
            </Grid>

            <Grid item xs={11} md={5} className="bodytae-info-container">
              <div className="sports-name">
                <h1 style={{ color: "white", fontSize: 75, textShadow: "black 2px 3px" }}>Body Tae Féminin</h1>
              </div>
              <div className="sports-text">
                <p style={{ marginBottom: 25 }}>Le Body Taekwondo féminin est un mélange de fitness et de taekwondo en musique qui développe la coordination, la psychomotricité et la perception du corps dans l'espace.</p>
                <a href="/student/files/inscription-tkw-f.pdf" download style={{ textDecoration: 'none', alignSelf: 'center' }}> <Button variant="contained" style={{ backgroundColor: '#003D55', width: '180px', alignSelf: 'center', borderRadius: 15 }}>Je m'inscris</Button></a>
              </div>
            </Grid>
          </Grid>

          <Grid container xs={12} justifyContent='center'>

            <SportCard
              terrain="Gymnase de la Goutte d'Or"
              adress='12 rue de la Goutte d’Or'
              city='75018 Paris'
              img='tkw-6a'
              category={[{ cat: '6-8 ans', trainingDays: [{ day: 'Mardi', hour: 'De 17h45 à 18h30' }, { day: 'Samedi', hour: 'De 14h00 à 14h45' }] }]}
              coaches={[]}
              sport='tkw'
            />

            <SportCard
              terrain="Gymnase de la Goutte d'Or"
              adress='12 rue de la Goutte d’Or'
              city='75018 Paris'
              img='tkwu12'
              category={[{ cat: '9-11 ans', trainingDays: [{ day: 'Mardi', hour: 'de 18h30 à 19h30' }, { day: 'Samedi', hour: 'de 14h45 à 15h45' }] }]}
              coaches={[]}
              sport='tkw'
            />

            <SportCard
              terrain="Gymnase de la Goutte d'Or"
              adress='12 rue de la Goutte d’Or'
              city='75018 Paris'
              img='u16tkw'
              category={[{ cat: '12-17 ans', trainingDays: [{ day: 'Mardi', hour: 'de 19h30 à 20h30' }, { day: 'Samedi', hour: 'de 15h45 à 17h00' }] }]}
              coaches={[]}
              sport='tkw'
            />

          </Grid>
          <Footer />
        </div>


        {/* <Grid container xs={12} height='100vh' className='football' >
  
        <Grid 
        item xs={11} md={8}

        style={myStyle.footballInfoContainer}>
          <div
           id="Football"
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
        <BasicTabs />
      </div>

      

      <Grid container xs={12} minHeight='100vh' className='taekwondo' id="Taekwondo">
        <Grid container xs={12}>
        
          </Grid>


        <Grid item xs={11} md={5} style={{
          backgroundImage: "url('./student/imgs/taekwondo.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.60)",
          height: '500px',
          margin: '1rem'
        }}>
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
              <a href="/student/files/inscription-tkw.pdf" download style={{ textDecoration: 'none', alignSelf: 'center' }}> <Button variant="contained" style={{ backgroundColor: '#3FA2B0', width: '300px' }}>Je m'inscris</Button></a>

            </div>
          </div>
        </Grid>

        <Grid item xs={11} md={5} style={{
          backgroundImage: "url('./student/imgs/taekwondoF.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          boxShadow: "5px 4px 6px rgba(0, 0, 0, 0.7)",
          height: '500px'
        }}>
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
              <a href="/student/files/inscription-tkw-f.pdf" download style={{ textDecoration: 'none', alignSelf: 'center' }}> <Button variant="contained" style={{ backgroundColor: '#3FA2B0', width: '300px' }}>Je m'inscris</Button></a>
            </div>
          </div>
        </Grid>
      </Grid>

      <Grid container xs={12} justifyContent='center'>


        <SportCard
          terrain="Gymnase de la Goutte d'Or"
          adress='12 rue de la Goutte d’Or'
          city='75018 Paris'
          img='tkw-6a'
          category={[{ cat: '6-8 ans', trainingDays: [{ day: 'Mardi', hour: 'De 17h45 à 18h30' }, { day: 'Samedi', hour: 'De 14h00 à 14h45' }] }]}
          coachs={[]}
          sport='tkw'
        />

        <SportCard
          terrain="Gymnase de la Goutte d'Or"
          adress='12 rue de la Goutte d’Or'
          city='75018 Paris'
          img='tkwu12'
          category={[{ cat: '9-11 ans', trainingDays: [{ day: 'Mardi', hour: 'De 18h30 à 19h30' }, { day: 'Samedi', hour: 'De 14h45 à 15h45' }] }]}
          coachs={[]}
          sport='tkw'
        />

        <SportCard
          terrain="Gymnase de la Goutte d'Or"
          adress='12 rue de la Goutte d’Or'
          city='75018 Paris'
          img='u16tkw'
          category={[{ cat: '12-17 ans', trainingDays: [{ day: 'Mardi', hour: 'De 19h30 à 20h30' }, { day: 'Samedi', hour: 'De 15h45 à 17h00' }] }]}
          coachs={[]}
          sport='tkw'
        />

      </Grid> */}
        <div id='Contact'>
          <Footer />
        </div>
      </div>

    </>
  )

}

const myStyle = {
  studentContainer: {
    backgroundImage: `url(./student/imgs/bg-student.jpg)`,
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed'
  },
  upcomingEvents: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%'
  }
}

function mapStateToProps(state) {
  return { admin: state.admin }
}

export default connect(mapStateToProps, null)(Student);