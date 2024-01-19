import * as React from 'react';
import Button from '@mui/material/Button';


export default function Upload() {
  return (
    <Button  variant="contained"  style={{ textAlign: 'center'}} onclickhandle="submit" >
    Upload Files
  
   </Button>
  );
}