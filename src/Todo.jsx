import { BsTrash2Fill } from 'react-icons/bs';

const Todo = ({ todo, onCheck, onRemove }) => {
  return (
    <div>
        <input
          type={'checkbox'}
          checked={todo.done}
          onChange={onCheck}
          id={todo.id}
          className='mr-1 accent-sky-700 focus:outline-none'
        />
        <label
          htmlFor={todo.id}
          className={`${todo.done && 'line-through decoration-sky-600'} mr-4`}
        >
          {todo.name}
        </label>
      <button
        className='ml-2 bg-red-300 rounded-lg px-3 hover:bg-red-200 transition-all focus:ring-2 ring-red-400 focus:outline-none py-2 my-0.5'
        onClick={onRemove}
      >
        <BsTrash2Fill />
      </button>
    </div>
  );
};

export default Todo;
