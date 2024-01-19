import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';


const Team = ({ title }) => { 

  return (
   
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '49ch'},
      }}
      noValidate
      autoComplete="on"
    >
      <h2>{title}</h2>
     
      <h1  style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}> ADD TEAM MEMBERS</h1>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          multiline
          maxRows={2}
        />  
        <TextField
          id="outlined-textarea"
          label="Last Name"
          multiline
        />
      
      </div>
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Email"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Mobile Number"
          multiline
          />  
      </div>
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Password"
          multiline
          maxRows={2}
        />
      <TextField
          id="outlined-multiline-flexible"
          label="Confirm Password"
          multiline
          maxRows={2}
        />
    
      </div>
      <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '100ch'},
      }}
      noValidate
      autoComplete="on"
    >
      <div>
      <TextField
          id="outlined-textarea"
          label="Address"
          multiline
        />
      </div>   
      <div>
  
      <TextField
          id="outlined-multiline-flexible"
          label="Select Role"
          multiline
          maxRows={2}
        />
      </div>
      </Box>
      <div>



       <Stack spacing={4} direction="row">
        <Button  variant="contained"  component={Link} to = "/work" style={{ backgroundColor:"#e60023" ,marginTop:"24px",textAlign:"center",marginLeft:"78px",width:"32ch" }} >
        Cancel
       </Button>
       <Button  variant="contained"  component={Link} to = "/work" style={{ backgroundColor:"#32de84" ,textAlign:"center",marginTop:"24px",marginLeft:"78px",width:"32ch"}} >
        Save
       </Button>
       </Stack>


      </div>
    </Box>
    
  );

};

export default Team;

