import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  Typography,
  useMediaQuery,
  TextField,
  Button
} from '@material-ui/core';
import background from '../assets/background.jpg';
import mobileBackground from '../assets/mobileBackground.jpg';
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
    height: '60em',
    paddingBottom: '10em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`
    }
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
    [theme.breakpoints.down('md')]: {
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
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    }
  },
  message: {
    border: `2px solid ${theme.palette.common.blue}`,
    marginTop: '5em',
    borderRadius: 5
  },
  sendButton: {
    ...theme.typography.estimate,
    borderRadius: 50,
    height: 45,
    width: 245,
    fontSize: '1rem',
    backgroundColor: theme.palette.common.orange,
    '&:hover': {
      backgroundColor: theme.palette.secondary.light
    }
  }
}));

const Contact = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailHelper, setEmailHelper] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneHelper, setPhoneHelper] = useState('');
  const [message, setMessage] = useState('');

  const onChange = evt => {
    let valid;
    switch (evt.target.id) {
      case 'email':
        setEmail(evt.target.value);
        valid = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(
          evt.target.value
        );

        if (!valid) {
          setEmailHelper('Invalid email');
        } else {
          setEmailHelper('');
        }
        break;

      case 'phone':
        setPhone(evt.target.value);
        valid = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(
          evt.target.value
        );
        if (!valid) {
          setPhoneHelper('Invalid phone');
        } else {
          setPhoneHelper('');
        }

        break;

      default:
        break;
    }
  };

  return (
    <Grid container direction='row'>
      <Grid
        item
        container
        direction='column'
        lg={4}
        xl={3}
        style={{
          marginBottom: matchesMD ? '5em' : 0,
          marginTop: matchesMD ? '5em' : 0
        }}
        alignItems='center'
        justify='center'>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography variant='h2' style={{ lineHeight: 1 }}>
                {' '}
                Contact Us
              </Typography>
              <Typography variant='body1'> We're waiting</Typography>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
              <Grid item>
                <img
                  src={phoneIcon}
                  alt='phone'
                  style={{ marginRight: '0.5em' }}
                />
              </Grid>
              <Grid item>
                <Typography
                  variant='body1'
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: '1rem'
                  }}>
                  (555)888-9999
                </Typography>
              </Grid>
            </Grid>
            <Grid item container style={{ marginBottom: '2em' }}>
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
                  style={{
                    color: theme.palette.common.blue,
                    fontSize: '1rem'
                  }}>
                  Zachary@email.com
                </Typography>
              </Grid>
            </Grid>
            <Grid
              item
              container
              direction='column'
              style={{ maxWidth: '20em' }}>
              <Grid item style={{ marginBottom: '0.5em' }}>
                <TextField
                  fullWidth
                  label='Name'
                  id='name'
                  value={name}
                  onChange={evt => setName(evt.target.value)}
                />
              </Grid>
              <Grid item>
                <TextField
                  fullWidth
                  label='Email'
                  helperText={emailHelper}
                  error={emailHelper.length !== 0}
                  id='email'
                  value={email}
                  onChange={onChange}
                />
              </Grid>
              <Grid>
                <TextField
                  fullWidth
                  label='Phone'
                  helperText={phoneHelper}
                  error={phoneHelper.length !== 0}
                  id='phone'
                  value={phone}
                  onChange={onChange}
                />
              </Grid>
            </Grid>
            <Grid item style={{ maxWidth: '20em' }}>
              <TextField
                fullWidth
                InputProps={{ disableUnderline: true }}
                className={classes.message}
                value={message}
                id='message'
                multiline
                rows={10}
                onChange={evt => setMessage(evt.target.value)}
              />
            </Grid>
            <Grid item container justify='center' style={{ marginTop: '2em' }}>
              <Button variant='contained' className={classes.sendButton}>
                Send Message
                <img
                  src={airplane}
                  alt='paper airplane'
                  style={{ marginLeft: '1em' }}
                />
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid
        item
        container
        direction={matchesMD ? 'column' : 'row'}
        className={classes.background}
        alignItems='center'
        justify={matchesMD ? 'center' : undefined}
        lg={8}
        xl={9}>
        <Grid
          item
          style={{
            marginLeft: matchesMD ? 0 : '3em',
            textAlign: matchesMD ? 'center' : 'inherit'
          }}>
          <Grid container direction='column'>
            <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
              Simple Software.
              <br />
              Revolutionary Results.
            </Typography>
            <Typography
              align={matchesMD ? 'center' : undefined}
              variant='subtitle2'
              style={{ fontSize: '1.5rem' }}>
              Take advantage of the 21st Century.
            </Typography>
            <Grid container justify={matchesMD ? 'center' : undefined} item>
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
