import React, { useEffect } from 'react';
import { Typography, Button, CardMedia, CardContent, CardActions, Card } from '@mui/material';

export default function Cards(props) {

    useEffect(() => {
        //console.log(props.img)
        console.log(2 + 2)

    }, [])
    return (
        <Card className='card' id={props.cardID}>
            <CardMedia
                component="img"
                height="140"
                image={props.img}
                alt={props.imgDesc}
            />

            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {props.content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">{props.button1}</Button>
                <Button size="small">{props.button2}</Button>
            </CardActions>
        </Card>
    )

}


