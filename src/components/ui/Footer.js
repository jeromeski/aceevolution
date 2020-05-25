import React from 'react';

import Grid from '@material-ui/core/Grid';

import { makeStyles } from '@material-ui/core/styles';
import footerAdornment from '../../assets/Footer Adornment.svg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  footer: {
    backgroundColor: theme.palette.common.blue,
    width: '100%',
    zIndex: 1302,
    position: 'relative'
  },
  adornment: {
    width: '25em',
    verticalAlign: 'bottom',
    [theme.breakpoints.down('md')]: {
      width: '21em'
    },
    [theme.breakpoints.down('xs')]: {
      width: '15em'
    }
  },
  mainContainer: {
    position: 'absolute'
  },
  link: {
    color: 'white',
    fontFamily: 'Arial',
    fontSize: '0.75rem',
    fontWeight: 'bold',
    textDecoration: 'none'
  },
  gridItem: {
    margin: '3em'
  }
}));

const Footer = props => {
  const { value, setValue, selectedIndex, setSelectedIndex } = props;
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Grid container justify='center' className={classes.mainContainer}>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              item
              component={Link}
              to='/'
              className={classes.link}
              onClick={() => {setValue(0); setSelectedIndex(0)}}>
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              component={Link}
              to='/services'
              item
              className={classes.link}
              onClick={() => {setValue(1); setSelectedIndex(1)}}>
              Services
            </Grid>
            <Grid
              component={Link}
              to='/customsoftware'
              item
              className={classes.link}
              onClick={() => {setValue(1); setSelectedIndex(1)}}>
              Custom Software Development
            </Grid>
            <Grid
              component={Link}
              to='/mobileapps'
              item
              className={classes.link}
              onClick={() => {setValue(1); setSelectedIndex(1)}}>
              Mobile App Development
            </Grid>
            <Grid
              component={Link}
              to='/websites'
              item
              className={classes.link}
              onClick={() => {setValue(1); setSelectedIndex(1)}}>
              Website Development
            </Grid>
          </Grid>
        </Grid>
        <Grid item className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              component={Link}
              to='/revolution'
              item
              className={classes.link}
              onClick={() => {setValue(2); setSelectedIndex(2)}}>
              The Revolution
            </Grid>
            <Grid
              component={Link}
              to='/revolution'
              item
              className={classes.link}
              onClick={() => {setValue(2); setSelectedIndex(2)}}>
              Vision
            </Grid>
            <Grid
              component={Link}
              to='/revolution'
              item
              className={classes.link}
              onClick={() => {setValue(2); setSelectedIndex(2)}}>
              Technology
            </Grid>
            <Grid
              component={Link}
              to='/revolution'
              item
              className={classes.link}
              onClick={() => {setValue(2); setSelectedIndex(2)}}>
              Process
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              component={Link}
              to='/about'
              item
              className={classes.link}
              onClick={() => {setValue(3); setSelectedIndex(3)}}>
              About Us
            </Grid>
            <Grid
              component={Link}
              to='/about'
              item
              className={classes.link}
              onClick={() => {setValue(3); setSelectedIndex(3)}}>
              History
            </Grid>
            <Grid
              component={Link}
              to='/about'
              item
              className={classes.link}
              onClick={() => {setValue(3); setSelectedIndex(3)}}>
              Team
            </Grid>
          </Grid>
        </Grid>
        <Grid className={classes.gridItem}>
          <Grid container direction='column' spacing={2}>
            <Grid
              component={Link}
              to='/contact'
              item
              className={classes.link}
              onClick={() => {setValue(4); setSelectedIndex(4)}}>
              Contact Us
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <img
        alt='black decorative slash'
        className={classes.adornment}
        src={footerAdornment}
      />
    </footer>
  );
};

export default Footer;
