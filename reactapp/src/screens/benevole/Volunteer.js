import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
 import Inscription from './InscriptionSoutien';
// import Histoire from './Histoire';
// import Home from './Home';
// import CarouselNews from './assets/CarouselNews';

import '../../stylesheets/App.css'

import {Container, Grid, Typography} from '@mui/material';


export default function Volunteer() {

    const nav = ["Accueil", "Soutien Scolaire","Sorties"];
    return ( 
        <>     
            {/* Navbar */}
            <Navbar nav={nav}/> 

            {/* Home page */}
            <div className='section' id={nav[1]}>
                <div className='opacity'>
                <Container  maxWidth="md" sx={{ py: 8}}>
                    <Grid container justifyContent="center" alignItems="center" mb={4}>
                        <Grid item>
                            <Typography variant='h5'>
                                Inscription soutien scolaire mois de Mars
                            </Typography>
                        </Grid>
                    </Grid>
                    <Inscription/>
                </Container>            
                </div>
            </div>
            <div className='section' id={nav[1]}>
                <div className='opacity'>
                <Container  maxWidth="md" sx={{ py: 8}}>
                    <Grid container justifyContent="center" alignItems="center" mb={4}>
                        <Grid item>
                            <Typography variant='h5'>
                                Inscription soutien scolaire mois de Mars
                            </Typography>
                        </Grid>
                    </Grid>
                    <Inscription/>
                </Container>            
                </div>
            </div>
                       
            {/* Section Actions */}
            {/* <div className='section' id={nav[1]}>
                <Container  maxWidth="md" sx={{ py: 8 }}>
                    <Grid container sx={{ display:'flex', justifyContent:'center'}} pb={4}>
                        <Grid item 
                        // sx={{color:'#003D55'}}
                         >
                            <Typography variant='h2'>Nos actions</Typography> 
                        </Grid>
                    </Grid>
                
                    <Grid container spacing={8}>
                        <Action/>
                    </Grid>
                        
                    <Grid container  justifyContent="center" alignItems="center" mt={5} pb={10} spacing={4} >
                            <Grid item>
                                <Typography variant='h5'>
                                    Pour en savoir plus, visiter notre 
                                </Typography>
                            </Grid>
                            <Grid item>
                                <button className='act-button'> Blog </button>  
                            </Grid>
                    </Grid>

                </Container>
                <div className='separator'></div>
            </div> */}



            {/* Footer */}
            <Footer/>   
        </>      
     ); }