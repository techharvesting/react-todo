import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import Todo from './Todo';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [newTodoName, setNewTodoName] = useState('');

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem('todos')));
  }, []);

  const handleNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      name: newTodoName,
      id: nanoid(12),
      done: false,
    };

    setTodos([...todos, newTodo]);
    localStorage.setItem('todos', JSON.stringify([...todos, newTodo]));
    setNewTodoName('');
  };

  const onCheck = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
      }
      return todo;
    });

    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  const onRemove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem('todos', JSON.stringify(newTodos));
  };

  return (
    <div>
      <div className={`max-w-fit px-4 p-2 rounded-2xl ${todos.length != 0 && 'border-2 border-zinc-200 hover:shadow-md transition-shadow'} `}>
        {todos.map((todo) => (
          <Todo
            todo={todo}
            key={todo.id}
            onCheck={() => onCheck(todo.id)}
            onRemove={() => onRemove(todo.id)}
          />
        ))}
      </div>
      <form onSubmit={handleNewTodo} className='flex mt-10'>
        <input
          type={'text'}
          placeholder='New Todo Item'
          value={newTodoName}
          onChange={(e) => setNewTodoName(e.target.value)}
          className='border-2 border-slate-800 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 transition-all ring-slate-700'
        />
        <button
          className='ml-2 bg-sky-300 rounded-lg px-3 hover:bg-sky-400 transition-all focus:ring-2 ring-sky-500 focus:outline-none'
          type='submit'
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default Todos;
