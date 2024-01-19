import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
/*import Input from 'components/Input';
import DropFileInput from 'components/drop-file-input/DropFileInput';
import Upload from 'components/Upload';*/
import Header from './Header';
import {  createTheme, ThemeProvider } from '@mui/material/styles';
import Case  from '../case/Case';


const defaultTheme = createTheme();

export default function Dashboard() {


  return (
    
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Header />
  
    
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
          <Case />
      
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
