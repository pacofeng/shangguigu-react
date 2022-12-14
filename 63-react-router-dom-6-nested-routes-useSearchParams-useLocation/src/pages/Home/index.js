import React, { Component } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
      <>
        <h2>Home组件内容</h2>
        <ul className='nav nav-tabs'>
          <li>
            <NavLink to='news' className='list-group-item'>
              News
            </NavLink>
          </li>
          <li>
            <NavLink to='message' className='list-group-item'>
              Message
            </NavLink>
          </li>
        </ul>
        <Outlet />
      </>
    );
  }
}
