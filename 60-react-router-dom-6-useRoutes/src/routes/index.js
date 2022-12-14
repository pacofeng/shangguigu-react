import { Navigate } from 'react-router-dom';
import About from '../components/About';
import Home from '../components/Home';

const routes = [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/*',
    element: <Navigate to='/home' />,
  },
];

export default routes;
