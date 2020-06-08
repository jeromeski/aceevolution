import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  Hidden
} from '@material-ui/core';
import backArrow from '../assets/backArrow.svg';
import forwardArrow from '../assets/forwardArrow.svg';
import analytics from '../assets/analytics.svg';
import seo from '../assets/seo.svg';
import outreach from '../assets/outreach.svg';
import ecommerce from '../assets/ecommerce.svg';


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
  },
  itemContainer: {
    maxWidth: '40em'
  },
  paragraphContainer: {
    maxWidth: '30em'
  }
}));

const Websites = props => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down('md'));
  const matchesXS = useMediaQuery(theme.breakpoints.down('xs'));

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
                to='/mobileapps'
                onClick={() => {
                  props.setSelectedIndex(2);
                }}>
                <img
                  src={backArrow}
                  alt='Back to iOS/Android Apps Development page'
                />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item container direction='column' className={classes.heading}>
            <Grid item>
              <Typography variant='h2' align={matchesMD ? 'center' : undefined}>
                Website Development
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}>
                Having a website is a necessity in today’s business world. They
                give you one central, public location to let people know who you
                are, what you do, and why you’re the best at it.
              </Typography>
              <Typography
                variant='body1'
                paragraph
                align={matchesMD ? 'center' : undefined}>
                From simply having your hours posted to having a full fledged
                online store, making yourself as accessible as possible to users
                online drives growth and enables you to reach new customers.
              </Typography>
            </Grid>
          </Grid>
          <Hidden mdDown>
            <Grid item className={classes.arrowContainer}>
              <IconButton
                style={{ background: 'transparent' }}
                component={Link}
                to='/services'
                onClick={() => {
                  props.setSelectedIndex(0);
                }}>
                <img src={forwardArrow} alt='Forward to Services page' />
              </IconButton>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
      {/* Start of 2nd row*/}
      <Grid item container direction='row' alignItems='center' className={classes.rowContainer}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
                <Typography variant='h4' gutterBottom>
                  Analytics
                </Typography> 
            </Grid>
            <Grid item>
                <img src={analytics} alt="graph with magnifying glass revealing 1\'s and 0\'s"
                style={{marginLeft: '-2.75em'}}
                />
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Typography variant='body1' className={classes.paragraphContainer}> Knowledge is power, and data is 21st Century gold. Analyzing this data can reveal hidden patterns and trends in your business, empowering you to make smarter decisions with measurable effects.
            </Typography>
        </Grid>
      </Grid>
      {/* End of 2nd row*/}
    </Grid>
  );
};

export default Websites;
