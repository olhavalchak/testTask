import * as React from 'react';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { CustomizedIcon, CustomDivider } from '../customizedElements';


export const CardContentContainer = () => (
  <CardContent>
    <Grid container
    alignItems='center'
    justifyContent='center'
    spacing={0.5}>
      <Grid item >
        <Typography variant='h5'
        component='div'
        color='white'
        textAlign='center'
        fontFamily='Segoe UI'>
          Cubique
        </Typography>
      </Grid>
      <Grid item >
        <CustomizedIcon />
      </Grid>
    </Grid>
    <Typography
    gutterBottom
    variant='subtitle1'
    component='div'
    color='white'
    textAlign='center'
    fontFamily='Segoe UI'>
      203 items
    </Typography>
    <Typography
    variant='body2' 
    gutterBottom 
    color='#54555A' 
    textAlign='center' 
    fontFamily='Segoe UI'>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, provident!
    </Typography>
    <Grid 
    container 
    justifyContent='space-between' 
    sx={{ marginTop: '20px'}}>
      <Grid item>
        <Typography 
        variant='body2' 
        color='#54555A' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          Owners
        </Typography>
        <Typography 
        variant='body2' 
        color='white' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          20,8k
        </Typography>
      </Grid>
      <CustomDivider />
      <Grid item>
        <Typography 
        variant='body2' 
        color='#54555A' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          Floor price
        </Typography>
        <Typography 
        variant='body2' 
        color='white' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          0,2 AVAX
        </Typography>
      </Grid>
      <CustomDivider />
      <Grid item>
        <Typography 
        variant='body2' 
        color='#54555A' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          Volume
        </Typography>
        <Typography 
        variant='body2' 
        color='white' 
        textAlign='center' 
        fontFamily='Segoe UI'>
          10,2k
        </Typography>
      </Grid>
    </Grid>
  </CardContent>
);