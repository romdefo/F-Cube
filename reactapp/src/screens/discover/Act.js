import React from 'react';
import { Grid, Button, Container, Typography} from '@mui/material';

import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

// import './Discover.css'
import '../../stylesheets/App.css'

const nav = ["Accueil", "Blog"];

export default function Act() {
    return (
        <>  
        {/* Navbar */}
        <Navbar nav={nav}/> 

        {/* Pourauoi? */}
        <div className='section'>
            <div className='opacity'>
                <Container 
                    maxWidth='lg' 
                    sx={{display:'flex', justifyContent:'center', alignItems:'space-between', p:'50px', minHeight: '100vh'}}>
                    <Grid
                        container
                        sx={{height:'50vh'}} 
                        spacing={8}
                        justifyContent='center'

                    >
                        <Grid item md={5} sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <img src="../images/act/image-act-2.jpg" alt="pourquoi donner" className='img-fluid' style={{borderRadius:'20px', height:'50%'}}/>
                        {/* </Grid> */}
                        {/* <Grid item> */}
                            <Typography variant="body1">
                                Pourquoi donner ?
                            </Typography>
                        {/* </Grid> */}
                        {/* <Grid item> */}
                            <Typography variant='h4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Typography>
                        </Grid> 

                            <Grid item md={5} sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                            <Typography variant="h5">
                                Pourquoi devenir bénévole ?
                            </Typography>
                            <Typography variant='h4'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
                            </Typography>
                        {/* </Grid> */}
                        {/* <Grid item> */}
                            <img src="../images/act/image-act-1.jpg" alt="pourquoi devenir bénévole" className='img-fluid'
                            style={{borderRadius:'20px', height:'50%'}}/>
                        </Grid>             
                    </Grid>
                    {/* <Grid container  sx={{height:'50vh', width:'70%'}} >
                    
                        
                    </Grid> */}

                </Container>
            </div>
        </div>
        {/* Footer */}
        <Footer/> 
    
    </>
    )
}
