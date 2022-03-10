import React from 'react';

import Cards from '../../components/Cards';

import { Grid } from '@mui/material';

export default function Action({ cards }) {

    return (
        cards.map((card, index) => {
            return (
                <Grid item xs={12} sm={6} md={4} >
                    <Cards
                        key={index}
                        cardID={card.id}
                        img={card.img}
                        imgDesc={card.imgDesc}
                        title={card.title}
                        content={card.content}
                        button={card.button1} />
                </Grid>
            )
        })
    );
}