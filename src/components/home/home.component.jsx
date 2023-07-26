import { Fragment, useState } from "react"

import { PlusSquare, XCircle } from 'react-feather';


const Home = () => {
  // State to hold the array of todo items
  const [todos, setTodos] = useState([]);

  // State to hold the input value for the new todo item
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = () => {

    const newTodoItem = {
      id: Date.now(),
      task: newTodo,
      completed: false,
    };

    setTodos(prevTodos => [...prevTodos, newTodoItem]);

    setNewTodo('');

    console.log(todos);
  }

  const handleDeleteTodo = (todoId) => {
    const updatedTools = todos.filter(todo => todo.id !== todoId);

    setTodos(updatedTools);
  }

  return (
    <Fragment>
      <section className='shadow-lg rounded-md bg-slate-100 p-8 w-96 h-3/6'>
        <h1 className="bg-violet-400 text-lg font-bold text-center tracking-wide rounded p-4">Todo List App</h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className='flex items-center border-b py-2'>
            <input 
              type='text' 
              placeholder='Add a new task' 
              value={newTodo} 
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={handleSubmit}><PlusSquare/></button>
          </div>
        </form>
        <ul>
          {todos.map(todo => {
            return(
              <li key={todo.id}>
                {todo.task}
                <button onClick={() => handleDeleteTodo(todo.id)}><XCircle/></button>
              </li>
            )
          })}
        </ul>
      </section>
    </Fragment>
  );
};

export default Home;