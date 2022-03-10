import React from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import theme from "../../components/Theme";

import Action from './Action';
import Histoire from './Histoire';
import Home from './Home';

// import './Discover.css'
import '../../stylesheets/App.css'

import { Container, Grid, Typography, Button } from '@mui/material';

const nav = ["Accueil", "Qui-sommes-nous?", "Histoire", "Equipe", "Blog"];

function Discover(props) {
    console.log(props.admin.token)

    const nav = ["Accueil", "Qui-sommes-nous?", "Histoire", "Equipe"];

    const cardList = [
        {
            id: "scolarite", img: "../images/discover/scolarite.png", imgDesc: "accompagnement-scolarité",
            title: "Accompagnement à la scolarité",
            content: "Amener les enfants et les jeunes, à (re)construire une relation positive à l’école et au savoir",
            button1: "En savoir plus"
        },
        {
            id: "prevention", img: "../images/discover/prevention.jpeg", imgDesc: "prevention",
            title: "Prévention",
            content: "EGDO s'engage aux côté des famille pour la prévention des conduites à risque et de la promotion de la santé",
            button1: "En savoir plus"
        },
        {
            id: "insertion", img: "../images/discover/insertion.png", imgDesc: "insertion-professionnelle",
            title: "Insertion Professionnelle",
            content: "Depuis sa création, EGDO a mis l’orientation et l’accompagnement vers la formation et l’emploi des jeunes et des parents au centre de ses préoccupations.",
            button1: "En savoir plus"
        },
    ]

    return (
        <>
            {/* Navbar */}
            < Navbar nav={nav} />

            {/* Home page */}
            < div id={nav[0]} >
                <Home />
            </div >

            {/* Section Actions */}
            < div className='section' id={nav[1]} >
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
                            <Action cards={cardList} />
                        </Grid>

                        <Grid container justifyContent="center" alignItems="center" mt={5}
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
            < div className='section2' id={nav[2]} >
                <div className='opacity'>
                    <Container maxWidth="md" >
                        <Grid container py={10}>
                            <Histoire />
                        </Grid>
                    </Container>
                </div>
            </div >

            {/* Section Equipe */}
            < div className='section' >
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
            <Footer />
        </>
    );
}

function mapStateToProps(state) {
    return { admin: state.admin }
}

export default connect(mapStateToProps, null)(Discover);
