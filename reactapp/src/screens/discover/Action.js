import React, {useState} from 'react';

import Cards from '../../components/Cards';

import { Grid } from '@mui/material';

export default function Action() {

    let cardList = [
        {id: "scolarite", img: "../images/discover/scolarite.png", imgDesc:"accompagnement-scolarité", 
        title:"Accompagnement à la scolarité", 
        content: "Amener les enfants et les jeunes, à (re)construire une relation positive à l’école et au savoir",
        button1: "En savoir plus"},
        {id: "prevention", img: "../images/discover/prevention.jpeg", imgDesc:"prevention", 
        title:"Prévention", 
        content: "EGDO s'engage aux côté des famille pour la prévention des conduites à risque et de la promotion de la santé",
        button1: "En savoir plus"},
        {id: "insertion", img: "../images/discover/insertion.png", imgDesc:"insertion-professionnelle", 
        title:"Insertion Professionnelle", 
        content: "Depuis sa création, EGDO a mis l’orientation et l’accompagnement vers la formation et l’emploi des jeunes et des parents au centre de ses préoccupations.",
        button1: "En savoir plus"},
    ]

    return (
        cardList.map((card,index) => {
            return (
                <Grid item xs={12} sm={6} md={4} >
                    <Cards 
                        key={index}
                        cardID={card.id}
                        img={card.img}
                        imgDesc={card.imgDesc}
                        title={card.title}
                        content={card.content}
                        button={card.button1}/>
                </Grid>
                )
            })  
    );
}