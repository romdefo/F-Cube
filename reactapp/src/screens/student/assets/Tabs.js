import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {Grid} from '@mui/material'

import SportCard from './SportCard';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (

   
        <Box sx={{ width: '100%', diplay:'block'}}  >
         <Box sx={{ maxWidth: 600, bgcolor: 'background.paper'}} style={{marginLeft:'auto', marginRight:'auto'}} >
         <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
>
            <Tab label="7-11 ans" {...a11yProps(0)} />
            <Tab label="12-13 ans" {...a11yProps(1)} />
            <Tab label="14-15 ans" {...a11yProps(2)} />
            <Tab label="16 ans et plus" {...a11yProps(3)} />
            <Tab label="Féminines" {...a11yProps(4)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

        <div  style = {myStyle.trainingCards}>

            <SportCard
            terrain= 'Gymnase Doudeauville'
            adress= '82,rue Doudeauville'
            city='75018 Paris'
            img='u9foot'
            trainingDay='Mercredi'
            category= {[{cat:'U7',trainingDays:[{day:'Mercredi',hour:'16h15'}]}, {cat:'U8',trainingDays:[{day:'Mercredi',hour:'17h15'}]}, {cat:'U9',trainingDays:[{day:'Mercredi',hour:'18h15'}]}]}
            coachs = {['Chafai_Aitsaid-u7-u8-u14-u15','coach_u8-u9-u10']}
            />

            <SportCard
            terrain= 'Stade Porte de la Chapelle'
            adress= '56, boulevard de Ney'
            city='75018 Paris'
            img='U10_TOURNOI_217'
            category= {[{cat:'U10 / U11',trainingDays:[{day:'Mercredi',hour:'16h00'}]}]}
            coachs = {['Bangaly_Souareu10-u11','coach_u8-u9-u10']}
            />
           
         </div>


        </TabPanel>

        <TabPanel value={value} index={1}>

        <div  style = {myStyle.trainingCards}>
        <SportCard
            terrain= 'Stade Porte de la Chapelle'
            adress= '56, boulevard de Ney'
            city='75018 Paris'
            img='u12-u13'
            category= {[{cat:'U12',trainingDays:[{day:'Mardi',hour:'De 17h45 à 19h15'}, {day:'Mercredi',hour:'De 17h30 à 19h15'}]}, {cat:'U13',trainingDays:[{day:'Mardi',hour:'De 17h45 à 19h15'}, {day:'Mercredi',hour:'De 17h30 à 19h15'}, {day:'Jeudi',hour:'De 17h45 à 19h15'}]}]}
            coachs = {['Mendy_Jacques-u12']}
            />
            </div>

        </TabPanel>

        <TabPanel value={value} index={2}>
        <div  style = {myStyle.trainingCards}>
        <SportCard
            terrain= 'Stade Porte de la Chapelle'
            adress= '56, boulevard de Ney'
            city='75018 Paris'
            img='u14-u15'
            category= {[{cat:'U14',trainingDays:[{day:'Lundi',hour:'De 17h45 à 19h30'}]}, {cat:'U15',trainingDays:[{day:'Lundi',hour:'De 17h45 à 19h30'}, {day:'Jeudi',hour:'De 17h45 à 19h30'}, {day:'Vendredi',hour:'De 17h45 à 19h30'}]}]}
            coachs = {['Chafai_Aitsaid-u7-u8-u14-u15']}
            />
            </div>
        </TabPanel>

        <TabPanel value={value} index={3}>
        <div  style = {myStyle.trainingCards}>
        <SportCard
            terrain= 'Stade Porte de la Chapelle'
            adress= '56, boulevard de Ney'
            city='75018 Paris'
            img='u16-17'
            category= {[{cat:'U16',trainingDays:[{day:'Vendredi',hour:'18h00'}]}, {cat:'U17',trainingDays:[{day:'Mercredi',hour:'De 18h30 à 20h30'}, {day:'Vendredi',hour:'De 18h30 à 20h30'}]}]}
            coachs = {['Nasser_Hamici-17f']}
            />
            </div>
        </TabPanel>

        <TabPanel value={value} index={4}>

        <div  style = {myStyle.trainingCards}>
        <SportCard
            terrain= 'Stade Porte de la Chapelle'
            adress= '56, boulevard de Ney'
            city='75018 Paris'
            img='u12f'
            category= {[{cat:'U12 / U13',trainingDays:[{day:'Mardi',hour:'De 17h45 à 19h30'}, {day:'Jeudi',hour:'De 17h45 à 19h30'}]}, 
                      ]}
            coachs = {['Nasser_Hamici-17f']}
            />

<SportCard
            terrain= 'Stade Porte de la Chapelle'
            adress= '56, boulevard de Ney'
            city='75018 Paris'
            img='sectionf'
            category= {[    {cat:'U15',trainingDays:[{day:'Mercredi',hour:'De 17h30 à 19h30'}]},
            {cat:'U16',trainingDays:[{day:'Mardi',hour:'De 17h45 à 19h30'},{day:'Jeudi',hour:'De 17h45 à 19h30'}]} 
                      ]}
            coachs = {['Nasser_Hamici-17f']}
            />

            
            </div>

        </TabPanel>

        </Box>
   
  );
}

const myStyle = {
    trainingCards:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
       
         
    },
  }