import React from 'react';
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from ".//../components/Navbar";

import '../stylesheets/App.css';
import '../stylesheets/Buttons.css';
import '../stylesheets/Home.css';

export default function Home() {
    return (
        <>
            <Navbar nav={["Accueil", "Qui sommes-nous ?", "Blog", "Contact"]} />
            <Grid className="allHomePage">
                <Grid container className="home-opacity-block">
                    <Grid item xs={12} md={6} className="home-panel">
                        <div className="first-impression">
                            <p className="home-title">EGDO</p>
                            <p className="home-subtitle">depuis 1978</p>
                        </div>
                        <div className="quick-intro">
                            <h2 style={{ color: "white", fontWeight: "500" }}>L'association des Enfants de la Goutte d'or accompagne dans la durée les enfants, les jeunes mais aussi les adultes afin qu’ils prennnent leur place de citoyens.</h2>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className="home-panel">
                        <Link className="button-main" to="/espace-eleve">Espace Elève</Link>
                        <Link className='button-main' to="/espace-insertion">Espace Insertion</Link>
                        <Link className='button-main' to="/espace-benevole">Espace Bénévole</Link>
                    </Grid>
                </Grid>
                {/* <Link className='button-discover' to="/decouvrir-l-association">Découvrir l'association</Link> */}
            </Grid>
        </>
    )
}

