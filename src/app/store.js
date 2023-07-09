import { configureStore } from "@reduxjs/toolkit";
import postsReducer from './Posts/postsReducer';

export default configureStore({
    reducer : {
       posts : postsReducer
    }
});