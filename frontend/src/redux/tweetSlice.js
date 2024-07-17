import {createSlice} from "@reduxjs/toolkit";
import { BOOKMARK_TOGGLE, GET_BOOKMARKS } from './types';

const tweetSlice = createSlice({
    name:"tweet",
    initialState:{
        tweets:null,
        refresh:false,
        isActive:true,
        
        

    },
    reducers:{
        getAllTweets:(state,action)=>{
            state.tweets = action.payload;
        },
        getRefresh:(state)=>{
            state.refresh = !state.refresh;
        },
        getIsActive:(state,action)=>{
            state.isActive = action.payload;
        }
    },
});
export const {getAllTweets,getRefresh,getIsActive} = tweetSlice.actions;
export default tweetSlice.reducer;