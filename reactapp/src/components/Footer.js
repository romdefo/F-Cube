import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

// Token à stocker dans le store une fois que l'admin s'est connecté
import { connect } from 'react-redux';

import { Grid, TextField, Modal, Box } from '@mui/material';

import "../stylesheets/Buttons.css"
import "../stylesheets/MapAndFooter.css"
import "../stylesheets/Modal.css"

function Footer(props) {

    // Gérer l'apparition des modaux "Nous contacter" et "Espace Admin"
    const [contactModalOpen, setContactModalOpen] = useState(false);
    const [adminModalOpen, setAdminModalOpen] = useState(false);

    // Récupérer tous les champs de saisie
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [object, setObject] = useState("");
    const [content, setContent] = useState("");
    const [password, setPassword] = useState("");

    // Gérer le login de l'administrateur
    const [loginSuccessful, setLoginSuccessful] = useState(false);
    const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);

    const closeContactModal = async () => {
        const newMessage = {
            date: new Date(),
            name: name,
            email: email,
            country: country,
            object: object,
            content: content
        };
        var res = await fetch("/message/add-message", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newMessage),
        });
        res = await res.json();
        console.log(res);

        setName(""); setEmail(""); setObject(""); setContent(""); setContactModalOpen(false);
    };

    const handleLogin = async () => {
        if (!props.admin.token) {
            setAdminModalOpen(true)
        } else {
            setAlreadyLoggedIn(true);
        }
    };

    const closeAdminModal = async () => {
        const adminAttempt = { email: email, password: password };
        var res = await fetch("/admin/sign-in", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(adminAttempt),
        });
        res = await res.json();

        if (res.result) {
            console.log(res);
            props.onPopulate(res.token, res.admin.firstName);
            setLoginSuccessful(true);
        };
        setAdminModalOpen(false); setEmail(""); setPassword("");
    };

    console.log(props.admin.token);

    if (loginSuccessful || alreadyLoggedIn) {
        return (<Redirect to='/admin' />);
    } else {
        return (
            <Grid container className="lowest-footer">

                {/* Panel tout à gauche avec le logo et les credentials */}
                <Grid item xs={12} md={4} className="footer-panel">
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "flex-start" }}>
                        <div>
                            <img src="../images/F3-logo.png" alt="logo de la F-Cube" className="F3-logo-footer" />
                        </div>
                        <div className="F3-credentials">
                            <p style={{ fontWeight: 600 }}>Fédération Francophone du Futur</p>
                            <p>O.N.G. loi 1901</p>
                            <a href="mailto:contact@fcube.org" className="email">contact@fcube.org</a>
                        </div>
                    </div>
                </Grid>

                {/* Panel du milieu avec "Nous contacter" / "Nous suivre" */}
                <Grid item xs={12} md={4} className="footer-panel lowest-footer-panel-middle">
                    <div className="lowest-footer-panel-content">
                        <p onClick={() => setContactModalOpen(true)} className="contact-link">NOUS CONTACTER</p>

                        {/* Modal pour "Nous contacter", qui redirige vers une boîte mail */}
                        <Modal
                            open={contactModalOpen}
                            onClose={closeContactModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className="custom-modal">
                                <h4>Veuillez remplir le formulaire ci-dessous.</h4>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                                    <div style={{ display: "flex", flexWrap: "wrap" }}>
                                        <div className="form-input">
                                            <TextField id="outlined-basic" label="Votre nom" variant="outlined" className="input-field" onChange={(e) => setName(e.target.value)} value={name} />
                                            <TextField id="outlined-basic" label="Votre email" variant="outlined" className="input-field" onChange={(e) => setEmail(e.target.value)} value={email} />
                                            <TextField id="outlined-basic" label="Votre/vos pays" variant="outlined" className="input-field" onChange={(e) => setCountry(e.target.value)} value={country} />
                                            <TextField id="outlined-basic" label="Objet de votre message" variant="outlined" className="input-field" onChange={(e) => setObject(e.target.value)} value={object} />
                                            <TextField id="outlined-basic" label="Contenu" variant="outlined" multiline rows={9} className="input-field" onChange={(e) => setContent(e.target.value)} value={content} />
                                        </div>
                                    </div>
                                    <button className="button-input" onClick={closeContactModal}>Envoyer</button>
                                </div>
                            </Box>
                        </Modal>

                        {/* Partie "Nous suivre" */}
                        <p style={{ fontWeight: 300, textAlign: "center" }}>ou</p>
                        <p style={{ fontWeight: 500, textAlign: "center", paddingBottom: 10 }}>NOUS SUIVRE</p>

                        <div style={{ display: "flex", justifyContent: "center" }}>
                            <a href="https://www.linkedin.com/company/f%C3%A9d%C3%A9ration-francophone-du-futur-f3/" target="_blank" rel="noreferrer" style={{ marginLeft: 5, marginRight: 5, marginTop: 7 }}><img src="./images/linkedin.png" style={{ height: "30px" }} /></a>
                            {/* <a href="https://www.facebook.com/F-Cube" target="_blank" rel="noreferrer" style={{ marginLeft: 5, marginRight: 5, marginTop: 7 }}><img src="./images/fb.png" style={{ height: "30px" }} /></a> */}
                            <a href="https://www.twitter.com/F-Cube" target="_blank" rel="noreferrer" style={{ marginLeft: 5, marginRight: 5, marginTop: 7 }}><img src="./images/twitter.png" style={{ height: "30px" }} /></a>
                            {/* <a href="https://www.instagram.com/F-Cube" target="_blank" rel="noreferrer" style={{ marginLeft: 5, marginRight: 5, marginTop: 7 }}><img src="./images/ig.png" style={{ height: "30px" }} /></a> */}
                        </div>

                    </div>
                </Grid>

                {/* Dernier panel du footer avec divers liens utiles (pas encore actifs) */}
                <Grid item xs={12} md={4} className="footer-panel">
                    <div className="lowest-footer-panel-content">
                        <a className="email" href="/files/deck" download>DECK DE PRESENTATION</a>
                        <p onClick={() => handleLogin()} className="contact-link">ESPACE ADMIN</p>

                        {/* Modal pour se connecter, qui redirige vers la page Admin */}
                        <Modal
                            open={adminModalOpen}
                            onClose={closeAdminModal}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box className="custom-modal">
                                <h4>Veuillez vous connecter pour continuer.</h4>
                                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                                    <div className="form-input">
                                        <TextField id="outlined-basic" label="Votre email" variant="outlined" className="input-field" onChange={(e) => setEmail(e.target.value)} value={email} />
                                        <TextField id="outlined-basic" label="Votre mot de passe" variant="outlined" type="password" className="input-field" onChange={(e) => setPassword(e.target.value)} value={password} />
                                    </div>
                                    <button className="button-input" onClick={closeAdminModal}>Accéder à l'espace admin</button>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return { admin: state.admin }
}

function mapDispatchToProps(dispatch) {
    return {
        onPopulate: function (token, firstName) {
            dispatch({ type: 'populate', token, firstName })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);