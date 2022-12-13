import { memo } from 'react';

const ChildFunction = memo((props) => {
  console.log('render ChildFunction...');
  return <div>this is ChildFunction: {props.name}</div>;
});

export default ChildFunction;
