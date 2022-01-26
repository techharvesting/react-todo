import Todos from './components/Todos';

function App() {
  return (
    <>
      <div className='flex align-middle justify-center mt-4'>
        <h1 className='text-3xl text-slate-700 font-bold'>My Todo List</h1>
      </div>
      <div className='flex align-middle justify-center mt-10'>
        <Todos />
      </div>
    </>
  );
}

export default App;
