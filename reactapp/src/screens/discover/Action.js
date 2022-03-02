import React from 'react';

import Cards from '../../components/Cards';

import {Grid} from '@mui/material';

export default function Action() {

    let cardList = [
        {id: "scolarite", img: "../images/discover/scolarite.jpeg", imgDesc:"accompagnement-scolarité", 
        title:"Accompagnement à la scolarité", 
        content: "Amener les enfants et les jeunes, à (re)construire une relation positive à l’école et au savoir",
        button1: "En savoir plus"},
        {id: "scolarite", img: "../images/discover/scolarite.jpeg", imgDesc:"accompagnement-scolarité", 
        title:"Accompagnement à la scolarité", 
        content: "Amener les enfants et les jeunes, à (re)construire une relation positive à l’école et au savoir",
        button1: "En savoir plus"},
        {id: "scolarite", img: "../images/discover/scolarite.jpeg", imgDesc:"accompagnement-scolarité", 
        title:"Accompagnement à la scolarité", 
        content: "Amener les enfants et les jeunes, à (re)construire une relation positive à l’école et au savoir",
        button1: "En savoir plus"},
    ]

    return (
        <Grid item xs={12} className='cards'>
            {cardList.map(card => {
                return <Cards 
                    cardID={card.id}
                    img={card.img}
                    imgDesc={card.imgDesc}
                    title={card.title}
                    content={card.content}
                    button1={card.button1}/>
            })}
        </Grid>
    );
}