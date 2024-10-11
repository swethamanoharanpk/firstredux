import React from "react";
import { useSelector, useDispatch } from 'react-redux'
import { deleteData } from "../Redux/Userslice";



const Second = () => {
    const dispatch = useDispatch()

    function removeData() {
        dispatch(deleteData())

    }


    const get = useSelector((event) => event.userInfo.user[0])
    return (
        <div>
            {get?.map((li) => {
                return(
                <h1>{li.name}</h1>
                )
            })}


            <button onClick={removeData}>Remove</button>


        </div>
    )
}
export default Second
