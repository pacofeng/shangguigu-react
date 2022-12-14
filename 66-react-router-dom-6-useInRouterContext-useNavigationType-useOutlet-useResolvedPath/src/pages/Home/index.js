import React from 'react';
import { NavLink, Outlet, useOutlet, useResolvedPath } from 'react-router-dom';

export default function Home() {
  console.log('useOutlet', useOutlet());
  console.log('useResolvedPath', useResolvedPath());

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
