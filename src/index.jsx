import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './app/store.js';
import App from './app/App';
import { PostsList } from './app/Posts/PostsList';
import { AddPostForm } from './app/Posts/AddPostForm';
import { SinglePostPage } from './app/Posts/SinglePostPage';
import {
  createBrowserRouter,  
  RouterProvider,
  Navigate
} from "react-router-dom";
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children : [
      {
          index : true,
          element : (
            <>
              <AddPostForm />
              <PostsList/>
            </> )
      },
      {
        path : "posts/:postId",
        element : <SinglePostPage /> 
      },
      {
        path:"*",
        element:<Navigate to="/" replace />
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
