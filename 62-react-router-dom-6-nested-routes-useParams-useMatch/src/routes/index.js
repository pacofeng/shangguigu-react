import { Navigate } from 'react-router-dom';
import About from '../pages/About';
import Home from '../pages/Home';
import Message from '../pages/Home/Message';
import Detail from '../pages/Home/Message/Detail';
import News from '../pages/Home/News';

const routes = [
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/home',
    element: <Home />,
    children: [
      {
        path: 'message',
        element: <Message />,
        children: [
          {
            path: 'detail/:id/:title/:content',
            element: <Detail />,
          },
        ],
      },
      {
        path: 'news',
        element: <News />,
      },
    ],
  },
  {
    path: '/*',
    element: <Navigate to='/home' />,
  },
];

export default routes;
