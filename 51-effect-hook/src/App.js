import { useState, useEffect } from 'react';

const App = () => {
  const [sum, setSum] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSum((sum) => sum + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Sum: {sum}</h1>
    </div>
  );
};

export default App;
