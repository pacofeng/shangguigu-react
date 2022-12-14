import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Header() {
  const navigate = useNavigate();

  const onNextClick = () => {
    navigate(1);
  };
  const onBackClick = () => {
    navigate(-1);
  };
  return (
    <div className='row'>
      <div className='col-xs-offset-2 col-xs-8'>
        <div className='page-header'>
          <h2>React Router Demo</h2>
        </div>
        <button onClick={onNextClick}>Next</button>
        <button onClick={onBackClick}>Back</button>
      </div>
    </div>
  );
}
