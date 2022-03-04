import React from 'react';
import { Grid } from '@mui/material';
// import { Link } from 'react-router-dom';
import Navbar from ".//../components/Navbar";
import AdminButton from ".//../components/AdminButton";
import EventIcon from '@mui/icons-material/Event';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

import '../stylesheets/App.css'
import '../stylesheets/Buttons.css'

export default function Admin() {
    return (
        <>
            <Navbar nav={["Accueil", "Qui sommes-nous ?", "Blog", "Contact"]} />
            <Grid container style={mystyle.all}>
                <Grid style={mystyle.opacityBlock}>
                    <h1 style={{ fontSize: 40 }}>Bienvenue username... Que souhaitez-vous faire ?</h1>
                    <div style={{ display: "flex", width: "100%", height: "100%" }}>
                        <Grid item xs={12} md={4} style={mystyle.panel}>
                            <h2><LibraryBooksIcon style={{ fontSize: 50 }} /> Blog</h2>
                            <AdminButton title="Ajouter un article" input1="Titre de l'article" input2="Catégorie de l'article" input3="Ecrivez ici le contenu de l'article." input4="Nom de l'auteur de l'article" input5="Catégorie" isNews={false} />
                            <AdminButton title="??" />
                            <AdminButton title="Supprimer un article" input1="Titre de l'article" input2="Date de publication" />
                        </Grid>
                        <Grid item xs={12} md={4} style={mystyle.panel}>
                            <h2><EventIcon style={{ fontSize: 50 }} /> Agenda</h2>
                            <AdminButton title="Ajouter un événement" />
                            <AdminButton title="??" />
                            <AdminButton title="Supprimer un événement" />
                        </Grid>
                        <Grid item xs={12} md={4} style={mystyle.panel}>
                            <h2><MoreHorizIcon style={{ fontSize: 50 }} /> Autre</h2>
                            <AdminButton title="Ajouter un administrateur" />
                            <AdminButton title="??" />
                            <AdminButton title="??" />
                        </Grid>
                    </div>
                </Grid>
            </Grid>
        </>
    )
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
    },
    panel: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
        height: "100%"
    }
}