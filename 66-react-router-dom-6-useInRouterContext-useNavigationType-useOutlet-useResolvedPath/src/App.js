import React from 'react';
import {
  NavLink,
  useRoutes,
  useInRouterContext,
  useNavigationType,
} from 'react-router-dom';

import Header from './components/Header';
import routes from './routes';

const App = () => {
  const elements = useRoutes(routes);
  console.log('useInRouterContext', useInRouterContext());
  console.log('useNavigationType', useNavigationType()); // POP, PUSH, REPLACE
  return (
    <div>
      <Header />
      <div className='row'>
        <div className='col-xs-2 col-xs-offset-2'>
          <div className='list-group'>
            <NavLink to='/about' className='list-group-item'>
              About
            </NavLink>
            <NavLink to='/home' className='list-group-item'>
              Home
            </NavLink>
          </div>
        </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>{elements}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
