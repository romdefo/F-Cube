import React, { useEffect } from 'react'
import { Grid, Button, Modal } from '@mui/material'

import ModalEvent from './ModalEvent'

// Day JS
import DayJS from 'react-dayjs';


function CardEvents({ img, title, desc, date, selectEvent, maxPeople}) {

    // Style
    const mystyle = {
        leftPanel: {
            minHeight: "200px",
            minWidth: '200px',
            backgroundImage: `url(/images/events/${img})`,
            backgroundPosition: 'center',
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)",
            margin: '1rem'
        },
        opacityBlock: {
            position: 'relative',
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.70)",
            color: "#F4E4C1"
        }, date: {
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: '#E4C580',
            color: '#080F5B',
            padding: '0 1rem'
        },
      
    }
    
    // Date Format
    
    const newDate= <DayJS format="D/M/YYYY">{date}</DayJS>
        if (maxPeople!==0){
    return (
        <Grid item xs={12} md={4} style={mystyle.leftPanel}>
            <Grid item style={mystyle.opacityBlock} >
                <span style={mystyle.date}>{newDate}</span>
               
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ fontWeight: "500" }}>{title}</h2>
                    <p>{desc}</p>

                    <ModalEvent 
                    eventTitle={title}
                    eventDate = {newDate}
                    />
                </div>
            </Grid>
        </Grid>
    )} 
    else {

           return (
        <Grid item xs={12} md={4} style={mystyle.leftPanel}>
            <Grid item style={mystyle.opacityBlock} >
                <span style={mystyle.date}>Plus de places disponibles</span>
               
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <h2 style={{ fontWeight: "500" }}>{title}</h2>
                    <p>{desc}</p>

                
                </div>
            </Grid>
        </Grid>
    )

    }

    
 
}



export default CardEvents



