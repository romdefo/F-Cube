import React from 'react'
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const CarouselNews = () => {
  return (
    <Carousel  controls={false} style={{maxWidth:'100vw'}} >
        
        <Carousel.Item>
            
            <img
            className="d-block mx-auto"
            src='./student/imgs/2017-sortie-asterix.jpg'
            alt="First slide"
            />
            
                <Carousel.Caption >
                    
                <h3>Sortie au Parc Asterix</h3>
                <p>Onze jeunes de l'association EGDO ont participé à l'atelier <br/> "Tous en campagne contre les discriminations".</p>
              
                </Carousel.Caption>
            
        </Carousel.Item>

        <Carousel.Item>
            <img
            className="d-block mx-auto "
            src='./student/imgs/2017-sortie-asterix.jpg'
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

        

</Carousel>
  )
}

export default CarouselNews