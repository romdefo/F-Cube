import React from 'react';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Action from './Action';
import Histoire from './Histoire';
import Team from './Team';


import '../../stylesheets/App.css'
import '../../stylesheets/Separator.css'
import '../../stylesheets/Buttons.css'
import './Discover.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col} from 'reactstrap';

// const theme = createTheme();

export default function Discover() {

    const nav = ["Accueil", "Qui-sommes-nous?","Histoire", "Equipe", "Blog", "Contact"];
    return (
    
        <>     

            {/* Navbar */}
            <Navbar nav={nav}/> 
            
            {/* Section Actions */}
            <Container className='section'>
                <Row justifyContent="center" alignItems="center" mt={5} className='test3'>
                    {/* <Grid item  mb={5} sx={{color:'#003D55'}}> */}
                        <h1>Nos actions</h1> 
                    {/* </Grid> */}
                </Row>
            

                <Row  justifyContent="center" alignItems="center" spacing={8} className='test2'>
                    <Action/>
                </Row>
                    
                <Row container  justifyContent="center" alignItems="center" mt={5} spacing={4}>
                        <Col >
                            <h2>
                                Pour en savoir plus, visiter notre 
                            </h2>
                        </Col>
                        <Col>
                            <button className='act-button'> Blog </button>  
                        </Col>
                </Row>

            </Container>



            <div className='separator'></div>

            {/* Section Histoire*/}
            <Container >

                <Row container>
                    <Histoire/>
                </Row>
            </Container>

            <div className='separator'></div>

            {/* Section Equipe */}
            <Container  id={nav[2]} >

                <Row  mb={5} justifyContent="center">
                    <Col>
                    <h1 className='title-section'>Notre équipe</h1> 
                    </Col>
                </Row>

                <Row>
                    <Team/>
                </Row>
            </Container>

             {/* Footer */}
            {/* <Footer/>    */}

        </>


           

     ); }