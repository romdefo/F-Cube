<<<<<<< HEAD
import React, { useEffect } from 'react';
import { Typography, Button, CardMedia, CardContent, CardActions, Card } from '@mui/material';

export default function Cards(props) {

    useEffect(() => {
        //console.log(props.img)
        console.log(2 + 2)

    }, [])
    return (
        <Card className='card' id={props.cardID}>
=======
import React from 'react';
import {Typography, Button, CardMedia, CardContent, CardActions, Card} from '@mui/material';

export default function Cards(props) {

    return(
        <Card id={props.cardID}>
>>>>>>> finalDiscover
            <CardMedia
                component="img"
                height="140"
                image={props.img}
                alt={props.imgDesc}
<<<<<<< HEAD
            />

            <CardContent>
                <Typography gutterBottom variant="h5" color="#FFF" component="div">
=======
            />          
            <CardContent className='background-img' style={styles.container}>
                <Typography variant="h5" component="div">
>>>>>>> finalDiscover
                    {props.title}
                </Typography>
                <Typography variant="body2">
                    {props.content}
                </Typography>
                <CardActions>
                <Button variant="contained" color="primary">{props.button}</Button>
            </CardActions>
            </CardContent>
        </Card>
    )

}
const styles = {
    container: {
        background: `radial-gradient(circle, rgba(250,250,250,0.7) 0%, rgba(250,250,250,0.9) 81%), url("/images/light-blue.jpg")`,
    }
};