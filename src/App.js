import Icon from './patterns/01-atoms/images/Icon';
import Sidebar from './patterns/02-molecules/navigation/Sidebar';
import classNames from 'classnames';

function App() {
  return (
    // <div className={classNames('flex','flex-col', 'w-full')}>
    <div className={classNames('bg-gray-200', 'w-full', 'h-full', 'absolute', 'p-0', 'm-0'
    ,'overflow-x-hidden')}>
      <Sidebar />
      {/* <div>
        <h1 className="text-5xl font-serif font-bold tracking-tight">
          Hello World
        </h1>
        <Icon type="MagnifyingGlass" color="Crystal-Clear Teal" size="Large" />
      </div> */}
    </div>
  );
}

export default App;
