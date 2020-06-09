import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  TextField,
  Button
} from '@material-ui/core';
import background from '../assets/background.jpg';
import phoneIcon from '../assets/phone.svg';
import emailIcon from '../assets/email.svg';
import airplane from '../assets/send.svg';
import ButtonArrow from './ui/ButtonArrow';

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: ' cover',
    backgroundRepeat: 'no-repeat',
    height: '60em'
  },
  estimateButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 80,
    width: 205,
    backgroundColor: theme.palette.common.orange,
    marginRight: '5em',
    marginLeft: '2em',
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    },
    [theme.breakpoints.down('sm')]: {
     marginRight: 0,
     marginLeft: 0 
    }
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    width: 100,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  }
}));

const Contact = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

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
            <img
              src={emailIcon}
              alt='envelope'
              style={{ marginRight: '0.5em', verticalAlign: 'bottom' }}
            />
          </Grid>
          <Grid item>
            <Typography
              variant='body1'
              style={{ color: theme.palette.common.blue, fontSize: '1rem' }}>
              Zachary@email.com
            </Typography>
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item>
            <TextField
              label='Name'
              id='name'
              value={name}
              onChange={evt => setName(evt.target.value)}
            />
          </Grid>
          <Grid item>
            <TextField
              label='Email'
              id='email'
              value={email}
              onChange={evt => setEmail(evt.target.value)}
            />
          </Grid>
          <Grid>
            <TextField
              label='Phone'
              id='phone'
              value={phone}
              onChange={evt => setPhone(evt.target.value)}
            />
          </Grid>
        </Grid>
        <Grid item>
          <TextField
            value={message}
            id='message'
            multiline
            rows={10}
            onChange={evt => setMessage(evt.target.value)}
          />
        </Grid>
        <Grid item>
          <Button variant='contained'>
            Send Message
            <img src={airplane} alt='paper airplane' />
          </Button>
        </Grid>
      </Grid>

      <Grid item container className={classes.background} alignItems='center' lg={9}>
        <Grid
          item
          style={{
            marginLeft: matchesSM ? 0 : '5em',
            textAlign: matchesSM ? 'center' : 'inherit'
          }}>
          <Grid container direction='column'>
            <Typography variant='h2'>
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography variant='subtitle2' style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid item>
              <Button
                onClick={() => props.setValue(2)}
                component={Link}
                to='/revolution'
                variant='outlined'
                className={classes.learnButton}
                style={{
                  color: theme.palette.common.blue,
                  borderColor: theme.palette.common.blue
                }}>
                <span style={{ marginRight: 5 }}>Learn More</span>
                <ButtonArrow
                  width={10}
                  height={10}
                  fill={theme.palette.common.blue}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Button
            onClick={() => props.setValue(5)}
            component={Link}
            to='/estimate'
            variant='contained'
            className={classes.estimateButton}>
            Free Estimate
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
