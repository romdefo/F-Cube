import React from 'react'
import './Student.css'
import CarouselNews from './assets/CarouselNews'
import {Grid} from '@mui/material'

import CardEvents from './assets/CardEvents'
import Calendar from './assets/Calendar'


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
        <div className='football'>
            
                <Grid item xs={12}  className='inscription'>
                    
                </Grid>

        </div>

    </div>
    
    
  )
}

export default Student