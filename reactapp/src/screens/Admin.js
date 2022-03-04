import React from 'react';

// Récupérer le token de l'admin
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { Grid } from '@mui/material';
import Navbar from ".//../components/Navbar";
import AdminButton from ".//../components/AdminButton";
import EventIcon from '@mui/icons-material/Event';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import '../stylesheets/App.css'
import '../stylesheets/Buttons.css'
import '../stylesheets/Home.css'

function Admin(props) {
    if (props.admin.token === "") {
        return (<Redirect to='/' />);
    } else {
        return (
            <>
                <Navbar nav={["Accueil", "Qui sommes-nous ?", "Blog", "Contact"]} />
                <div style={mystyle.all}>
                    <div style={mystyle.opacityBlock}>
                        <h1 style={{ fontSize: 32 }}>Bienvenue {props.admin.firstName}... Que souhaitez-vous faire ?</h1>
                        <Grid container style={{ display: "flex", width: "100%", height: "100%" }}>
                            <Grid item xs={12} md={4} className="home-panel">
                                <h2><LibraryBooksIcon style={{ fontSize: 50 }} /> Blog</h2>
                                <AdminButton title="Ajouter un article" />
                                <AdminButton title="??" />
                                <AdminButton title="Supprimer un article" />
                            </Grid>
                            <Grid item xs={12} md={4} className="home-panel">
                                <h2><EventIcon style={{ fontSize: 50 }} /> Agenda</h2>
                                <AdminButton title="Ajouter un événement" />
                                <AdminButton title="Modifier un événement" />
                                <AdminButton title="Supprimer un événement" />
                            </Grid>
                            <Grid item xs={12} md={4} className="home-panel">
                                <h2><MoreHorizIcon style={{ fontSize: 50 }} /> Autre</h2>
                                <AdminButton title="Ajouter un administrateur" />
                                <AdminButton title="??" />
                                <AdminButton title="??" />
                            </Grid>
                        </Grid>
                    </div>
                </div>
            </>
        )
    }
}

const mystyle = {
    all: {
        height: "92vh",
        backgroundImage: `url("../images/admin-banner.jpg")`,
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
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    }
}

function mapStateToProps(state) {
    return { admin: state.admin }
}

export default connect(mapStateToProps, null)(Admin); 