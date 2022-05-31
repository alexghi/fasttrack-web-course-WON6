import React,{useState} from 'react'

function TodoF(props) {
    const[input,setInput] = useState('');
    const InputChange= e => {
        setInput(e.target.value);
    }
const dont = e => {
    e.preventDefault();
    props.onSubmit({
        id:Math.floor(Math.random()*100),
        text:input
    });

 setInput('')
}

  return (
    <form className='todo-f' onSubmit={dont}>
        <input type="text"
         placeholder='What you want?'
         value={input}
        name='text'
         className='todo-input'
         onChange={InputChange}
         />
         <button className='todo-button'>Shopping-list</button>
    </form>
  )
}

export default TodoF

