import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles'
import { CustomDivider } from './Divider';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

const theme = createTheme({
  palette: {
    primary: {
      main: "#373333"
    },
    secondary: {
      main: "#FFFFFF"
    }
  }
});

export const CardContentContainer = () => (
  <ThemeProvider theme={theme}>
  <CardContent>
    <Grid container
    alignItems='center'
    justifyContent='center'
    spacing={0.5}
    >
      <Grid item >
        <Typography variant='h5'
        component='div'
        color='secondary'
        textAlign='center'
        fontFamily='Segoe UI'
        >
          Cubique
        </Typography>
      </Grid>
      <Grid item >
        <VerifiedRoundedIcon
        color='info'/>
      </Grid>
    </Grid>
    <Typography
      gutterBottom
      variant='subtitle1'
      component='div'
      color='secondary'
      textAlign='center'
      fontFamily='Segoe UI'>
      203 items
    </Typography>
    <Typography
    variant='body2' 
    gutterBottom 
    color='primary' 
    textAlign='center' 
    fontFamily='Segoe UI'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, provident!
    </Typography>
    <Grid 
    container 
    justifyContent='space-between' 
    mt='20px'
    >
      <Grid item>
        <Typography 
        variant='body2' 
        color='primary' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          Owners
        </Typography>
        <Typography 
        variant='body2' 
        color='secondary' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          20,8k
        </Typography>
      </Grid>
      <CustomDivider />
      <Grid item>
        <Typography 
        variant='body2' 
        color='primary' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          Floor price
        </Typography>
        <Typography 
        variant='body2' 
        color='secondary' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          0,2 AVAX
        </Typography>
      </Grid>
      <CustomDivider />
      <Grid item>
        <Typography 
        variant='body2' 
        color='primary' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          Volume
        </Typography>
        <Typography 
        variant='body2' 
        color='secondary' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          10,2k
        </Typography>
      </Grid>
    </Grid>
  </CardContent>
  </ThemeProvider>
);