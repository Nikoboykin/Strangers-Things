import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import './style/Post.css'; 




const baseURL = "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Post = ({allPosts, setAllPosts}) => {
  
  console.log(allPosts)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(`${baseURL}/posts`); 
        setAllPosts(response.data.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
    
  }, []);

  
  return (
    <>
      <h1>Posts</h1>
      {allPosts.map((eachPost, idx) => {
          return (
            
            <div key={idx} className="post">
              <span>Item for sale: </span> <span>{eachPost.title}</span>


              <p>Item description: {eachPost.description}</p>
              <p>Item Price: ${eachPost.price}</p>
              <p>Location: {eachPost.location}</p>
              <p>Seller: {eachPost.author.username}</p>
              {eachPost.willDeliver ? <p>Seller willing to deliver</p> : <p>Pick up only</p>}


              
                <div className='button'>
                  <Link to='/sendmessage'>
                    <button id='button'>Talk to Seller</button>
                  </Link>
                </div>
            </div>
          );
        })}
    </>
  )
  
};



export default Post;