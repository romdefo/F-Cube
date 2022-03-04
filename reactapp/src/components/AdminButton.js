import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, FormControl, InputLabel, Select, MenuItem, Checkbox } from '@mui/material';
import '../stylesheets/Modal.css';

export default function AdminButton(props) {
    let eventTypes = ["Atelier C.V.", "Coaching à l'embauche", "Sortie ciné", "Sortie théâtre", "Evénement sportif", "Autre"];

    const [open, setOpen] = useState(false);
    const [submit, setSubmit] = useState(false);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Récupérer tous les champs de saisie
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");
    const [content, setContent] = useState("");
    const [date, setDate] = useState("");
    const [address, setAddress] = useState("");
    const [description, setDescription] = useState("");
    const [type, setType] = useState("");
    const [maxNumberOfPeople, setMaxNumberOfPeople] = useState(30)
    const [articleToDelete, setArticleToDelete] = useState("");
    const [lastName, setLastName] = useState("");
    const [firstName, setFirstName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [telephone, setTelephone] = useState("");

    // Récupérer les éléments des collections de la BDD
    const [allArticles, setAllArticles] = useState([]);
    const [allEvents, setAllEvents] = useState([]);
    const [allAdmins, setAllAdmins] = useState([]);

    useEffect(() => {
        async function getArticles() {
            var res = await fetch("/article/see-articles")
            res = await res.json();
            setAllArticles(res.articles);
        }
        getArticles();
        async function getEvents() {
            var res = await fetch("/event/see-events")
            res = await res.json();
            setAllEvents(res.events);
        }
        getEvents();
        // async function getAdmins() {
        //     var res = await fetch("/admin/see-admins")
        //     res = await res.json();
        //     setAllAdmins(res.admins);
        // }
        // getAdmins();
    }, [submit, open]);

    // Et maintenant, toutes les fonctions dynamisant les formulaires

    async function addArticle(title, img, content, author, category) {
        const newArticle = {
            title: title,
            img: img,
            content: content,
            author: author,
            category: category,
            date: new Date(),
            isNews: false
        };
        var res = await fetch("/article/add-article", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newArticle),
        });
        res = await res.json();
        console.log(res);

        setTitle(""); setCategory(""); setAuthor(""); setImg(""); setContent(""); setSubmit(!submit);
    };

    async function deleteArticle(title) {
        await fetch(`/article/remove-article/${title}`, {
            method: 'DELETE'
        });
        setArticleToDelete("");
        setSubmit(!submit);
    }

    async function addEvent(date, type, title, address, maxNumberOfPeople, description) {
        const newEvent = {
            date: date,
            type: type,
            title: title,
            address: address,
            maxNumberOfPeople: maxNumberOfPeople,
            description: description
        };
        var res = await fetch("/event/add-event", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newEvent),
        });
        res = await res.json();
        console.log(res);

        setDate(""); setType(""); setTitle(""); setAddress(""); setMaxNumberOfPeople(30); setDescription(""); setSubmit(!submit);
    };

    async function deleteEvent(title, date) {
        let event = { title: title, date: date }
        var res = await fetch("/event/remove-event", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(event),
        });
        res = await res.json();
        console.log(res);

        setDate(""); setType(""); setTitle(""); setSubmit(!submit);
    }

    async function adminSignUp(lastName, firstName, email, password, telephone) {
        const newAdmin = {
            lastName: lastName,
            firstName: firstName,
            email: email,
            password: password,
            telephone: telephone
        };
        var res = await fetch("/admin/sign-up", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newAdmin),
        });
        res = await res.json();
        console.log(res);

        setLastName(""); setFirstName(""); setEmail(""); setPassword(""); setTelephone(""); setSubmit(!submit);
    }

    // En fonction du bouton sur lequel on clique, un modal différent va apparaître.
    let modalShown;

    let formToSelectEvent = (<><FormControl className="select-field">
        <InputLabel id="demo-simple-select-helper-label">Type d'événement</InputLabel>
        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={type} label="Type d'événement à modifier" onChange={(e) => setType(e.target.value)}>
            <MenuItem value=""><em>Aucun type sélectionné</em></MenuItem>
            {eventTypes.map((type, i) => { return (<MenuItem value={type}>{type}</MenuItem>) })}
        </Select>
    </FormControl>
        <FormControl className="select-field">
            <InputLabel id="demo-simple-select-helper-label">Nom de l'événement</InputLabel>
            <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={title} label="Nom de l'événement à modifier" onChange={(e) => setTitle(e.target.value)}>
                <MenuItem value=""><em>Aucun nom sélectionné</em></MenuItem>
                {[...allEvents].filter(event => event.type == type).map((event, i) => { return (<MenuItem value={event.title}>{event.title}</MenuItem>) })}
            </Select>
        </FormControl>
        <FormControl className="select-field">
            <InputLabel id="demo-simple-select-helper-label">Date de l'événement</InputLabel>
            <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={date} label="Date de l'événement" onChange={(e) => setDate(e.target.value)}>
                <MenuItem value=""><em>Aucune date sélectionné</em></MenuItem>
                {[...allEvents].filter(event => event.type == type && event.title == title).map((event, i) => { return (<MenuItem value={event.date}>{event.date}</MenuItem>) })}
            </Select>
        </FormControl></>)

    switch (props.title) {
        case "Ajouter un article":
            modalShown = (
                <div className="modal-container">
                    <div className="form-input">
                        <TextField id="outlined-basic" label="Titre de l'article" variant="outlined" className="input-field" onChange={(e) => setTitle(e.target.value)} value={title} />
                        <TextField id="outlined-basic" label="Catégorie" variant="outlined" className="input-field" onChange={(e) => setCategory(e.target.value)} value={category} />
                        <TextField id="outlined-basic" label="Nom de l'auteur" variant="outlined" className="input-field" onChange={(e) => setAuthor(e.target.value)} value={author} />
                        <TextField id="outlined-basic" label="Contenu" variant="outlined" multiline rows={9} className="input-field" onChange={(e) => setContent(e.target.value)} value={content} />
                    </div>
                    <input type="file" style={{ marginTop: "20px" }} onChange={(e) => setImg(e.target.value)} value={img} />
                    <button onClick={() => addArticle(title, img, content, author, category)} className="button-input">{props.title}</button>
                </div>)
            break;

        case "Supprimer un article":
            modalShown = (
                <div className="modal-container">
                    <FormControl className="select-field">
                        <InputLabel id="demo-simple-select-helper-label">Article à supprimer</InputLabel>
                        <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={articleToDelete} label="Article à supprimer" onChange={(e) => { setArticleToDelete(e.target.value) }}>
                            <MenuItem value=""><em>Aucun article sélectionné</em></MenuItem>
                            {[...allArticles].map((article, i) => { return (<MenuItem value={article.title}>{article.title}</MenuItem>) })}
                        </Select>
                    </FormControl>
                    <button onClick={() => deleteArticle(articleToDelete)} className="button-input">{props.title}</button>
                </div>)
            break;

        case "Ajouter un événement":
            modalShown = (
                <div className="modal-container">
                    <div className="form-input">
                        <TextField id="datetime-local" label="Date de l'événement" type="datetime-local" onChange={(e) => setDate(e.target.value)} value={date} className="input-field date-field" InputLabelProps={{ shrink: true }} />
                        <FormControl className="select-field">
                            <InputLabel id="demo-simple-select-helper-label">Type d'événement</InputLabel>
                            <Select labelId="demo-simple-select-helper-label" id="demo-simple-select-helper" value={type} label="Type d'événement" onChange={(e) => setType(e.target.value)}>
                                <MenuItem value=""><em>Aucun type sélectionné</em></MenuItem>
                                {eventTypes.map((type, i) => { return (<MenuItem value={type}>{type}</MenuItem>) })}
                            </Select>
                        </FormControl>
                        <TextField id="outlined-basic" label="Nom de l'événement" variant="outlined" className="input-field" onChange={(e) => setTitle(e.target.value)} value={title} />
                        <TextField id="outlined-basic" label="Lieu de l'événement" variant="outlined" className="input-field" onChange={(e) => setAddress(e.target.value)} value={address} />
                        <TextField id="outlined-basic" label="Nombre maximal de participants" variant="outlined" type="number" className="input-field" onChange={(e) => setMaxNumberOfPeople(e.target.value)} value={maxNumberOfPeople} />
                        <TextField id="outlined-basic" label="Description" variant="outlined" className="input-field" onChange={(e) => setDescription(e.target.value)} value={description} multiline rows={5} />
                    </div>
                    <button onClick={() => addEvent(date, type, title, address, maxNumberOfPeople, description)} className="button-input">{props.title}</button>
                </div>)
            break;

        case "Modifier un événement":
            modalShown = (
                <div className="modal-container">
                    <div className="form-input">
                        <h6>Quel événement souhaitez-vous modifer ?</h6>
                        {formToSelectEvent}
                        <h6>Dans cet événement, que souhaitez-vous changer ?</h6>

                    </div>
                    <button onClick={() => deleteEvent(title, date)} className="button-input">{props.title}</button>
                </div>)
            break;

        case "Supprimer un événement":
            modalShown = (
                <div className="modal-container">
                    <div className="form-input">
                        {formToSelectEvent}
                    </div>
                    <button onClick={() => deleteEvent(title, date)} className="button-input">{props.title}</button>
                </div>)
            break;

        case "Ajouter un administrateur":
            modalShown = (
                <div className="modal-container">
                    <div className="form-input">
                        <TextField id="outlined-basic" label="Nom" variant="outlined" className="input-field" onChange={(e) => setLastName(e.target.value)} value={lastName} />
                        <TextField id="outlined-basic" label="Prénom" variant="outlined" className="input-field" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" className="input-field" onChange={(e) => setEmail(e.target.value)} value={email} />
                        <TextField id="outlined-basic" label="Mot de passe" variant="outlined" className="input-field" onChange={(e) => setPassword(e.target.value)} value={password} />
                        <TextField id="outlined-basic" label="N° de téléphone" variant="outlined" className="input-field" onChange={(e) => setTelephone(e.target.value)} value={telephone} />
                    </div>
                    <button onClick={() => adminSignUp(lastName, firstName, email, password, telephone)} className="button-input">{props.title}</button>
                </div>)
            break;
        default:
            modalShown = (<TextField id="outlined-basic" label="Défaut" variant="outlined" className="input-field" />)
    }

    return (
        <>
            <button className="button-admin" onClick={handleOpen}>{props.title}</button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className="custom-modal">
                    <h3>Vous souhaitez {props.title.toLowerCase()}...</h3>
                    {modalShown}
                </Box>
            </Modal>
        </>
    )
}