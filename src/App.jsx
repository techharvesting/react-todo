import Todos from './Todos';

function App() {
  return (
    <div>
      <div className='flex align-center justify-center mt-4'>
        <h1 className='text-3xl text-slate-700 font-bold'>My Todo List</h1>
      </div>
      <div className='flex align-center justify-center mt-10'>
        <Todos />
      </div>
    </div>
  );
}

export default App;
