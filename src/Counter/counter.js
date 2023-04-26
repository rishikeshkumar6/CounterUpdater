import React, {useState} from 'react'

export function CounterApp(){
    let [count,setcount]=useState(1)

    function increment(){
        setcount(count+1)
    }
    function decrement(){
        setcount(count-1)
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>increase</button>
            <button onClick={decrement}>decrease</button>
        </div>
    )
}