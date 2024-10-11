import React, { useEffect, useState } from 'react'

export const Third = () => {
    const [state,setState] = useState(0)
    useEffect(()=>{
        var i = 0
        var interval = setInterval(()=>{
            i++;
            console.log(i)
        },1000)
        return ()=>clearInterval(interval)
    },[state])
  return (
    <div>
    <h2>{state}</h2>
    <button onClick={()=> setState(state+1)}>click</button>
    </div>
  )
}
