import React from 'react';

import Navbar from '../components/Navbar';
import Cards from '../components/Card';

import {Grid, Button} from '@mui/material';

const mystyle = {
    leftPanel: {
        height: "10vh",
        minWidth:'300px',
        backgroundImage: `url(./images/background.jpg)`,
        backgroundPosition:'center',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    },
    opacityBlock: {
        //position:'relative',
        display: "flex",
        flexDirection: "column",
        //justifyContent: "space-around",
        alignItems: "center",
        height: "10vh",
        backgroundColor: "rgba(243, 243, 243, 0.59)",
        color: "#004636"
    },
    background: {
        backgroundColor:'#99C2C0',
        height: '100vh'
    },
    nav: {
        height: '10vh',
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        // backgroundColor:'#FFFFFF' ,
        color: "#004636"
    },
    image: {
        height: '10vh'
    },
    text: {
        color: "#004636",
        display: "flex",
        justifyContent: "center",
        weight: "500"
    }
}


export default function Discover() {

    const nav = ["Accueil", "Qui-sommes-nous?", "Blog", "Contact"];
    return (
        <div>

            {/* Navbar */}
            <Navbar nav={nav}/>

            {/* Section1 */}
            <Grid id={nav[0]}>
                <Grid item xs={12} style={mystyle.leftPanel} mb={5}>
                    <Grid xs={12} style={mystyle.opacityBlock}>
                        <h1>
                            Nos actions
                        </h1>
                    </Grid>
                </Grid>

                
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

                <Grid item xs={12} style={mystyle.text}>
                    <Grid>
                        Pour en savoir plus, visiter notre <Button variant='contained'> Blog </Button>
                    </Grid>
                </Grid>

            </Grid>

            <Grid id={nav[1]}>
                <Grid item xs={12} style={mystyle.leftPanel} mb={5}>
                    <Grid xs={12} style={mystyle.opacityBlock}>
                        <h1>
                            Nos actions
                        </h1>
                    </Grid>
                </Grid>

                
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

                <Grid item xs={12} style={mystyle.text}>
                    <Grid>
                        Pour en savoir plus, visiter notre <Button variant='contained'> Blog </Button>
                    </Grid>
                </Grid>

            </Grid>

        </div>       

     ); }