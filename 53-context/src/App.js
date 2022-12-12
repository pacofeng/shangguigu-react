import Child from './Child';
import MyContext from './MyContext';

const App = () => {
  const data = {
    name: 'Paco',
  };
  return (
    <MyContext.Provider value={data}>
      this is App: {data.name}
      <Child />
    </MyContext.Provider>
  );
};

export default App;
