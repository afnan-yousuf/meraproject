import React, { useState } from 'react'
import abc from './Counter.module.css'
function Counter() {

    const [count, setCount] = useState(0);
    
    function add(){
        setCount(count + 1);
        console.log(count);
    }

  return (
    <>
        <div>Counter</div>
        <p className={abc.para}>{count}</p>
        <input type="button" value="Cilck Me" onClick={add} />
    </>
  )
}

export default Counter