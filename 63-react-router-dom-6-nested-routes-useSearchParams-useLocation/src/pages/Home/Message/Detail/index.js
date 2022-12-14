import React from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';

export default function Detail() {
  const [search, setSearch] = useSearchParams();
  const location = useLocation();
  console.log(location);

  const onSetSearchClick = () => {
    setSearch('id=99999&title=customtitle&content=customcontent');
  };
  return (
    <>
      <div>ID: {search.get('id')}</div>
      <div>TITLE: {search.get('title')}</div>
      <div>CONTENT: {search.get('content')}</div>
      <button onClick={onSetSearchClick}>set search</button>
    </>
  );
}
