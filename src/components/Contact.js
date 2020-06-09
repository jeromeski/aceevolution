import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  TextField
} from '@material-ui/core';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: ' cover',
    backgroundRepeat: 'no-repeat',
    height: '60em'
  }
}));

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction='row'>
      <Grid item container direction='column' lg={3} justify='center'>
        <Grid item>
          <Typography variant='h2' style={{ lineHeight: 1 }}>
            {' '}
            Contact Us
          </Typography>
          <Typography
            variant='body1'
            style={{ color: theme.palette.common.blue }}>
            {' '}
            We're waiting
          </Typography>
        </Grid>
        <Grid item container>
          <Grid item>
            <img src={phoneIcon} alt='phone' style={{ marginRight: '0.5em' }} />
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: theme.palette.common.blue, fontSize: '1rem' }}>
              (555)888-9999
            </Typography>
          </Grid>          
        </Grid>
        <Grid item container>
          <Grid item>
            <img src={emailIcon} alt='envelope' style={{ marginRight: '0.5em', verticalAlign: 'bottom' }} />
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: theme.palette.common.blue, fontSize: '1rem' }}  >
              Zachary@email.com
            </Typography>
          </Grid>          
        </Grid>

      </Grid>
      <Grid item container className={classes.background} lg={9}></Grid>
    </Grid>
  );
};

export default Contact;
