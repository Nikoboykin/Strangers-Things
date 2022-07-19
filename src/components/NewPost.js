import React, { useState, useEffect } from "react";
import './style/NewPosts.css'

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);
  const [userToken, setUserToken] = useState("");

  const baseURL = "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

  useEffect(() => {
    setUserToken(localStorage.getItem("token"));
    console.log(userToken);
  }, []);

  const addNewPost = async (event) => {
    event.preventDefault();
    try {
      await fetch(`${baseURL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userToken}`,
        },
        body: JSON.stringify({
          post: {
            title: title,
            description: description,
            price: `${price}`,
            willDeliver: willDeliver,
          },
        }),
      });
      alert("Your Post is now Up!")
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="newPostsPage">
      <form onSubmit={addNewPost}>

        <div>
          <label>Product Name</label>
          <br></br>
          <input className='newPosts' type="text" onChange={(event) => setTitle(event.target.value)}></input>
        </div>
        <br></br>


        <div>
          <label>Description:</label>
          <br></br>
          <input className='newPosts' type="text" onChange={(event) => setDescription(event.target.value)}></input>
        </div>


        <div>
          <label>Price $:</label>
          <br></br>
          <input className='newPosts' type="text" onChange={(event) => setPrice(event.target.value)}></input>
        </div>


        <div>
          <label>Location</label>
          <br></br>
          <input className='newPosts' type="text" onChange={(event) => setLocation(event.target.value)}></input>
        </div>


        <div>
          <label>Will Deliver</label>
          <input type="checkbox" onClick={()=>setWillDeliver(true)}></input>
        </div>


        <div className='newPostsSubmit'>
          <button type="submit" id="button">Post</button>
        </div>
        
      </form>
    </div>
  );
};

export default NewPost;