import React, { useState, useEffect } from 'react';
import { Modal, Box, TextField, FormControl, InputLabel, Select, MenuItem, FormHelperText } from '@mui/material';

export default function AdminButton(props) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // Tous les useState pour récupérer les champs de saisie
    const [title, setTitle] = useState("");
    const [category, setCategory] = useState("");
    const [author, setAuthor] = useState("");
    const [img, setImg] = useState("");
    const [content, setContent] = useState("")

    // Récupérer tous les articles de la BDD
    const [allArticles, setAllArticles] = useState([]);

    // Récupérer le titre de l'article à supprimer
    const [articleToDelete, setArticleToDelete] = useState("");

    useEffect(() => {
        async function getArticles() {
            var res = await fetch("/article/see-articles")
            res = await res.json();
            setAllArticles(res.articles);
        }
        getArticles();
    }, []);

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

        setTitle("");
        setCategory("");
        setAuthor("");
        setImg("");
        setContent("");
    };

    async function deleteArticle(title) {
        await fetch(`/article/remove-article/${title}`, {
            method: 'DELETE'
        });
        setArticleToDelete("");
    }

    let inputField;
    switch (props.title) {

        case "Ajouter un article":
            inputField = (
                <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center" }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div style={{ width: "50%" }}>
                            <TextField id="outlined-basic" label="Titre de l'article" variant="outlined" style={mystyle.textField} onChange={(e) => setTitle(e.target.value)} value={title} />
                            <TextField id="outlined-basic" label="Catégorie" variant="outlined" style={mystyle.textField} onChange={(e) => setCategory(e.target.value)} value={category} />
                            <TextField id="outlined-basic" label="Nom de l'auteur" variant="outlined" style={mystyle.textField} onChange={(e) => setAuthor(e.target.value)} value={author} />
                            <TextField id="outlined-basic" label="Importer image..." variant="outlined" style={mystyle.textField} onChange={(e) => setImg(e.target.value)} value={img} />
                        </div>
                        <div style={{ width: "50%", minHeight: "100%" }}>
                            <TextField id="outlined-basic" label="Contenu" variant="outlined" multiline rows={9} style={mystyle.textField} onChange={(e) => setContent(e.target.value)} value={content} />
                        </div>
                    </div>
                    <button onClick={() => addArticle(title, img, content, author, category)} className="button-input">{props.title}</button>
                </div>)
            break;

        case "Supprimer un article":
            inputField = (
                <div>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                        <InputLabel id="demo-simple-select-helper-label">Article à supprimer</InputLabel>
                        <Select
                            labelId="demo-simple-select-helper-label"
                            id="demo-simple-select-helper"
                            value={articleToDelete}
                            label="Article à supprimer"
                            onChange={(e) => { setArticleToDelete(e.target.value) }}
                        >
                            <MenuItem value="">
                                <em>Aucun article sélectionné</em>
                            </MenuItem>
                            {[...allArticles].map((article, i) => {
                                return (<MenuItem value={article.title}>{article.title}</MenuItem>)
                            })}
                        </Select>
                        <FormHelperText>Veuillez sélectionner le titre de l'article à supprimer.</FormHelperText>
                    </FormControl>
                    <button onClick={() => deleteArticle(articleToDelete)} className="button-input">{props.title}</button>
                </div>)
            break;
        default:
            inputField = (<TextField id="outlined-basic" label="Défaut" variant="outlined" style={mystyle.textField} />)
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
                <Box sx={mystyle.modal}>
                    <h3>Vous souhaitez {props.title.toLowerCase()}...</h3>
                    {inputField}
                </Box>
            </Modal>
        </>
    )
}

const mystyle = {
    modal: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        minHeight: "50%",
        maxHeight: "90%",
        minWidth: "50%",
        maxWidth: "90%",
        bgcolor: 'white',
        border: '2px solid #000',
        borderRadius: 5,
        p: 15,
        boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.4)"
    },
    textField: {
        borderRadius: 5,
        marginTop: 5,
        boxShadow: "5px 4px 4px rgba(0, 0, 0, 0.25)"
    }
};