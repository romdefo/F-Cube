import React,{useState} from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import {Grid} from '@mui/material'

import FootballCard from './FootballCard';

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

   
        <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="7-11 ans" {...a11yProps(0)} />
            <Tab label="12-13 ans" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
        </Box>
        <TabPanel value={value} index={0}>

        <div  style = {myStyle.trainingCards}>

            
            <FootballCard
            terrain= 'Gymnase Doudeauville'
            adress= '82,rue Doudeauville 75018 Paris'
            img='u9foot'
            trainingDay='Mercredi'
            category= {[{cat:'U7',trainingDays:[{day:'Mercredi',hour:'16h15'}]}, {cat:'U8',trainingDays:[{day:'Mercredi',hour:'17h15'}]}, {cat:'U9',trainingDays:[{day:'Mercredi',hour:'16h15'}]}]}
            coachs = {['Chafai_Aitsaid-u7-u8-u14-u15','coach_u8-u9-u10']}
            />

            <FootballCard
            terrain= 'Stade Porte de la Chapelle'
            adress= '56, boulevard de Ney 75018 Paris'
            img='U10_TOURNOI_217'
            category= {[{cat:'U10',hours:'16h',trainingDays:'Mercredi'}, {cat:'U11',hours:'16h'}]}
            coachs = {['Bangaly_Souareu10-u11','coach_u8-u9-u10']}
            />
           
         </div>


        </TabPanel>

        <TabPanel value={value} index={1}>
            
        <FootballCard
            terrain= 'Stade Porte de la Chapelle'
            adress= '56, boulevard de Ney 75018 Paris'
            img='u12-u13'
            trainingDay='Mercredi'
            category= {[{cat:'U12',hours:'De 17h45 à 19h15',trainingDays:'Mercredi'}, {cat:'U12',hours:'De 17h45 à 19h15',trainingDays:'Mercredi'}]}
            coachs = {['Bangaly_Souareu10-u11','coach_u8-u9-u10']}
            
            />

        </TabPanel>

        <TabPanel value={value} index={2}>
            Item Three
        </TabPanel>
        </Box>
   
  );
}

const myStyle = {
    trainingCards:{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center'
       
    },
  }