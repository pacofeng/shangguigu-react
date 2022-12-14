import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Message() {
  const messageDetails = [
    { id: 1, title: 'this is title 1', content: 'this is content 1' },
    { id: 2, title: 'this is title 2', content: 'this is content 2' },
    { id: 3, title: 'this is title 3', content: 'this is content 3' },
    { id: 4, title: 'this is title 4', content: 'this is content 4' },
  ];
  return (
    <>
      <ul>
        {messageDetails.map((message) => (
          <li key={message.id}>
            <Link
              to={`detail/?id=${message.id}&title=${message.title}&content=${message.content}`}
            >
              {message.title}
            </Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
