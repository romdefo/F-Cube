import React from 'react';
import { Typography, Button, CardMedia, CardContent, CardActions, Card, Grid } from '@mui/material';
import '../stylesheets/Card.css';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function CardItem(props) {

    return (
        <Card id={props.cardID} className="member-card">
            <img className="avatar" src={props.img} alt={props.name}>
            </img>
            <CardContent className='background-img' style={styles.container}>
                <Typography variant="h5" component="div" className="member-name">
                    {props.name}
                </Typography>
                <Typography>
                    {props.role}
                </Typography>
                <CardActions>
                    <a href={props.linkedIn} target="_blank"><img src="./images/linkedin.png" style={{ height: "30px", marginBottom: "15px" }}></img></a>
                </CardActions>
            </CardContent>
        </Card>
    )
}
const styles = {
    container: {
        background: `radial-gradient(circle, rgba(250,250,250,0.7) 0%, rgba(250,250,250,0.9) 81%)`,
    }
};