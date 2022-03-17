import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';
import FCubeMap from '../../components/FCubeMap';
import Footer from '../../components/Footer';

import MemberSwiper from '../../components/MemberSwiper';
import Home from './Home';

import '../../stylesheets/App.css'
import '../../stylesheets/Card.css'

import { Container, Grid, Typography } from '@mui/material';

function Discover(props) {
    console.log(props.admin.token)

    const nav = ["Qui-sommes-nous?", "Nos valeurs", "Les cubeurs", "Contact"];

    return (
        <>
            {/* Navbar */}
            < Navbar nav={nav} />

            {/* Home page */}
            < div  >
                <Home />
            </div >

            {/* Section Equipe */}
            < div className='section' id={nav[2]} >
                <div className='opacity2'>
                    <Container maxWidth="lg" sx={{ pt: 2 }} >
                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}
                            pb={4}
                        >
                            <Grid item >
                                <Typography variant='h2'>Les cubeurs</Typography>
                                <p className="team-subtitle">Des membres fondateurs...</p>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center" sx={{ marginBottom: 8 }}>
                            <MemberSwiper />
                        </Grid>

                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}
                            pb={4}
                        >
                            <Grid item >
                                <p className="team-subtitle">... répartis aux quatre coins du monde</p>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center">
                            <FCubeMap />
                        </Grid>
                    </Container>
                </div>
            </div >

            {/* Section Histoire
            < div className='section2' id={nav[1]}>
                <div className='opacity'>
                    <Container maxWidth="md" sx={{ paddingTop: "3rem" }}>
                        <Grid container py={10}>
                            <Histoire />
                        </Grid>
                    </Container>
                </div>
            </div > */}

            <div id={nav[4]}>

                <Footer />
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return { admin: state.admin }
}

export default connect(mapStateToProps, null)(Discover);