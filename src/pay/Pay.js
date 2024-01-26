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
        '& .MuiTextField-root': { m: 1, width: '39ch'},
      }}
      noValidate
      autoComplete="on"
    >
      <h2>{title}</h2>
     
      <h1  style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}>PAYMENT GATEWAY</h1>
      <div>

      <h5  style={{ fontFamily: 'Sans-serif', color: 'blue', fontSize: '18px' }}>Personal Details</h5>
        <TextField
          id="outlined-multiline-flexible"
          label="First Name"
          multiline
          maxRows={2}
        />  
          <TextField
          id="outlined-multiline-flexible"
          label="Last Name"
          multiline
          maxRows={2}
        />  
      
      </div>
      <div>

        <TextField
          id="outlined-textarea"
          label="Email"
          multiline
          />
      <TextField
          id="outlined-multiline-flexible"
          label="Phone number"
          multiline
          maxRows={2}
        />
   
      </div>

      <h5  style={{ fontFamily: 'Sans-serif', color: 'blue', fontSize: '18px' }}>Payment Details</h5>
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Card holder name"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Card number"
          multiline
        />
      </div>
     
      
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="CVV"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Expiration Date"
          multiline
        />
       
      </div>
  
      <div>

      <Stack spacing={2} direction="row">
        <Button  variant="outlined" component={Link} to = "/work" style={{ marginTop:"24px",textAlign:"center",marginLeft:"58px",width:"32ch" }} >
        Cancel
       </Button>
       <Button  variant="contained"  component={Link} to = "/Trans" style={{ color:"primary" ,textAlign:"center",marginTop:"24px",marginLeft:"58px",width:"32ch"}} >
        Complete Transaction
       </Button>
       </Stack>


</div>

    </Box>
    
  );

};

export default Tform;

