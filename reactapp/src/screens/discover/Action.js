import React from 'react';

import Navbar from '../../components/Navbar';
import Cards from '../../components/Card';

import '../../stylesheets/App.css'
import '../../stylesheets/Separator.css'

import {Grid, Button} from '@mui/material';

export default function Action(props) {

    return (
        <Grid item xs={12} mb={5}>
            <Grid container spacing={4} display="flex" justifyContent="center">
                <Grid item display="flex" justifyContent="center">
                    <Cards 
                        cardID="scolarite"
                        img="./images/scolarite.jpeg"
                        imgDesc="scolarite"
                        title="Accopagnement à la scolarité"
                        content="Lorem Ipsum"
                        button1="En savoir plus"/>
                </Grid>
            </Grid>
        </Grid>
    );
    
}