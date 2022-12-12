import { useState } from 'react';

const App = () => {
  const [sum, setSum] = useState(0);
  const onAddClick = () => {
    setSum(sum + 1);
  };
  const onSubtractClick = () => {
    setSum((sum) => sum - 1);
  };
  return (
    <div>
      <h1>Sum: {sum}</h1>
      <button onClick={onAddClick}>Add</button>
      <button onClick={onSubtractClick}>Subtract</button>
    </div>
  );
};

export default App;
