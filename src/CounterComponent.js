import React from 'react';
import {useState,useEffect} from 'react'

const CounterComponent = () => {

    let [count ,setCount]= useState(0)

    const increment = () => {
        
        if(count>9){
            setCount((count) => count+1)
            document.getElementById('reset').style.display='initial'
        }else{
            setCount((count) => count+1)
            document.getElementById('reset').style.display='none'
        }
       }
        
       const decrement = () => {
       
        if(count>0 && count<=11){
            setCount((count) => count-1)
            document.getElementById('reset').style.display='none'
        }
        else if(count>=11){
            setCount((count) => count-1)
        }
        else{
            alert('Number cannot be less than 0')
        }
       }

       const reset = () => {
        setCount((count) => 0)
       }

       useEffect(() => {
        console.log(count)
        
      });

    return (
        <div>
            <h1 id='num'>{count}</h1>
            <div className='Button-Wrapper'>
                <button onClick={decrement}>-</button>
                <button onClick={increment}>+</button>
               
            </div>
            <button onClick={reset} id='reset'>0</button>
        </div>
    );
}

export default CounterComponent;
