import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './ui/Header';
import { ThemeProvider } from '@material-ui/styles';
import theme from './ui/Theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header/>
        <Switch>
          <Route exact path='/' component={() => <div>Home</div>} />
          <Route exact path='/services' component={() => <div>Services</div>} />
          <Route exact path='/customsoftware' component={() => <div>Custom software</div>} />
          <Route exact path='/mobileapps' component={() => <div>Mobile apps</div>} />
          <Route exact path='/websites' component={() => <div>Websites</div>} />
          <Route exact path='/revolution' component={() => <div>Revolution</div>} />
          <Route exact path='/about' component={() => <div>About Us</div>} />
          <Route exact path='/contact' component={() => <div>Contact Us</div>} />
          <Route exact path='estimate' component={() => <div>Estimate</div>} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
