import React from 'react';
import Post from './Post/Post';

import {useSelector} from 'react-redux';
export default function Posts ({setCurrentId}) {
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    !posts.length ? null : (
      <div className="posts-container">
        {posts.map((post) => (
          <Post key={post._id} post={post} setCurrentId={setCurrentId}/>
        ))}
      </div>
    )
  );
}