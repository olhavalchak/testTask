import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import pink from '../theme/assets/pink.jpg';
import green from '../theme/assets/green.jpg';
import face from '../theme/assets/face.png';
import { CardContentContainer } from './elements';

export const CardTest = () => {
  
  return (
    <div>
      <Box 
      sx={{backgroundColor: '#15161A'}}
      height='350px'
      width='300px'
      borderRadius={'10%'}>
        <Grid container
          spacing={0.5}
          direction='row'
          justifyContent='center'
          alignItems='center'
        >
          <Grid item>
            <CardMedia
              component='img'
              height='146'
              image={pink}
              width='146px'
              sx={{
                width: '146px',
              }}
            />
          </Grid>
          <Grid item>
            <CardMedia
              component='img'
              height='146'
              image={green}
              sx={{
                width: '146px',
              }}
            />
          </Grid>
        </Grid>
        <Box
        
        width='60px'
        height='60px'
        position='absolute'
        top='37%'
        left='48%'>
        <Avatar
          sx={{ border: '3px solid #17181C'}}
          alt='Remy Sharp'
          src={face}
        />
        </Box>
        <CardContentContainer />
      </Box>
    </div>
  );
};

