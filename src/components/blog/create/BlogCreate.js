import React, { useState } from 'react';
import {useDispatch} from "react-redux";
import {createBlog,ResetClear} from "../../../actions/blogAction"

const BlogCreate = () => {
    const [inputValue, setInputValue] = useState({
        title: '',
        content: '',
        image: null
      });
const dispatch=useDispatch()

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'image') {
      setInputValue(prev => ({ ...prev, [name]: files[0] }));
    } else {
      setInputValue(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    
    dispatch(createBlog(inputValue));
    setInputValue({
      title: '',
      content: '',
      image: null
    });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Create a New Blog Post</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="blogTitle" className="form-label">Title</label>
              <input 
                type="text" 
                className="form-control" 
                id="blogTitle" 
                placeholder="Enter blog title" 
                name='title'
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="blogContent" className="form-label">Content</label>
              <textarea 
                className="form-control" 
                id="blogContent" 
                rows="5" 
                placeholder="Write your blog content here"
               name='content'
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="blogImage" className="form-label">Upload Image</label>
              <input 
                type="file" 
                className="form-control" 
                id="blogImage" 
                name='image'
                onChange={handleChange}
                accept="image/*"
              />
            </div>

            <button type="submit" className="btn btn-primary">Submit Post</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogCreate;