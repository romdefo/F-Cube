import React from 'react';
import {Typography, Button, CardMedia, CardContent, CardActions, Card} from '@mui/material';


export default function Cards(props) {
    return(
        <Card sx={{ maxWidth: 345, width: "80%"}} id={props.cardID}>
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


