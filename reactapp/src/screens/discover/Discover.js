import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Action from './Action';
import Histoire from './Histoire';
import Team from './Team';
import CarouselComponent from './Caroussel';

import '../../stylesheets/App.css'
import '../../stylesheets/Separator.css'
import '../../stylesheets/Buttons.css'
import './Discover.css'

import {Container, Grid, createTheme, ThemeProvider} from '@mui/material';

const theme = createTheme();

export default function Discover() {

    const nav = ["Accueil", "Qui-sommes-nous?","Histoire", "Equipe", "Blog", "Contact"];
    return (
    
        <ThemeProvider theme={theme} >     

            {/* Navbar */}
            <Navbar nav={nav}/> 
            
            {/* Section Actions */}
            <Container maxWidth="xl">
                <Grid container justifyContent="center" alignItems="center" mt={5}>
                    <Grid item  mb={5} sx={{color:'#003D55'}}>
                        <h1>Nos actions</h1> 
                    </Grid>
                </Grid>
            

                <Grid container justifyContent="center" alignItems="center">
                    <Action/>
                </Grid>
                    
                <Grid container  justifyContent="center" alignItems="center" mt={5} spacing={4}>
                        <Grid item>
                            <h2>
                                Pour en savoir plus, visiter notre 
                            </h2>
                        </Grid>
                        <Grid item>
                            <button className='act-button'> Blog </button>  
                        </Grid>
                </Grid>

            </Container>



            <div className='separator'></div>

            {/* Section Histoire*/}
            <Container sx={{bgcolor:"#80CCEA"}}>

                <Grid container>
                    <Histoire/>
                </Grid>
            </Container>

            <div className='separator'></div>

            {/* Section Equipe */}
            <Grid container id={nav[2]} className='page'>

                <Grid item xs={12} className='page-content' mb={5}>
                    <h1>Notre équipe</h1> 
                </Grid>

                <Grid item xs={12} className='page-content'>
                    <Team/>
                </Grid>
            </Grid>


        </ThemeProvider>


            // {/* Footer */}
            // {/* <Footer/> */}   

     ); }