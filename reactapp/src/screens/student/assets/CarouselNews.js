import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid} from '@mui/material'


const CarouselNews = () => {

  return (
    <Grid container xs={12} style={myStyle.carouselNews} >
   
     <Grid item xs={12} md={6} >
    <Carousel  controls={false}  >
   

        <Carousel.Item >
            <img
            className=" d-block mx-auto w-100"
            src='/student/imgs/tkwu12.jpg'
            alt="First slide"
            style={{height:'500px'}}
            xs={5}/>
            <Carousel.Caption style ={myStyle.carouselText}>
            <h3>Saison 2022-2023 : Inscriptions !</h3>
            <p>Ouverture des inscriptions pour le Taekwondo.</p>
            </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item >
            
            <img
            className="img-fluid d-block mx-auto w-100 "
            src='/student/imgs/2017-sortie-asterix.jpg'
            alt="First slide"
            style={{height:'500px'}}
            />
            
                <Carousel.Caption style ={myStyle.carouselText} >
                    
                <h3>Sortie au Parc Asterix</h3>
                <p>Onze jeunes de l'association EGDO ont participés à la sortie au Parc Astrerix.</p>
              
                </Carousel.Caption>
            
        </Carousel.Item>

</Carousel>
</Grid>
</Grid>
  )
}

export default CarouselNews

const myStyle = {
  carouselNews: {
display:'flex',
justifyContent:'center',
height:'300px'


},
carouselText: {
 backgroundColor:'rgb(0,0,0,0.8)',
 alignSelf:'center'
},

}
