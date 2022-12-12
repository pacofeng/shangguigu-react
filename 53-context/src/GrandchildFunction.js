import MyContext from './MyContext';

const GrandchildFunction = () => {
  return (
    <div>
      this is Grandchild:
      <MyContext.Consumer>{(value) => value.name}</MyContext.Consumer>
    </div>
  );
};

export default GrandchildFunction;
