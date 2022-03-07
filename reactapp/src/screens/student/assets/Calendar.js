import React, {useState, useEffect} from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import CalendarPicker from '@mui/lab/CalendarPicker';
import MonthPicker from '@mui/lab/MonthPicker';
import YearPicker from '@mui/lab/YearPicker';
import Grid from '@mui/material/Grid';
import { fr } from "date-fns/locale";

const minDate = new Date();
const maxDate = new Date('2034-01-01T00:00:00.000');

export default function Calendar() {
  const [date, setDate] =useState(new Date());

  
  


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} locale={fr} >
          <CalendarPicker color='secondary' date={date} onChange={(newDate) => setDate(newDate)} />
    </LocalizationProvider>
  );
}