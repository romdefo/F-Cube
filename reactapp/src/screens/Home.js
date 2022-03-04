import React from 'react';
import { Grid, Button } from '@mui/material';
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';

import '../stylesheets/App.css'
import '../stylesheets/Buttons.css'

export default function Home() {
    return (
        <>
            <Grid container style={mystyle.all}>
                <Grid style={mystyle.opacityBlock}>
                    <Grid item xs={12} md={6} style={mystyle.panel}>
                        <h1 style={{ fontSize: 55 }}>EGDO</h1>
                        {/* <img src="../images/egdo-logo.png" alt="logo de l'association" style={{ width: 180 }} /> */}
                        <h2 style={{ color: "white", width: "60%", fontWeight: "500" }}>L'association des Enfants de la Goutte d'or accompagne dans la durée les enfants, les jeunes mais aussi les adultes afin qu’ils prennnent leur place de citoyens.</h2>
                    </Grid>
                    <Grid item xs={12} md={6} style={mystyle.panel}>
                        <Link
                            href='/espace-eleve'
                            variant="body2"
                            underline='none'
                            >
                                <Button variant='contained' color='secondary'> Espace Elève</Button>
                           
                            </Link>
                        {/* <Link className="button-main" to="/espace-eleve">Espace Elève</Link>
                        <Link className='button-main' to="/espace-insertion">Espace Insertion</Link>
                        <Link className='button-main' to="/espace-benevole">Espace Bénévole</Link> */}
                    </Grid>
                </Grid>
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