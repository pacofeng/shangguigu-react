import React from 'react';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';

const App = () => {
  return (
    <div>
      <div className='row'>
        <div className='col-xs-offset-2 col-xs-8'>
          <div className='page-header'>
            <h2>React Router Demo</h2>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-xs-2 col-xs-offset-2'>
          <div className='list-group'>
            <NavLink className='list-group-item' to='/about'>
              About
            </NavLink>
            <NavLink className='list-group-item' to='/home'>
              Home
            </NavLink>
          </div>
        </div>
        <div className='col-xs-6'>
          <div className='panel'>
            <div className='panel-body'>
              <Routes>
                <Route path='/about' caseSensitive element={<About />} />
                <Route path='/home' element={<Home />} />
                <Route path='/' element={<Navigate to='/home' />} />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
