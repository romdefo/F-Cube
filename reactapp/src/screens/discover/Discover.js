import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
// //import theme from "../../components/Theme";

import Action from './Action';
import Histoire from './Histoire';
import Home from './Home';

import '../../stylesheets/App.css'

import { Container, Grid, Typography, Button } from '@mui/material';

// const nav = ["Accueil", "Qui-sommes-nous?", "Histoire", "Equipe", "Blog"];

function Discover(props) {
    console.log(props.admin.token)

    const nav = [ "Qui-sommes-nous?", "Histoire", "Equipe", "Blog", "Contact"];
    return (
        <>
            {/* Navbar */}
            < Navbar nav={nav} />

            {/* Home page */}
            < div  >
                <Home />
            </div >

            {/* Section Actions */}
            < div className='section' id={nav[0]} >
                <div className='opacity'>
                    <Container maxWidth="lg" sx={{ pt: 2 }} >
                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}
                            pb={4}
                        >
                            <Grid item >
                                <Typography variant='h2'>Nos actions</Typography>
                            </Grid>
                        </Grid>

                        <Grid container spacing={8}>
                            <Action />
                        </Grid>

                        <Grid container justifyContent="center" alignItems="center" mt={1} mb={3}
                            // pb={10}
                            spacing={4} >
                            <Grid item>
                                <Typography variant='h5'>
                                    Pour en savoir plus, visiter notre
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button variant='contained' color='infos'> Blog </Button>
                            </Grid>
                        </Grid>

                    </Container>
                </div>
            </div >

            {/* Section Histoire*/}
            < div className='section2' id={nav[1]} >
                <div className='opacity'>
                    <Container maxWidth="md" >
                        <Grid container py={10}>
                            <Histoire />
                        </Grid>
                    </Container>
                </div>
            </div >

            {/* Section Equipe */}
            < div className='section' id={nav[3]}>
                <div className='opacity'>
                    <Container maxWidth="md" >
                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Grid item mb={5}>
                                <Typography variant='h2' id={nav[3]}>Notre équipe</Typography>
                            </Grid>

                            <Grid item >
                                <img alt="equipe egdo" src="../images/discover/team.png" className='img-fluid' />
                            </Grid>
                        </Grid>
                    </Container>
                </div>
            </div >
            <Footer id={nav[4]}/>
        </>
    );
}

function mapStateToProps(state) {
    return { admin: state.admin }
}

export default connect(mapStateToProps, null)(Discover);
