import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Grid,
  IconButton,
  Typography,
  useMediaQuery,
  TextField
} from '@material-ui/core';
import background from '../assets/background.jpg'

const useStyles = makeStyles(theme => ({
  background: {
    backgroundImage: `url(${background})`,
    backgroundPosition: 'center',
    backgroundSize: ' cover',
    backgroundRepeat: 'no-repeat',
    height: '60em',
  }
}))

const Contact = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Grid container direction='row'>
     <Grid item container direction='column' lg={3}>
       <Typography variant='h2' style={{lineHeight: 1}}> Contact Us</Typography>
       <Typography variant='body1' style={{ color: theme.palette.common.blue}}> We're waiting</Typography>
     </Grid>
     <Grid item container className={classes.background} lg={9}></Grid>

    </Grid>
  );
};

export default Contact;