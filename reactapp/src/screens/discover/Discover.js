import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../components/Navbar';
import FCubeMap from '../../components/FCubeMap';
import Footer from '../../components/Footer';

import Home from './Home';
import Francophonie from './Francophonie';
import MemberSwiper from '../../components/MemberSwiper';
import QuoteSection from './QuoteSection';

import '../../stylesheets/App.css'
import '../../stylesheets/Card.css'

import { Container, Grid, Typography } from '@mui/material';
import AOS from "aos";
import "aos/dist/aos.css";

function Discover(props) {
    console.log(props.admin.token)

    const nav = ["Qui-sommes-nous ?", "Pourquoi la Francophonie ?", "Les cubeurs", "Rejoignez-nous"];

    useEffect(() => {

        const aosAnime = () => {
            AOS.init(
                { duration: 1000 }
            );
            AOS.refresh();
        }

        aosAnime()
    }, [])

    function scroll() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    return (
        <>
            {/* Navbar */}
            < Navbar nav={nav} />

            {/* Home page */}
            < div  >
                <Home />
            </div >

            <a className="back-to-top" onClick={scroll}>
                ^
            </a>

            {/* Section Qui sommes-nous ? */}
            < div className='section' id={nav[0]} >
                <div className='opacity2'>
                    <Container maxWidth="lg" sx={{ pt: 2 }} >
                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}
                            pb={4}
                        >
                            <Grid item >
                                <Typography variant='h2'>F<sup>3</sup>, qu'est-ce que c'est ?</Typography>
                            </Grid>
                        </Grid>

                        <Grid container sx={{ display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontSize: "26px", fontWeight: 500, textAlign: "center" }}>
                            <Grid item xs={11} md={3}>Une O.N.G. francophone et francophile...</Grid>
                            <Grid item xs={11} md={1}>*</Grid>
                            <Grid item xs={11} md={3}>... prenant la forme d'un espace d'échange et de collaboration...</Grid>
                            <Grid item xs={11} md={1}>*</Grid>
                            <Grid item xs={11} md={3}>... pour fédérer les énergies du monde francophone autour des enjeux de demain.</Grid>
                        </Grid>
                    </Container>
                </div>
            </div >

            {/* Section Francophonie */}
            < div className='section' id={nav[1]} >
                <div className='opacity2'>
                    <Container maxWidth="lg" sx={{ pt: 2 }} >
                        <Grid container sx={{ display: 'flex', justifyContent: 'center' }}
                            pb={4}
                        >
                            <Grid item >
                                <Typography variant='h2'>La Francophonie en chiffres</Typography>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center">
                            <Francophonie cards={[{ number: 5, text: "Le français est la cinquième langue la plus parlée au monde." },
                            { number: 3, text: "Le français est la troisième langue la plus parlée dans le monde des affaires." }]} />
                        </Grid>
                        <Grid container justifyContent="center" className="reverse-card">
                            <Francophonie cards={[{ number: 300, text: "Le français compte aujourd'hui 300 millions de locuteurs. Il en comptera 700 millions en 2050." }, { number: 88, text: "88 pays sont membres de l'Organisation internationale de la Francophonie (OIF)." }]} />
                        </Grid>
                    </Container>
                </div>
            </div >

            {/* Section Les cubeurs */}
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
                                <p className="team-subtitle">... aux quatre coins de la Francophonie</p>
                            </Grid>
                        </Grid>

                        <Grid container justifyContent="center">
                            <FCubeMap />
                        </Grid>
                    </Container>
                </div>
            </div >

            {/* Section Rejoignez-nous */}
            < div className='section2' id={nav[3]}>
                <div className='opacity3'>
                    <QuoteSection />
                </div>
            </div >

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