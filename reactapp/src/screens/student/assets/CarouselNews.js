import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from '@mui/material'


const CarouselNews = () => {
 const myStyle = {
   carouselNews: {
 minHeight:'100vh',
 display:'flex',
 justifyContent:'center',
 alignItems:'center'
 },
 carouselText: {
  backgroundColor:'rgb(0,0,0,0.8)',
  alignSelf:'center'

 }
 }
  return (
    <Grid container xs={12} style={myStyle.carouselNews}>
   

     <Grid item xs={12} md={8} >
    <Carousel  controls={false}  >
       

        <Carousel.Item >
            <img
            className="d-block mx-auto w-100"
            src='/student/imgs/tkwu12.jpg'
            alt="First slide"
            style={{maxHeight:'500px'}}/>
            <Carousel.Caption style ={myStyle.carouselText}>
            <h3>Saison 2022-2023 : Inscriptions !</h3>
            <p>Ouverture des inscriptions pour le Taekwondo.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
            
            <img
            className="d-block mx-auto w-100"
            src='/student/imgs/2017-sortie-asterix.jpg'
            alt="First slide"
            style={{maxHeight:'500px'}}
            />
            
                <Carousel.Caption style ={myStyle.carouselText} >
                    
                <h3>Sortie au Parc Asterix</h3>
                <p>Onze jeunes de l'association EGDO ont participé à l'atelier <br/> "Tous en campagne contre les discriminations".</p>
              
                </Carousel.Caption>
            
        </Carousel.Item>

</Carousel>
</Grid>
</Grid>
  )
}

export default CarouselNews