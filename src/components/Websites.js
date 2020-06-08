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
import CallToAction from './ui/CallToAction';

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
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

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
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}
        style={{ marginTop: '15em' }}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Analytics
              </Typography>
            </Grid>
            <Grid item>
              <img
                src={analytics}
                alt="graph with magnifying glass revealing 1\'s and 0\'s"
                style={{ marginLeft: '-2.75em' }}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.paragraphContainer}>
          <Typography align={matchesSM ? 'center' : undefined} variant='body1'>
            Knowledge is power, and data is 21st Century gold. Analyzing this
            data can reveal hidden patterns and trends in your business,
            empowering you to make smarter decisions with measurable effects.
          </Typography>
        </Grid>
      </Grid>
      {/* Start of 3rd row*/}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        justify='flex-end'
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                E-Commerce
              </Typography>
            </Grid>
            <Grid item>
              <img src={ecommerce} alt='world outline made of dollar signs' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}>
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}>
            It’s no secret that people like to shop online.
          </Typography>

          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}>
            In 2017 over $2.3 trillion was spent in e-commerce, and it’s time
            for your slice of that pie.
          </Typography>
        </Grid>
      </Grid>
      {/* End of 3rd row*/}
      {/* Start of 4th row*/}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        className={classes.rowContainer}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Outreach
              </Typography>
            </Grid>
            <Grid item>
              <img src={outreach} alt='megaphone' />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}>
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}>
            Draw people in with a dazzling website. Showing off your products
            online is a great way to help customers decide what’s right for them
            before visiting in person.
          </Typography>
        </Grid>
      </Grid>
      {/* End of 4th row*/}
      {/* Start of 5th row*/}
      <Grid
        item
        container
        direction={matchesSM ? 'column' : 'row'}
        alignItems='center'
        justify='flex-end'
        className={classes.rowContainer}
        style={{ marginBottom: '15em', marginTop: '15em' }}>
        <Grid item>
          <Grid container direction='column'>
            <Grid item>
              <Typography align='center' variant='h4' gutterBottom>
                Search Engine <br /> Optimization
              </Typography>
            </Grid>
            <Grid item>
              <img src={seo} alt="Website standing on winner's podium " />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          style={{ marginLeft: matchesSM ? 0 : '1em' }}
          className={classes.paragraphContainer}>
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}>
            How often have you ever been to the second page of Google results?
          </Typography>

          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}>
            If you’re like us, probably never.
          </Typography>
          <Typography
            variant='body1'
            paragraph
            align={matchesSM ? 'center' : undefined}>
            Customers don’t go there either, so we make sure your website is
            designed to end up on top.
          </Typography>
        </Grid>
      </Grid>
      {/* End of 5th row*/}
      <Grid item>
        <CallToAction setValue={props.setValue} />
      </Grid>
    </Grid>
  );
};

export default Websites;
