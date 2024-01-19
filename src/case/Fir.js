import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Fir = ({ title }) => { 
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '61ch' },
      }}
      noValidate
      autoComplete="on"
    >
      <h2>{title}</h2>
      <div>
        <TextField  
          id="outlined-multiline-flexible"
          label="Police Station"
          multiline
          maxRows={2}
        />    
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="FIR Number"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="FIR Date"
          multiline
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Court Number"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Case Number"
          multiline
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Court Type"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Court Name"
          multiline
        />
      </div>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Judge Post"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Judge Name"
          multiline
        />
      </div>
      <div>
        {/* Your upload component */}
        <Button variant="contained" color= "primary" component={Link} to = "/"> 
          Upload Documents
        </Button>
      </div>
      <div>
        {/* Button for adding data */}
     
      </div>
    </Box>
  );
};

export default Fir;
