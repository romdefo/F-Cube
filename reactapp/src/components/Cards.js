import React, { useEffect } from 'react';
// import {Typography, Button, CardMedia, CardContent, CardActions, Card, Grid} from '@mui/material';
 import { Button, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

// import { Card } from 'antd';
// const { Meta } = Card;

export default function Cards(props) {
    return( 
        // <Card
        //     hoverable
        //     style={{ width: 240 }}
        //     cover={<img alt="example" src={props.img} />}
        // >
        //     <Meta title={props.title} description={props.content} alt={props.imgDesc} />
        // </Card>
            <Card className="card" key={props.key}>
                <CardImg
                    src={props.img}
                    alt={props.imgDesc}
                    top
                    width="100%"
                />
                
                <CardBody 
                    sx={{
                    bgcolor:"#003D55",
                    color:"#FFF",
                    //flexGrow: 1
                }}>
                    <CardTitle>
                        {props.title}
                    </CardTitle>
                    <CardText >
                        {props.content}
                    </CardText>
                </CardBody>
                <Button size="small">{props.button}</Button>
            </Card>
    
    )
    
}


