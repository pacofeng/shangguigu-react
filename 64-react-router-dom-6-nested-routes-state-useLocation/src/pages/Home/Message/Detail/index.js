import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Detail() {
  const { state } = useLocation();
  return (
    <>
      <div>ID: {state.id}</div>
      <div>TITLE: {state.title}</div>
      <div>CONTENT: {state.content}</div>
    </>
  );
}
