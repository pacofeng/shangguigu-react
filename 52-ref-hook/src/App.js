import { useRef } from 'react';

const App = () => {
  const inputEl = useRef();
  const showValue = () => {
    console.log(inputEl.current.value);
  };

  return (
    <div>
      <input type='text' ref={inputEl} />
      <button onClick={showValue}>Show</button>
    </div>
  );
};

export default App;
