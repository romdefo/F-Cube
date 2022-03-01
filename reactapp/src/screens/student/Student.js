import React from 'react'
import './Student.css'
import CarouselNews from './assets/CarouselNews'
import {Grid, Button, ButtonGroup} from '@mui/material'

import CardEvents from './assets/CardEvents'
import Calendar from './assets/Calendar'
import BasicTabs from './assets/Tabs'


const Student = () => {
  return (
    
    
    <div className='Student'>
        
         <div className='news'>
            <h1>Actualités</h1>
            
            <CarouselNews/>
           
         </div>

         <div className='sorties'>
            <h1>Prochaines Sorties</h1>

            <div className='upcoming-events'>
                <CardEvents 
                title= 'Ski' 
                desc='Séjour de ski dans l’une des plus belle station de France'
                img='ski.jpg'
                date='Du 04/04/2022 au 10/04/2022'
                />
                 <CardEvents 
                title= 'Musée du Louvre' 
                desc='Visite d’une journée au musée du Louvre'
                img='louvre.jpg'
                date='10/04/2022'
                />
          
                <Grid item xs={12} md={4} style={{display:'flex',
                    justifyContent:'center',alignItems:'center',margin:'1rem', height:'300px'}}>
                    <Calendar />
                </Grid>
                 
            </div>

         </div>
        
            
                <Grid item xs={12} height='100vh'   className='football'>
                  <Grid xs={11} md={8}style={{ backgroundImage: "url('./student/imgs/footbg.jpg')", 
                  backgroundSize:'cover',
                  backgroundPosition:'bottom', 
                    height:'60%',
                    boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)"}}>
                        <div style={{
                          height:"100%",
                          width:"100%",
                          backgroundColor:'rgba(0, 0, 0, 0.7)',
                          display:'flex',
                          flexDirection:'column',
                          justifyContent:'flex-end',
                       
        

                        }}>
                          <h1 style={{color:'white', borderBottom:'2px solid white', width:'80%'}}>Football</h1>
                          <div style= {{display:'flex', flexDirection:'column', padding:'1rem'}}>
                          <p style={{color:'white',alignSelf:'center'}}>Le club de football "les Enfants de la Goutte D’Or" est une activité historique de l'association. Ce sont les habitants du quartier qui sont à l’origine de cette idée. Les Enfants de la Goutte D'Or est un Club de football alliant l'éducatif au sportif et ne pratiquant aucune détection préalable. </p>
                             <Button variant="contained" style= {{backgroundColor:'#3FA2B0', width:'300px', alignSelf:'center'}}>S'inscrire</Button>
                            </div>
                       
                        </div>
                  </Grid>
                </Grid>

                <div className='football-info'>
                        
                  <BasicTabs />

                </div>

      

    </div>
    
    
  )
}

export default Student