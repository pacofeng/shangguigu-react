import React from 'react';
import { useParams, useMatch } from 'react-router-dom';

export default function Detail() {
  const { id, title, content } = useParams();
  const mathDetail = useMatch('/home/message/detail/:id/:title/:content');
  console.log(mathDetail);
  return (
    <>
      <div>ID: {id}</div>
      <div>TITLE: {title}</div>
      <div>CONTENT: {content}</div>
    </>
  );
}
