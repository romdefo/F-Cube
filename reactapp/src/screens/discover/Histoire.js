import React, {useEffect, useState} from "react";

import {Grid} from '@mui/material';



export default function Histoire() {
    const [color, setColor] = useState('#007AAA')
    const [activeTab, setActiveTab] = useState(true)
    const [tab, setTab] = useState("histoireAsso")

    //   const handleChange = (event, newValue) => {
    //     setValue(newValue);
    //   };

    let changeTab = (value) => {  
        setTab(value)
        setActiveTab(!activeTab)
    }

    activeTab==false && setColor("#80CCEA")

    return (
        <Grid item>
            <div className="tabs">
                <button id="histoireAsso" onClick={() => changeTab("histoireAsso")}>
                    Notre histoire
                </button>
                <button id="quartier" onClick={() => changeTab("quartier")}>
                    Le quartier de la goutte d'or
                </button>
            </div>

            {(tab === "histoireAsso") 
                ?   <div className="tabs-content">
                        <img src="../images/discover/histoire.jpeg" className="img-histoire"/>
                        <p>
                            L’association « les Enfants de la Goutte D’Or » (EGDO) est l’une des premières associations du quartier. Elle est régie par la loi 1901. Après des propositions d’activités informelles dès le début des années 70, elle est fondée officiellement en juin 1978 à l’initiative d’habitants. Son but est résumé dans l’article 2 de ses statuts 
                        </p>
                    </div>
                :   <div className="tabs-content">
                        <img src="../images/discover/goutte_dor.jpeg"/>
                        <p>
                            L’association « les Enfants de la Goutte D’Or » (EGDO) est l’une des premières associations du quartier. Elle est régie par la loi 1901. Après des propositions d’activités informelles dès le début des années 70, elle est fondée officiellement en juin 1978 à l’initiative d’habitants. Son but est résumé dans l’article 2 de ses statuts 
                        </p>
                    </div>
                }
            
        </Grid>
    );
}
