import React, { Component, lazy, Suspense } from 'react';
import { Link, Route } from 'react-router-dom';

const Home = lazy(() => import('./components/Home'));
const About = lazy(() => import('./components/About'));

class App extends Component {
  render() {
    return (
      <div>
        <div className='row'>
          <div className='col-xs-offset-2 col-xs-8'>
            <div className='page-header'>
              <h2>Lazy Load</h2>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-xs-2 col-xs-offset-2'>
            <div className='list-group'>
              <Link className='list-group-item' to='/about'>
                About
              </Link>
              <Link className='list-group-item' to='/home'>
                Home
              </Link>
            </div>
          </div>
          <div className='col-xs-6'>
            <div className='panel'>
              <div className='panel-body'>
                <Suspense fallback={<div>Loading.....</div>}>
                  <Route path='/about' component={About} />
                  <Route path='/home' component={Home} />
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
