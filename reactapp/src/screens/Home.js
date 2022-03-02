import React from 'react';
import { Grid, Button } from '@mui/material';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <Grid container style={mystyle.all}>
            <Grid item xs={12} md={6} style={mystyle.leftPanel}>
                <Grid style={mystyle.opacityBlock}>
                    <img src="../images/egdo-logo.png" alt="logo de l'association" style={{ width: 180 }} />
                    <h2 style={{ width: "60%", fontWeight: "600" }}>Notre association accompagne dans la durée les enfants, les jeunes et aussi les adultes afin qu’ils prennnent leur place de citoyens.</h2>
                    <Button variant="contained" style={mystyle.buttonDiscover}><Link to="/decouvrir-l-association" style={{ textDecoration: 'none', color: "white" }}>Découvrir l'association</Link></Button>
                </Grid>
            </Grid>
            <Grid item xs={12} md={6} style={mystyle.rightPanel}>
                <p style={{ color: "white", maxWidth: "60%", fontSize: 40, fontWeight: "500" }}>Les Enfants de la Goutte d'or</p>
                <Link to="/espace-eleve" style={{ textDecoration: 'none', color: "#004636" }}><Button variant="contained" style={mystyle.buttonRight}>Espace Elève</Button></Link>
                <Link to="/espace-eleve" style={{ textDecoration: 'none', color: "#004636" }}><Button variant="contained" style={mystyle.buttonRight}>Espace Elève</Button></Link>
                <Link to="/espace-eleve" style={{ textDecoration: 'none', color: "#004636" }}><Button variant="contained" style={mystyle.buttonRight}>Espace Elève</Button></Link>
            </Grid>
        </Grid>
    )
}

const mystyle = {
    all: {
        fontFamily: "IBM Plex Sans, sans-serif",
        backgroundColor: "#98c2c0",
        textAlign: "center"
    },
    leftPanel: {
        height: "100vh",
        backgroundImage: `url("../images/image-accueil.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    opacityBlock: {
        padding: 40,
        paddingBottom: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        backgroundColor: "rgba(243, 243, 243, 0.7)",
        color: "#004636"
    },
    rightPanel: {
        padding: 40,
        paddingBottom: 60,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        minHeight: "100vh",
    },
    buttonDiscover: {
        filter: "drop-shadow(5px 4px 4px rgba(0, 0, 0, 0.2))",
        borderRadius: 10,
        backgroundColor: "#ED0132",
        fontFamily: "IBM Plex Sans, sans-serif",
        fontSize: 25,
        textTransform: 'none',
    },
    buttonRight: {
        minWidth: 220,
        height: 60,
        filter: "drop-shadow(0px 4px 4px #004636)",
        backgroundColor: "white",
        borderRadius: 10,
        fontFamily: "IBM Plex Sans, sans-serif",
        fontSize: 21,
        textTransform: 'none',
    }
}