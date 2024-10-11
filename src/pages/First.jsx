import React from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addTouser } from '../Redux/Userslice'
import { Link } from 'react-router-dom'

function First() {
    const dispatch = useDispatch()
    function apiDisplay(){
        axios.get("https://jsonplaceholder.typicode.com/users").then((res)=>{console.log(res.data)
            dispatch(addTouser(res.data))

        })
    }
  return (
    <div>
    <Link to={"/second"}>second</Link>
    <button onClick={apiDisplay}>DataFetch</button>
    </div>
  )
}

export default First