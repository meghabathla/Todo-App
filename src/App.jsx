import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const intialStateValue = [{
  title: "Got to gym",
  description: "between 6-8",
},
{
  title: "Got to library",
  description: "between 4-5",
},
{
  title: "meet friend",
  description: "between 5-6",
}]

function App(){
  const [todos, setTodos]= useState(intialStateValue);

  const addTodo= ()=>{
    const newArr=[...todos];
    newArr.push({title: "cooking", description: "8-10"})
    setTodos(newArr)
  }

  return(
    <div>  
      { todos.map(function(todo) {
        return <Todo title={todo.title} description={todo.description} />
      })}
      <button onClick={addTodo}>Add me</button>
    </div>
  )
}


function Todo(props){
  return <div>
    <p>{props.title}</p>
    <p>{props.description}</p>
  </div>
}




























/*

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
       
        <CustomButton count={count} setCount={setCount}></CustomButton>
            </div>
    
  )
}
function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count + 1);
  }
  return <button onClick={onClickHandler}> Counter {props.count}</button>
} */

export default App
