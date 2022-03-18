import React, { useEffect } from 'react';
import { Grid, Box, Container, Typography } from '@mui/material';

import '../../stylesheets/App.css'
import '../../stylesheets/Buttons.css'

import AOS from "aos"
import "aos/dist/aos.css"

export default function Home() {

    useEffect(() => {

        const aosAnime = () => {
            AOS.init(
                { duration: 1000 }
            );
            AOS.refresh();
        }

        aosAnime()
    }, [])
    return (
        <div className='home' style={mystyle.img}>
            <Box className='home' style={mystyle.opacity} sx={{ display: { md: 'flex', xs: 'none' } }}>

                <Container maxWidth='lg' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                    <Grid container
                        xs={12} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '50%' }}>
                        <Grid item sx={{ width: '100%' }}>
                            <Typography variant='h2' sx={{ color: '#FFF', fontSize: 100, textShadow: "4px 4px 4px black" }}>
                                F<sup style={{ fontSize: 75, fontFamily: "Josefin Sans, sans serif" }}>3</sup>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h3' sx={{ color: '#FFF', fontSize: 35, fontWeight: 600, textShadow: "4px 4px 4px black", marginTop: "30px" }} data-aos="fade-up" data-aos-duration="2000">
                                Fédération Francophone du Futur
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            {/* Mobile */}
            <Box className='home' style={mystyle.opacity} sx={{ display: { md: 'none', xs: 'flex' }, width: '100%' }}>

                <Container maxWidth='md' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: "column" }}>

                    <Grid container xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
                        <Grid item>
                            <Typography variant='h2' sx={{ color: '#FFF', fontFamily: "Josefin Sans, sans-serif", fontSize: 80, textShadow: "4px 4px 4px black" }}>
                                F<sup style={{ fontSize: 53 }}>3</sup>
                            </Typography>
                        </Grid>
                        <Grid item>
                            <Typography variant='h4' px={12} sx={{ color: '#FFF', fontSize: 35, fontWeight: 600, textShadow: "4px 4px 4px black", marginTop: "30px" }} data-aos="fade-up" data-aos-duration="2000">
                                Fédération Francophone du Futur
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </div >

    )
}

const mystyle = {
    img: {
        backgroundImage: `url("../images/background-img.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "95vh"
    },
    opacity: {
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        minHeight: "95vh"
    },
}
