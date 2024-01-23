import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Chart from './Chart';
import Deposite from './Deposite';
import Orders from './Orders';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);


  return (
    <ThemeProvider theme={defaultTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
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
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Chart />
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 240,
                  }}
                >
                  <Deposite />
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </Box>
        <div>

<Stack spacing={2} direction="row">
  <Button  variant="contained"  component={Link} to = "/Case" style={{ backgroundColor:"#e60023" ,marginTop:"24px",textAlign:"center",marginLeft:"58px",width:"32ch" }} >
  ALL CASES
 </Button>
 <Button  variant="contained"  component={Link} to = "/Documents" style={{ backgroundColor:"#32de84" ,textAlign:"center",marginTop:"24px",marginLeft:"58px",width:"32ch"}} >
  ALL DOCUMENTS
 </Button>
 <Button  variant="contained"  component={Link} to = "/Team" style={{ backgroundColor:"#32de84" ,textAlign:"center",marginTop:"24px",marginLeft:"58px",width:"32ch"}} >
  TEAM MEMBERS
 </Button>
 </Stack>


</div>

      </Box>
    </ThemeProvider>
      

  );
}