import {createSlice} from '@reduxjs/toolkit'

const userData = createSlice({
    name:"userInfo",
    initialState:{
        user:[]
    },
    reducers:{
        addTouser:(state,action)=>{
            console.log("fetched data",action);
            state.user.push(action.payload)
        },
        deleteData:(state,action)=>{
            state.user = []
        }

    }
})
export const {addTouser,deleteData} = userData.actions
export default userData.reducer
