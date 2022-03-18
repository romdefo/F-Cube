import React, { useState } from 'react';
import { Container, Grid, Modal, Box, TextField } from '@mui/material';

export default function QuoteSection() {
    // Gérer l'apparition des modaux "Nous contacter" et "Espace Admin"
    const [contactModalOpen, setContactModalOpen] = useState(false);

    // Récupérer tous les champs de saisie
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");
    const [object, setObject] = useState("");
    const [content, setContent] = useState("");

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

    return (
        <Container maxWidth="md" sx={{ paddingTop: "3rem" }}>
            <Grid container className="quote-block">
                <i className="quote" data-aos="fade-up" data-aos-duration="2000">Le meilleur moyen de prévoir le futur, c'est de le <b>créer</b>.</i>
                <p className="quote" data-aos="fade-up" data-aos-duration="2000">-- Peter Drucker</p>
                <p className="quote together" data-aos="fade-up" data-aos-duration="2000">Créons ce futur <b>ensemble</b>.</p>
                <a onClick={() => setContactModalOpen(true)} className="become-cuber">Je deviens cubeur</a>

                <Modal
                    open={contactModalOpen}
                    onClose={closeContactModal}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box className="custom-modal">
                        <h4>Ecrivez-nous un petit message !</h4>
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
                            <button className="button-input" onClick={closeContactModal}>Je souhaite devenir cubeur</button>
                        </div>
                    </Box>
                </Modal>
            </Grid>
        </Container>
    )
}