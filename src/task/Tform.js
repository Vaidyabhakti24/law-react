import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';


const Tform = ({ title }) => { 

  const handleChange1 = (event) => {
    setChecked([event.target.checked, event.target.checked]);
  };

  const handleChange2 = (event) => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = (event) => {
    setChecked([checked[0], event.target.checked]);
  };

  const [checked, setChecked] = React.useState([true, false]);
  const children = (
    <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3 }}>
      <FormControlLabel
        label="Child 1"
        control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
      />
      <FormControlLabel
        label="Child 2"
        control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
      />
    </Box>
  );


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
     
      <h1  style={{ fontFamily: 'Sans-serif', color: 'black', fontSize: '24px' }}> Add Client & Case Details</h1>
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Client Full Name"
          multiline
          maxRows={2}
        />  
        <FormControlLabel control={<Checkbox  />} label="Petitionar" />
        <FormControlLabel control={<Checkbox/>} label="Respondant" />
        <TextField
          id="outlined-textarea"
          label="Respondant Full Name"
          multiline
        />
      
      </div>
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Respondant Senior Advocate Name"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Respondant Junior Advocate 1"
          multiline
          />
        <TextField
          id="outlined-multiline-flexible"
          label="Respondant Junior Advocate 2"
          multiline
          maxRows={2}
        />
       
      </div>
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Case Number"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Case Type"
          multiline
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Case Subtype"
          multiline
          maxRows={2}
        />
    
      </div>
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="Act Number"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Filing Number"
          multiline
        />
        <TextField
          id="outlined-multiline-flexible"
          label="Filing date"
          multiline
          maxRows={2}
        />
      </div>
      <div>
      <FormControlLabel
        label="Parent"
        control={
          <Checkbox
            checked={checked[0] && checked[1]}
            indeterminate={checked[0] !== checked[1]}
            onChange={handleChange1}
          />
        }
      />
      {children}
    </div>
      
      <div>
      <TextField
          id="outlined-multiline-flexible"
          label="First Hearing Date"
          multiline
          maxRows={2}
        />
        <TextField
          id="outlined-textarea"
          label="Next Hearing Date"
          multiline
        />
       
      </div>
      <div >
      <TextField
          id="outlined-multiline-flexible"
          label="Add comments"
          multiline
          maxRows={2}
        />

      </div>
      <div>
      <TextField  
    
          id="outlined-multiline-flexible"
          label="Add Case Description"
          multiline
          maxRows={2}
  
        />    
        <Button  variant="contained"  component={Link} to = "/Case" style={{ backgroundColor:"#141963" ,textAlign:"center",marginTop:"84px" }} >
        Next Page
       </Button>



      </div>
    </Box>
    
  );

};

export default Tform;

