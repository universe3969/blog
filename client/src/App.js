import React, {useEffect, useState } from 'react';
import './App.css';

import {useDispatch} from 'react-redux';
import {getPosts} from './actions/posts';

import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';


export default function App () {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      dispatch(getPosts());
    }, 500);
  }, [currentId, dispatch]);

  return (
    <div className="app-container">
      <div className="header">Posts</div>
      <div className="app">
        <Posts setCurrentId={setCurrentId}/>
        <Form currentId={currentId} setCurrentId={setCurrentId}/>
      </div>
    </div>
  );
}