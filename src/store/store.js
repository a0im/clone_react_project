import { configureStore , createSlice } from "@reduxjs/toolkit";

let contentData = createSlice({
  name : 'contentData' ,
  initialState : null,
  reducers : {
    setContent(state , action){
      return action.payload
    }
  }
}) 

export let {setContent} = contentData.actions;

const store = configureStore({
  reducer : {
    contentData : contentData.reducer
  }
})

export default store