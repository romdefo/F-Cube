import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Action from './Action';
import Histoire from './Histoire';
import Team from './Team';

import '../../stylesheets/App.css'
import './Discover.css'
import '../../stylesheets/Separator.css'

import {Grid, Button} from '@mui/material';


export default function Discover() {

    const nav = ["Accueil", "Qui-sommes-nous?", "Blog", "Contact"];
    return (
        <div>

            {/* Navbar */}
            <Navbar nav={nav}/>

            {/* Section Actions */}
            <Grid container id={nav[0]} className='page'>
                <Grid item xs={12} className='page-content' mb={5}>
                    <h1>Nos actions</h1> 
                </Grid>

                <Grid item xs={12} className='page-content'>
                    <Action/>
                </Grid>
                    
                <Grid item xs={12}>
                    <Grid>
                        Pour en savoir plus, visiter notre <Button variant='contained'> Blog </Button>
                    </Grid>
                </Grid>
            </Grid>

            <div className='separator'></div>

            {/* Section Histoire*/}
            <Grid container className='page'>

                <Grid item xs={12} className='page-content'>
                    <Histoire/>
                </Grid>
            </Grid>

            <div className='separator'></div>

            {/* Section Equipe */}
            <Grid container className='page'>

                <Grid item xs={12} className='page-content' mb={5}>
                    <h1>Notre équipe</h1> 
                </Grid>

                <Grid item xs={12} className='page-content'>
                    <Team/>
                </Grid>
            </Grid>

            {/* Footer */}
            {/* <Footer/> */}

        </div>       

     ); }