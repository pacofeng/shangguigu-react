import React, { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Header from './components/Header';
import MyNavLink from './components/MyNavLink';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              <MyNavLink to='/about'>About</MyNavLink>
              <MyNavLink to='/home'>Home</MyNavLink>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                <Switch>
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                  <Redirect to='home' />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
