import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import { CardActionArea, Grid } from '@mui/material';

// Unique Key
import uuid from 'react-uuid'


export default function FootballCard({img,category,terrain,adress,coachs }) {

  const catNames= category.map ((el,i )=>`${el.cat}`)
  
 
 

  const hoursContainer= category.map((el,i )=> {
   const trainingDays= el.trainingDays.map((d,i)=> {
      return ( <div key={uuid()} style={{textAlign:'center',marginBottom:'auto'}}> 
      <h6 style={{fontWeight:'bold'}}>{d.day}</h6>
      <h6>{d.hour}</h6></div>)
    })

    return( 
      <div  style={myStyle.divHours} key={uuid()} >
        <h4 style={{fontWeight:'bold',marginBottom:'auto'}}>{el.cat}</h4>
        {trainingDays}
     </div>
  )})

  const coach = coachs.map(el=> {
      return <Avatar
      alt={el}
      src={`./student/imgs/${el}.jpg`}
      sx={{ width: 56, height: 56 }}
      key={uuid()}/>
  })
  
  
  return (
  <Grid item xs={12} md={4} style={{margin:'1rem'}}>
    <Card  >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {`./student/imgs/${img}.jpg`}
          alt="green iguana"
        />
        <CardContent>


          <Typography style = {myStyle.categoryName} gutterBottom variant="h5" component="div">
            {catNames.join(' / ')}
          </Typography>

          <Typography variant="body" style={{fontWeight:'bold'}} display='flex' justifyContent='center'>
            Adresse
          </Typography>
          <Typography variant="body"  display='flex' justifyContent='center'>
            {terrain}
          </Typography>

          <Typography variant="body"  display='flex' justifyContent='center'>
            {adress}
          </Typography>
      
          <Typography variant="body2" display='flex' justifyContent='center'>
          {hoursContainer}
          </Typography>
          <Typography variant="body2" style={{fontWeight:'bold'}} display='flex' flexDirection='column' alignItems='center'>
            Entraineurs
          <Typography variant="body2" display='flex' justifyContent='center'>
          {coach}
          </Typography>
          </Typography>
          
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  
  );
}

const myStyle = {
  divHours:{
      display:'flex',
      flexDirection:'column',
      justifyContent:'center',
      alignItems:'center',
      border: '2px solid black',
      padding:'0.2rem 0.3rem',
      margin: '0.5rem'
  },
  categoryName: {
    position:'absolute',
    top:0,
    left:0,
    backgroundColor:'red',
    color:'white',
    padding:'0 1rem'
  }
}