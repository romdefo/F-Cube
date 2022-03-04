import React, {useEffect, useState} from "react";

import {Box, Grid, Tab} from '@mui/material';
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { createTheme, ThemeProvider } from "@mui/material";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Histoire() {


const [value, setValue] = React.useState('1');
const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    
    const aosAnime =  () => {
      AOS.init(
        {duration : 1000}
      );
      AOS.refresh();
    }

    aosAnime()
  }, [value])

  return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider'}}>
                <TabList inkBarStyle={{background: 'blue'}} onChange={handleChange} aria-label="lab API tabs example" sx={{display: 'flex', justifyContent: 'center'}}>
                    <Tab label="Notre Histoire" value="1"
                     //className="tabs"
                     />
                    <Tab label="La goutte d'or" value="2" />
                </TabList>
                </Box>
                <TabPanel value="1">
                    <Grid container direction="row" justifyContent="space-around" alignItems="center" xs={12} spacing={2}>
                        <Grid item xs={12} md={6} data-aos="flip-left">
                            <img src="../images/discover/histoire.jpeg" className="img-fluid"/>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <p>
                            L’association « les Enfants de la Goutte D’Or » (EGDO) est l’une des premières associations du quartier. Elle est régie par la loi 1901. Après des propositions d’activités informelles dès le début des années 70, elle est fondée officiellement en juin 1978 à l’initiative d’habitants. Son but est résumé dans l’article 2 de ses statuts 
                            </p>
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value="2">
                    <Grid container direction="row" justifyContent="space-around" alignItems="center" xs={12} spacing={2}>
                        <Grid item xs={12} md={6} data-aos="flip-left">
                            <img src="../images/discover/goutte_dor.jpeg" className="img-fluid"/>
                        </Grid>
                        <Grid item xs={12} md={6} >
                            <p>
                                L’association « les Enfants de la Goutte D’Or » (EGDO) est l’une des premières associations du quartier. Elle est régie par la loi 1901. Après des propositions d’activités informelles dès le début des années 70, elle est fondée officiellement en juin 1978 à l’initiative d’habitants. Son but est résumé dans l’article 2 de ses statuts 
                            </p>
                        </Grid>
                    </Grid>
                </TabPanel>
                    
            </TabContext>
        </Box>


        // <Grid item>
        //     <div className="tabs">
        //         <button id="histoireAsso" onClick={() => changeTab("histoireAsso")}>
        //             Notre histoire
        //         </button>
        //         <button id="quartier" onClick={() => changeTab("quartier")}>
        //             Le quartier de la goutte d'or
        //         </button>
        //     </div>

        //     {(tab === "histoireAsso") 
        //         ?   <div className="tabs-content">
        //                 <img src="../images/discover/histoire.jpeg" className="img-histoire"/>
        //                 <p>
        //                     L’association « les Enfants de la Goutte D’Or » (EGDO) est l’une des premières associations du quartier. Elle est régie par la loi 1901. Après des propositions d’activités informelles dès le début des années 70, elle est fondée officiellement en juin 1978 à l’initiative d’habitants. Son but est résumé dans l’article 2 de ses statuts 
        //                 </p>
        //             </div>
        //         :   <div className="tabs-content">
        //                 <img src="../images/discover/goutte_dor.jpeg"/>
        //                 <p>
        //                     L’association « les Enfants de la Goutte D’Or » (EGDO) est l’une des premières associations du quartier. Elle est régie par la loi 1901. Après des propositions d’activités informelles dès le début des années 70, elle est fondée officiellement en juin 1978 à l’initiative d’habitants. Son but est résumé dans l’article 2 de ses statuts 
        //                 </p>
        //             </div>
        //         }
            
        // </Grid>
    );
}

const mystyle ={
    tabs: {
        "&.Mui-selected": {
                background: "red"
                }
    }
}