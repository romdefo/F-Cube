import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Action from './Action';
import Histoire from './Histoire';
import theme from '../../components/Theme';


import '../../stylesheets/App.css'
import '../../stylesheets/Separator.css'
import '../../stylesheets/Buttons.css'
import './Discover.css'

import {Container, Grid, ThemeProvider, Typography} from '@mui/material';


export default function Discover() {

    const nav = ["Accueil", "Qui-sommes-nous?","Histoire", "Equipe", "Blog", "Contact"];
    return (
    
        <ThemeProvider theme={theme}>     

            {/* Navbar */}
            <Navbar nav={nav}/> 
            
            {/* Section Actions */}
            <div className='section'>
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
            </div>

            {/* Section Histoire*/}
            <div className='section'>
                <Container maxWidth="md" >
                    <Grid container py={10}>
                        <Histoire/>
                    </Grid>
                </Container>
                <div className='separator'></div>
            </div>

            {/* Section Equipe */}
            <div className='section'>
                <Container maxWidth="md">
                    <Grid container id={nav[2]} sx={{ display:'flex', justifyContent:'center'}}>

                        <Grid item  mb={5}>
                            <Typography variant='h2'>Notre équipe</Typography> 
                        </Grid>

                        <Grid item >
                            <img src="../images/discover/team.png" className='img-fluid'/>
                        </Grid>
                    </Grid>
                </Container>
            </div>

             {/* Footer */}
            {/* <Footer/>    */}

        </ThemeProvider>


           

     ); }