import GrandchildFunction from './GrandchildFunction';
import GrandchildClass from './GrandchildClass';

const Child = () => {
  return (
    <div>
      this is Child
      <GrandchildFunction />
      <GrandchildClass />
    </div>
  );
};

export default Child;
