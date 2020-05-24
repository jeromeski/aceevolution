import React, { useState, useEffect, Fragment } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import { makeStyles } from '@material-ui/styles';

import logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function ElevationScroll(props) {
  const { children } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles(theme => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '8em'
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginRight: '25px',
    height: '45px'
  },
  logoContainer: {
    padding: 0
  },
  menu: {
    backgroundColor: theme.palette.common.blue,
    color: 'white',
    borderRadius: '0px'
  },
  menuItem: {
    ...theme.typography.tab,
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  }
}));

const Header = (props) => {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => {
    setValue(value);
  };

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };

  const handleClose = e => {
    setAnchorEl(null);
    setOpen(false);
  };

  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/aboutus' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contactus' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5);
    }
  }, [value]);
  return (
    <Fragment>
      <ElevationScroll>
        <AppBar position='fixed'>
          <Toolbar disableGutters>
            <Button
              to='/'
              component={Link}
              className={classes.logoContainer}
              onClick={() => {
                setValue(0);
              }}>
              <img src={logo} alt='logo' className={classes.logo} />
            </Button>

            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainer}
              indicatorColor='primary'>
              <Tab
                component={Link}
                to='/'
                className={classes.tab}
                label='Home'
              />
              <Tab
                component={Link}
                to='/services'
                className={classes.tab}
                label='Services'
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                onMouseOver={event => handleClick(event)}
              />
              <Tab
                component={Link}
                to='/revolution'
                className={classes.tab}
                label='The Revolution'
              />
              <Tab
                component={Link}
                to='/about'
                className={classes.tab}
                label='About Us'
              />
              <Tab
                component={Link}
                to='/contact'
                className={classes.tab}
                label='Contact Us'
              />
            </Tabs>
            <Button
              variant='contained'
              color='secondary'
              className={classes.button}>
              Free Estimate
            </Button>
            <Menu
              id='simple-menu'
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{paper: classes.menu}}
              elevation={0}
              >
              <MenuItem onClick={() => {handleClose(); setValue(1) }} component={Link} to='/services'
              classes={{root: classes.menuItem}}
              >
                Services
              </MenuItem>
              <MenuItem onClick={() => {handleClose(); setValue(1) }} component={Link} to='/customsoftware' classes={{root: classes.menuItem}}>
                Custom Software Development
              </MenuItem>
              <MenuItem onClick={() => {handleClose(); setValue(1) }} component={Link} to='/mobileapps' classes={{root: classes.menuItem}}>Mobile App Development</MenuItem>
              <MenuItem onClick={() => {handleClose(); setValue(1) }} component={Link} to='/websites' classes={{root: classes.menuItem}}>Website Development</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </Fragment>
  );
};

export default Header;
