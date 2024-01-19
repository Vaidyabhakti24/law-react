import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Scheduler from './components/Scheduler/Scheduler';
import Case from 'case/Case';
import Form from 'case/Form';
import Fir from 'case/Fir';
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Maindash from 'pages/Maindash';
import Header from 'newdashboard/Header';
import Chart from 'newdashboard/Chart';
import Team from 'task/Team';
import Tform from 'task/Tform';
import Work from 'task/Work';



export default function App() {
  const defaultTheme = createTheme();
  return (
    <BrowserRouter>
      <ThemeProvider theme={defaultTheme}>
        <Box sx={{ display: 'flex' }}>
          <CssBaseline />
          <Header />

          <Box
            component="main"
            sx={{
              backgroundColor: (theme) =>
                theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
              flexGrow: 1,
              height: '100vh',
              overflow: 'auto',
            }}
          >
            <Toolbar />
            <Container maxWidth="lg" sx={{ mt: 4, mb: 8 }}>
              <Routes>
                <Route path="/" element={<Maindash />} />
                <Route path="case" element={<Case />} />
                <Route path="Form" element={<Form />} />
                <Route path="Fir" element={<Fir />} />
                <Route path="Chart" element={<Chart />}/>
                <Route path="Scheduler" element={<Scheduler />}/>
                <Route path="Work" element={<Work />}/>
                <Route path="Team" element={<Team />}/>
                <Route path="Tform" element={<Tform />}/>
                


              </Routes>
            
            </Container>
          </Box>
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}
