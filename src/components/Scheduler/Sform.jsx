import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Sform() {
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);
  const [cleared, setCleared] = React.useState(false);


  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeouMMt(timeout);
    }
    return () => {};
  }, [cleared]);

  return (
    <div sx={{  mt: 2 }} >
      <Button sx={{ display: 'flex', mt: 2}} onClick={handleOpen}>
        Select the Case
      </Button>
      <FormControl sx={{ m: 1, minWidth: 260}}>
        <InputLabel id="demo-controlled-open-select-label"></InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          label=""
          onChange={handleChange}
        >
          <MenuItem value="">
         
          </MenuItem>
          <MenuItem value={10}>Criminal</MenuItem>
          <MenuItem value={20}>Sales</MenuItem>
          <MenuItem value={30}>Data</MenuItem>
        </Select>
      </FormControl>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DatePicker']}sx={{ display: 'flex', mt: 2}}>
        <DatePicker label="Select Date " />
      </DemoContainer>
    </LocalizationProvider>

      <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 2, width: 260 },
      }}
      noValidate
      autoComplete="off"
    >
       <div sx={{ display: 'flex' }}>
          <TextField
            sx={{ display: 'flex' }}
            id="outlined-basic"
            label="Add Note"
            variant="outlined"
          />
        </div>
 
      </Box>
    <Button  variant="contained" style={{ textAlign: 'center',marginLeft:'312px', backgroundColor:"#141963",marginTop:'20px' }}onclickhandle="submit" >
    Schedule
  
   </Button>
    </div>
 
  );
 


}
