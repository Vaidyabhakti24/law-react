import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const Tform = ({ title }) => { 



  return (
   
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '77ch'},
      }}
      noValidate
      autoComplete="on"
    >
      <h2>{title}</h2>
     
      <h1  style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}>PAYMENT GATEWAY</h1>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Subject"
          multiline
          maxRows={2}
        />  
      
      </div>
      <div>


        <TextField
          id="outlined-textarea"
          label="Deadline"
          multiline
          />

      </div>
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Select Status"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Priority"
          multiline
        />
    
      </div>
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Assign To"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Related To"
          multiline
        />
      </div>
     
      
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Case Person Name"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Case Number"
          multiline
        />
       
      </div>
      <div >
      <TextField
          id="outlined-multiline-flexible"
          label="Description"
          multiline
          maxRows={2}
        />

      </div>
  
      <div>

      <Stack spacing={2} direction="row">
        <Button  variant="contained"  component={Link} to = "/Team" style={{ backgroundColor:"#e60023" ,marginTop:"24px",textAlign:"center",marginLeft:"58px",width:"32ch" }} >
        Cancel
       </Button>
       <Button  variant="contained"  component={Link} to = "/Work" style={{ backgroundColor:"#32de84" ,textAlign:"center",marginTop:"24px",marginLeft:"58px",width:"32ch"}} >
        Save
       </Button>
       </Stack>


</div>

    </Box>
    
  );

};

export default Tform;

