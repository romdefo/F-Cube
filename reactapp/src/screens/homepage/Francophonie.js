import React from 'react'

import '../../stylesheets/Francophonie.css';
import { Grid } from '@mui/material';

export default function Francophonie({ cards }) {
    return (
        cards.map((card, index) => {
            return (
                <Grid key={index} height='200px' item xs={11} md={5} className={index % 2 == 0 ? "odd-stats-container" : "even-stats-container"} style={{ margin: '1rem' }}>
                    <div className="stats-name">
                        <h1 style={{ color: index % 2 == 0 ? "black" : "white", fontSize: 75, textShadow: index % 2 == 0 ? "white 2px 3px" : "black 2px 3px" }}>{card.number}</h1>
                    </div>
                    <div className="stats-text">
                        <p style={{ padding: "0 20px" }}>{card.text}</p>
                    </div>
                </Grid>
            )
        })
    )
}