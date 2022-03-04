import React, { useEffect } from 'react';
import {Typography, Button, CardMedia, CardContent, CardActions, Card} from '@mui/material';
//  import { Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

export default function Cards(props) {

    return(
        <Card className='card' id={props.cardID}>
            <CardMedia
                component="img"
                height="140"
                image={props.img}
                alt={props.imgDesc}
            />
            
            <CardContent>
                <Typography gutterBottom variant="h5" color="#FFF" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="#FFF">
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" color="primary">{props.button}</Button>
            </CardActions>
        </Card>
    )
    
}
