import React from 'react';
import { useNavigate, Outlet } from 'react-router-dom';

export default function Message() {
  const navigate = useNavigate();
  const messageDetails = [
    { id: 1, title: 'this is title 1', content: 'this is content 1' },
    { id: 2, title: 'this is title 2', content: 'this is content 2' },
    { id: 3, title: 'this is title 3', content: 'this is content 3' },
    { id: 4, title: 'this is title 4', content: 'this is content 4' },
  ];

  const onMessageClick = (message) => {
    navigate('detail', {
      replace: false,
      state: {
        id: message.id,
        title: message.title,
        content: message.content,
      },
    });
  };

  return (
    <>
      <ul>
        {messageDetails.map((message) => (
          <li key={message.id}>
            <button onClick={() => onMessageClick(message)}>
              {message.title}
            </button>
          </li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
