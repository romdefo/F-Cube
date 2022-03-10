import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link as LinkRouter, Redirect } from 'react-router-dom';
import {  Link } from '@mui/material'

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import '../../stylesheets/App.css'

import { Container, Grid, Typography } from '@mui/material';

function ArticleScreen(props) {

    console.log(props.article)

    if (props.article === "") {
        return (<Redirect to="/blog" />)
    } else {

        return (
            <>
                <Navbar nav={["Catégories", "Contact"]} />

                < div className='section'>
                    <div className='opacity' style={{ paddingBottom: 60 }}>
                        <Container maxWidth="sm" sx={{ pt: 2 }} >
                            <Grid container sx={{ display: 'flex', flexDirection: "column", justifyContent: 'center' }} pb={4}>
                                <Grid item xs={12} sx={{ marginBottom: "1.5rem" }}>
                                    <LinkRouter to="/blog" sx={{ justifyContent: "flex-sart" }}>
                                        <Link underline='none'>

                                        Revenir au blog
                                        </Link>
                                    </LinkRouter>
                                </Grid>
                                <Grid item xs={12} sx={{ marginBottom: "1.5rem" }}>
                                    <img src={`/images/articles/${props.article.title.replace(/\s|'/g, '-').replace(/é|è/g, 'e').replace(/à|â/g, "a")}.jpg`} alt={props.article.title} style={{ borderRadius: 30, maxWidth: "100%" }}>
                                    </img>
                                </Grid>
                                <Grid item xs={12} sx={{ marginBottom: "1.5rem" }}>
                                    <Typography sx={{ fontWeight: 700, fontSize: 25 }}>{props.article.title}</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography>{props.article.content}</Typography>
                                </Grid>
                            </Grid>
                        </Container>
                    </div>
                </div >
                <Footer />
            </>
        );
    }
}

function mapStateToProps(state) {
    return { article: state.article }
}

export default connect(mapStateToProps, null)(ArticleScreen);