import './App.css';
import {useState} from 'react';

function Counter() {
 const [counter,setCounter] = useState(10);

 const increment =() =>{
  setCounter(counter+1)
 }
 
 
 const reset =() =>{
  setCounter(0)
  console.log("reset",counter)
 }

 const decrement =() =>{
  setCounter(counter-1)
 }

  return (
    <div>
    <div className="App">
     <button onClick={increment}>+</button>
     <span className='result' style={{"margin":"25px"} }>{counter} </span>
     <button onClick={decrement}>-</button>
     </div>

     <div className='reset'>
        <button onClick={reset}>Reset</button>
        </div>

     </div>
  );
}

export default Counter;