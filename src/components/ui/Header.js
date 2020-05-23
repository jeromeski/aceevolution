import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { useScrollTrigger, Typography } from '@material-ui/core';

function ElevationScroll(props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const Header = props => {
  return (
    <ElevationScroll>
      <AppBar position='fixed'>
        <Toolbar>
          <Typography variant='h3'>Ace Evolution</Typography>
        </Toolbar>
      </AppBar>
    </ElevationScroll>
  );
};

export default Header;
