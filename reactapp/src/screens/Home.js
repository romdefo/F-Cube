import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from ".//../components/Navbar";

import '../stylesheets/App.css'
import '../stylesheets/Buttons.css'

export default function Home() {
    return (
        <>
            <Navbar nav={["Accueil", "Qui sommes-nous ?", "Blog", "Contact"]} />
            <Grid container style={mystyle.all}>
                <Grid style={mystyle.opacityBlock}>
                    <Grid item xs={12} md={6} style={mystyle.panel}>
                        <h1 style={{ fontSize: 55 }}>EGDO</h1>
                        {/* <img src="../images/egdo-logo.png" alt="logo de l'association" style={{ width: 180 }} /> */}
                        <h2 style={{ color: "white", width: "60%", fontWeight: "500" }}>L'association des Enfants de la Goutte d'or accompagne dans la durée les enfants, les jeunes mais aussi les adultes afin qu’ils prennnent leur place de citoyens.</h2>
                    </Grid>
                    <Grid item xs={12} md={6} style={mystyle.panel}>
                        <Link className="button-main" to="/espace-eleve">Espace Elève</Link>
                        <Link className='button-main' to="/espace-insertion">Espace Insertion</Link>
                        <Link className='button-main' to="/espace-benevole">Espace Bénévole</Link>
                    </Grid>
                </Grid>
                <Link className='button-discover' to="/decouvrir-l-association">Découvrir l'association</Link>
            </Grid>
        </>
    )
}

const mystyle = {
    all: {
        height: "75vh",
        backgroundImage: `url("../images/blue-pencils.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)",
        fontFamily: "IBM Plex Sans, sans-serif",
        color: "white",
        backgroundColor: "#98c2c0",
        textAlign: "center"
    },
    opacityBlock: {
        padding: 40,
        paddingBottom: 60,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    panel: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%"
    }
}