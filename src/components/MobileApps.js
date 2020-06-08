import React from 'react';
import {
  Grid,
  Typography,
  useMediaQuery,
  Hidden,
  IconButton
} from '@material-ui/core';
import Lottie from 'react-lottie';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';

import integrationAnimation from '../animations/integrationAnimation/data.json'

const useStyles = makeStyles(theme => ({
  heading: {
    maxWidth: '40em'
  },
  arrowContainer: {
    marginTop: '0.5em'
  },
  rowContainer: {
    paddingLeft: '5em',
    paddingRight: '5em',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: '1.5em',
      paddingRight: '1.5em'
    }
  }
}));

const MobileApps = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

  const defaultsOptions = {
    loop: true,
    autoplay: false,
    animationData: integrationAnimation,
    renderSettings: {
      preserveAspectRation: 'xMidYMid slice'
    }
  };

  return (
    <Grid container direction='column'>
      <Grid item container>
        <Grid
          item
          container
          direction='row'
          justify={matchesMD ? 'center' : undefined}
          className={classes.rowContainer}
          style={{ marginTop: matchesXS ? '1em' : '2em' }}>
          <Hidden mdDown>
            <Grid
              item
              className={classes.arrowContainer}
              style={{ marginRight: '1em', marginLeft: '-3.5em' }}>
              <IconButton
                component={Link}
                style={{ backgroundColor: 'transparent' }}
                to='/customSoftware'
                onClick={() => {
                  props.setSelectedIndex(1);
                }}>
                <img
                  src={backArrow}
                  alt='Back to Custom Software Development page'
                />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction='column' className={classes.heading}>
            <Grid item>
              <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
                iOS/Android App Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}>
                Mobile apps allow you to take your tools on the go.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}>
                Whether you want an app for your customers, employees, or
                yourself, we can build cross-platform native solutions for any
                part of your business process. This opens you up to a whole new
                world of possibilities by taking advantage of phone features
                like the camera, GPS, push notifications, and more.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}>
                Convenience. Connection.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
              <IconButton
                style={{ background: 'transparent' }}
                component={Link}
                to='/websites'
                onClick={() => {
                  props.setSelectedIndex(3);
                }}>
                <img
                  src={forwardArrow}
                  alt='Forward to Websites Development page'
                />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      {/* Start of 2nd Row */}
      <Grid item container direction='row' className={classes.rowContainer}>
        <Grid item container direction='column' md>
          <Grid item>
            <Typography variant='h4' gutterBottom>
              Integration
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              Our technology enables an innate interconnection between web and
              mobile applications, putting everything you need right in one
              convenient place.
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='body1' paragraph>
              This allows you to extend your reach, reinvent interactions, and
              develop a stronger relationship with your users than ever before.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md>
          <Lottie options={defaultsOptions} isStopped={true}/>
        </Grid>
        <Grid item container direction='column' md>
          <Grid item>
            <Typography align='right' variant='h4' gutterBottom>
              Simultaneous Platform Support
            </Typography>
          </Grid>
          <Grid item>
            <Typography  align='right' variant='body1' paragraph>
            Our cutting-edge development process allows us to create apps for iPhone, Android, and tablets — all at the same time.

            </Typography>
          </Grid>
          <Grid item>
            <Typography  align='right' variant='body1' paragraph>
            This significantly reduces costs and creates a more unified brand experience across all devices.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      {/* End of 2nd Row */}
    </Grid>
  );
};

export default MobileApps;
