import React from 'react';
import moment from 'moment';
import { AiFillDelete, AiFillLike } from 'react-icons/ai';
import { BsThreeDots } from 'react-icons/bs';
import './Post.css';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/posts';
export default function Post({ post, setCurrentId }) {
  const time = moment(post.createdAt).fromNow();
  const creator = post.creator;
  const likes = post.likeCount;
  const message = post.message;
  const pic = post.selectedFile;
  const tags = post.tags;
  const title = post.title;

  const dispatch = useDispatch();
  return (
    <div className="post">
      <div
        className="post-header-image-container"
        style={{ backgroundImage: `url(${pic})` }}
      >
        <div className="post-header">
          <div className="post-header-left">
            <div className="post-header-title">{title}</div>
            <div className="post-header-subtitle">
              {creator} • {time}
            </div>
          </div>
          <div className="post-header-right">
            <BsThreeDots className="post-header-icon" onClick={() => setCurrentId(post._id)}/>
          </div>
        </div>
      </div>
      <div className="post-content">
      <div className="post-tags">#{tags}</div>
        <div className="post-message">{message}</div>
      </div>
      <div className="post-footer">
        <div className="post-footer-left">
          <AiFillLike className="post-footer-icon" onClick={() => dispatch(likePost(post._id))}/>
          <div className="post-footer-text">{likes} likes</div>
        </div>
        <div className="post-footer-right">
          <AiFillDelete className="post-footer-icon" onClick={() => dispatch(deletePost(post._id))}/>
        </div>
      </div>
    </div>
  );
}
