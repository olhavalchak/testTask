import * as React from 'react';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';

import pink from '../theme/assets/pink.jpg';
import green from '../theme/assets/green.jpg';
import face from '../theme/assets/face.png';
import { CustomizedCard, CustomizedAvatar } from './customizedElements';
import { CardContentContainer } from './elements';

  export const CardTest = () => {
  
  return (
    <div>
      <CustomizedCard >
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
        <CustomizedAvatar
          alt='Remy Sharp'
          src={face}
        />
        <CardContentContainer />
      </CustomizedCard>
    </div>
  );
};

