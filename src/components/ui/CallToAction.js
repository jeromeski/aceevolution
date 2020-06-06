import React from 'react';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import useMediaquery from '@material-ui/core/useMediaQuery';
import ButtonArrow from './ButtonArrow';

import background from '../../assets/background.jpg';
import mobileBackground from '../../assets/mobileBackground.jpg';

const useStyles = makeStyles(theme => ({
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: '0.7rem',
    height: 35,
    padding: 5,
    width: 100,
    [theme.breakpoints.down('sm')]: {
      marginBottom: '2em'
    }
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: ' cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    width: '100%',
    height: '60em',
    [theme.breakpoints.down('md')]: {
      backgroundImage: `url(${mobileBackground})`,
      backgroundAttachment: 'inherit'
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
    [theme.breakpoints.down('sm')]: {
     marginRight: 0,
     marginLeft: 0 
    }
  }
}));

const CallToAction = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaquery(theme.breakpoints.down('sm'))
  return (
    <Grid container alignItems='center' justify={matchesSM ? 'center': 'space-between'} className={classes.background} direction={matchesSM ? 'column' : 'row'}>
      <Grid item style={{ marginLeft: matchesSM ? 0 : '5em', textAlign: matchesSM ? 'center': 'inherit'}}>
        <Grid container direction='column'>
          <Typography variant='h2'>
            Simple Software.
            <br />
            Revolutionary Results.
          </Typography>
          <Typography variant='subtitle2' style={{fontSize: '1.5rem'}}>
            Take advantage of the 21st Century.
          </Typography>
          <Grid item>
            <Button
              onClick={() => props.setValue(2)}
              component={Link} to='/revolution'
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
        <Button onClick={() => props.setValue(5)} component={Link} to='/estimate' variant='contained' className={classes.estimateButton}>Free Estimate</Button>
      </Grid>
    </Grid>
  );
};

export default CallToAction;
