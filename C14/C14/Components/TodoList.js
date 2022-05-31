import React,{useState} from 'react'
import Todo from './Todo';
import TodoF from './TodoF'

function TodoList() {
    const[todos,setTodos] = useState([]);
    const addTodo = todo =>{
        const newTodos = [todo,...todos];
        setTodos(newTodos);

    }
    const completeTodo= id =>{
        let updatedTodos = todos.map(todo => {
            return todo;
        });
        setTodos(updatedTodos);
    };
    

  return (
    <div>
      <h1>Shopping?</h1>
      <TodoF onSubmit={addTodo}/>
      <Todo todos={todos} completeTodo={completeTodo}/>
    </div>
  )
}

export default TodoList
