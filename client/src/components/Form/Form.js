import React, {useState, useEffect} from 'react';
import FileBase from 'react-file-base64';
import {useDispatch, useSelector} from 'react-redux';
import {createPost, updatePost} from '../../actions/posts';
import './Form.css';


export default function Form ({currentId, setCurrentId}) {

  const initialFormData = {
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: null
  };
  const [postData, setPostData] = useState(initialFormData);
  const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (post) setPostData(post);

  }, [post])

  const handleSubmit = (e) => {
    e.preventDefault();
    const {title, creator, message} = postData;
    if (!title || !creator || !message) {
      alert('Please fill in all required fields');
      return;
    }

    if (currentId) {
      dispatch(updatePost(currentId, postData));
    } else {
      dispatch(createPost(postData));
    }
    clearForm();
  };

  const handleChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  };

  const clearForm = () => {
    setCurrentId(null);
    setPostData(initialFormData);
  };


  return (
    <div className="form-container">
      <h2>{currentId ? 'Editing' : 'Creating' } a post</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="title-container">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={postData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="creator-container">
          <label htmlFor="creator">Creator</label>
          <input
            type="text"
            id="creator"
            name="creator"
            value={postData.creator}
            onChange={handleChange}
            required
          />
        </div>
        <div className="message-container">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={postData.message}
            onChange={handleChange}
            required
          />
        </div>
        <div className="tags-container">
          <label htmlFor="tags">Tags</label>
          <input
            type="text"
            id="tags"
            name="tags"
            value={postData.tags}
            onChange={handleChange}
          />
        </div>
        <div className="upload-file-container">
          <FileBase
            type="file"
            multiple={false}
            onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
          />
        </div>
        <button className="submit-button" type="submit">Submit</button>
        <button className="clear-button" type="button" onClick={clearForm}>Clear</button>
      </form>
    </div>
  );
}
