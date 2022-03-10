import React, { ReactElement, FC } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import Divider from '@mui/material/Divider';
import VerifiedRoundedIcon from '@mui/icons-material/VerifiedRounded';

import pink from '../theme/assets/pink.jpg';
import green from '../theme/assets/green.jpg';
import face from '../theme/assets/face.png';


const CardTest: FC<any> = (): ReactElement => {

  return (
    <div>
      <Card sx={{
        height: '350px',
        width: '300px',
        background: '#17181C',
        borderRadius: '10px',
        position: 'relative',
      }}>
        <Grid container
          spacing={0.5}
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item>
            <CardMedia
              component="img"
              height="146"
              image={pink}
              sx={{
                width: '146px',
              }}
            />
          </Grid>
          <Grid item>
            <CardMedia
              component="img"
              height="146"
              image={green}
              sx={{
                width: '146px',
              }}
            />
          </Grid>
        </Grid>
        <Avatar
          alt="Remy Sharp"
          src={face}
          sx={{
            width: 56,
            height: 56,
            border: '3px solid #17181C',
            position: 'absolute',
            top: '100px',
            left: '118px',
          }}
        />
        <CardContent>
          <Grid container alignItems="center" justifyContent="center" spacing={0.5}>
            <Grid item >
              <Typography variant="h5" component="div" color="white" textAlign="center" fontFamily="Segoe UI">
                Cubique
              </Typography>
            </Grid>
            <Grid item >
              <VerifiedRoundedIcon sx={{
                color: '#34A3F4',
                width: '18px',
                height: '18px',
              }}
              />
            </Grid>
          </Grid>
          <Typography gutterBottom variant="subtitle1" component="div" color="white" textAlign="center" fontFamily="Segoe UI">
            203 items
          </Typography>
          <Typography variant="body2" gutterBottom color="#54555A" textAlign="center" fontFamily="Segoe UI">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi, provident!
          </Typography>
          <Grid container justifyContent="space-between" sx={{ marginTop: '20px'}}>
            <Grid item>
              <Typography variant="body2" color="#54555A" textAlign="center" fontFamily="Segoe UI">
                Owners
              </Typography>
              <Typography variant="body2" color="white" textAlign="center" fontFamily="Segoe UI">
                20,8k
              </Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" color="#54555A" flexItem />
            <Grid item>
              <Typography variant="body2" color="#54555A" textAlign="center" fontFamily="Segoe UI">
                Floor price
              </Typography>
              <Typography variant="body2" color="white" textAlign="center" fontFamily="Segoe UI">
                0,2 AVAX
              </Typography>
            </Grid>
            <Divider orientation="vertical" variant="middle" color="#54555A" flexItem />
            <Grid item>
              <Typography variant="body2" color="#54555A" textAlign="center" fontFamily="Segoe UI">
                Volume
              </Typography>
              <Typography variant="body2" color="white" textAlign="center" fontFamily="Segoe UI">
                10,2k
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardTest;