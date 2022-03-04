import React, {useEffect} from 'react';
import { Grid, Button, Box, Container, Typography } from '@mui/material';
// import { Link } from 'react-router-dom';
import Link from '@mui/material/Link';

<<<<<<< HEAD
import '../stylesheets/App.css'
import '../stylesheets/Buttons.css'
import '../screens/discover/Discover.css'

import AOS from "aos";
import "aos/dist/aos.css";
=======
import '../stylesheets/App.css';
import '../stylesheets/Buttons.css';
import '../stylesheets/Home.css';
>>>>>>> romain

export default function Home() {

    useEffect(() => {
    
    const aosAnime =  () => {
      AOS.init(
        {duration : 1000}
      );
      AOS.refresh();
    }

    aosAnime()
  }, [])
    return (
<<<<<<< HEAD
        <div className='home' style={mystyle.img}>
            <Box className='home' style={mystyle.opacity} sx={{display: {md:'flex', xs:'none'} }}>

            <Container maxWidth='md' sx={{display: 'flex', justifyContent:'center', alignItems:'center'}}>

                <Grid container xs={12} md={6} sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} spacing={4}>
                    <Grid item>
                        <Typography variant='h2' sx={{color:'#FFF'}}>
                            EGDO
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h4' sx={{color:'#FFF'}}>
                            L'association des Enfants de la Goutte d'or accompagne dans la durée les enfants, les jeunes mais aussi les adultes afin qu’ils prennnent leur place de citoyens.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container xs={12} md={6}  sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}} spacing={8}>
                    <Grid item data-aos="fade-left" data-aos-duration="1000">
                        <Link
                            href='/espace-eleve'
                            variant="body2"
                            underline='none'
                            >
                            <Button size='large' variant='contained' color='secondary' sx={{minWidth:'200px'}}> Espace Elève</Button>                        
                        </Link>
                    </Grid>
                    <Grid item data-aos="fade-left" data-aos-duration="2000">
                        <Link
                            href='/espace-insertion'
                            variant="body2"
                            underline='none'
                            >
                            <Button size='large' variant='contained' color='secondary' sx={{minWidth:'200px'}}> Espace Insertion</Button>                    
                        </Link>
                    </Grid>
                    <Grid item data-aos="fade-left" data-aos-duration="3000">
                        <Link
                            href='/espace-benevole'
                            variant="body2"
                            underline='none'
                            >
                            <Button size='large' variant='contained' color='secondary' sx={{minWidth:'200px'}}> Espace Bénévole</Button>                      
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            </Box>

            {/* Mobile */}
        <Box className='home' style={mystyle.opacity} sx={{display: {md:'none', xs:'flex'}, width:'100%'}}>

            <Container maxWidth='md' sx={{display: 'flex', justifyContent:'center', alignItems:'center', flexDirection: "column"}}>

                <Grid container xs={12} md={6} sx={{display: 'flex', flexDirection:'column', justifyContent:'center', alignItems:'center',minHeight:'100vh' }} spacing={4}>
                    <Grid item>
                        <Typography variant='h2' sx={{color:'#FFF'}}>
                            EGDO
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='h4' sx={{color:'#FFF'}}>
                            L'association des Enfants de la Goutte d'or accompagne dans la durée les enfants, les jeunes mais aussi les adultes afin qu’ils prennnent leur place de citoyens.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid 
                    container 
                    xs={12}
                    md={6} 
                    sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center' ,minHeight:'100vh'}}
                    spacing={8}>
                    <Grid item>
                        <Link
                            href='/espace-eleve'
                            variant="body2"
                            underline='none'
                            >
                            <Button size='large' variant='contained' color='secondary' sx={{minWidth:'200px'}}> Espace Elève</Button>                        
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            href='/espace-insertion'
                            variant="body2"
                            underline='none'
                            >
                            <Button size='large' variant='contained' color='secondary' sx={{minWidth:'200px'}}> Espace Insertion</Button>                    
                        </Link>
                    </Grid>
                    <Grid item>
                        <Link
                            href='/espace-benevole'
                            variant="body2"
                            underline='none'
                            >
                            <Button size='large' variant='contained' color='secondary' sx={{minWidth:'200px'}}> Espace Bénévole</Button>                      
                        </Link>
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </div>

=======
        <>
            <Navbar nav={["Accueil", "Qui sommes-nous ?", "Blog", "Contact"]} />
            <Grid className="allHomePage">
                <Grid container className="home-opacity-block">
                    <Grid item xs={12} md={6} className="home-panel">
                        <div className="first-impression">
                            <p className="home-title">EGDO</p>
                            <p className="home-subtitle">depuis 1978</p>
                        </div>
                        <div className="quick-intro">
                            <h2 style={{ color: "white", fontWeight: "500" }}>L'association des Enfants de la Goutte d'or accompagne dans la durée les enfants, les jeunes mais aussi les adultes afin qu’ils prennnent leur place de citoyens.</h2>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6} className="home-panel">
                        <Link className="button-main" to="/espace-eleve">Espace Elève</Link>
                        <Link className='button-main' to="/espace-insertion">Espace Insertion</Link>
                        <Link className='button-main' to="/espace-benevole">Espace Bénévole</Link>
                    </Grid>
                </Grid>
                {/* <Link className='button-discover' to="/decouvrir-l-association">Découvrir l'association</Link> */}
            </Grid>
        </>
>>>>>>> romain
    )
 }

<<<<<<< HEAD
const mystyle = {
    img: {
        backgroundImage: `url("../images/blue-pencils.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "95vh"
    },
    imgMobile: {
        backgroundImage: `url("../images/blue-pencils.jpg")`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "95vh",
        transform: 'rotate(-90deg)'
    },
    opacity: {
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        minHeight: "95vh"
    },
}
=======
>>>>>>> romain
