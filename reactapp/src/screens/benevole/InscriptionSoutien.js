import React, {useEffect, useState} from 'react';
import {Box, Stepper, Step, StepLabel, Button, Typography, Grid, Input, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup} from '@mui/material';
import { Group } from '@mui/icons-material';

const steps = ['Nom', 'Niveaux', 'Jours'];
const groups = [
    {label: 'CP au CM1', value: 'primaire1'},
    {label: 'CM2 à 6ème', value: 'primaire2'},
    {label: '5ème à 3ème', value: 'college'},
    {label: 'Lycée', value: 'lycee'}];

const cases = groups.map(group => group.value);
var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export default function Inscription() {

  const [activeStep, setActiveStep] = useState(0);
  const [filled, setFilled] = useState('false')
  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [choice, setChoice] = useState('primaire1')

  const handleNext = () => {
        // emailRegex.test(mail) && setNotEmail(false)
        if (emailRegex.test(email) && name.length !=0 && firstName.length !=0 && email.length !=0) {
            setFilled(true);
            setActiveStep((prevActiveStep) => prevActiveStep + 1)
        } else {
            setFilled(false)
        } 
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };


  let choosenDays;
//   switch (cases) {
//       case 'primaire1':
//           choosenDays=()
//           break;
  
//       case: 'primaire2'
//           break;
//       case 'college':
          
//           break;
  
//       case: 'lycee'
//           break;

//   }

  return (
    // <Box sx={{ width: '100%' }}>
        <Grid container direction='column' justifyContent="center" alignItems="center" spacing={4} mt="6">
            <Grid item>
                <Stepper activeStep={activeStep}>
                    {steps.map((label, index) => {
                        const stepProps = {};
                        const labelProps = {};
                    return (
                        <Step key={label} {...stepProps}>
                        <StepLabel {...labelProps}>{label}</StepLabel>
                        </Step>
                    );
                    })}
                </Stepper>
            </Grid>
            
        
        
            {activeStep ===0 ? 
            <>
                {filled===false && <Grid item> Vous devez remplir les cases</Grid> }
                

                <Grid item>
                    <Input placeholder="Prénom" type='string' required='true' onChange={(e) => setFirstName(e.target.value)} value={firstName} />
                </Grid>

                <Grid item>
                    <Input placeholder="Nom" type='string' required='true'onChange={(e) => setName(e.target.value)} value={name}/>
                </Grid>
                <Grid item>
                    <Input placeholder="john.doe@gmail.com" type='email' required='true'onChange={(e) => setEmail(e.target.value)} value={email}/>
                </Grid> 
        
            </>

                    : (activeStep===1 ?
                    <Grid item>
                        <FormControl>
                            <FormLabel id="demo-radio-buttons-group-label">Quel niveau ?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="primaire1"
                                name="radio-buttons-group"
                            >
                                {groups.map(group => {
                                    return(<FormControlLabel 
                                        value={group.value}
                                        control={<Radio />}
                                        label={group.label}
                                        onClick={(e)=> setChoice(e.target.value)}/>)
                                    
                                })}
                            </RadioGroup>
                        </FormControl>
                    </Grid>
                    :
                    <Grid item>
                        {choosenDays}
                    </Grid>)
                        
            }

            <Grid item>
                 <Button
                    color="inherit"
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    sx={{ mr: 1 }}
                >
                Retour
                </Button>
                <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Terminer' : 'Suivant'}
                </Button>
            </Grid>
           
        </Grid>
  );
}
