import React, { useEffect, useState,  } from "react";
import "./style/Profile.css";

const baseURL = "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Profile = ({ userToken }) => {
  const [allMessages, setAllMessages] = useState([]);
  const [userPosts, setUserPosts] = useState([]);
  const [currentUser, setCurrentUser] = useState("");

  

  useEffect(() => {
    const fetchMe = async () => {
      

      try {
        const response = await fetch(`${baseURL}/users/me`, {

          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,

          },
        });

        let results = await response.json();
        
        setAllMessages(results.data.messages);
        setUserPosts(results.data.posts);
        setCurrentUser(results.data.username);

      } catch (error) {}
    };
    fetchMe();
  }, [userPosts.active]);

  const deletePost = async (postID) => {
    const results = await fetch(`${baseURL}/posts/${postID}`, {

      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
    })


      .then((response) => response.json())
      .then((result) => {
        alert(`${userPosts.title} has been deleted`);
      })
      .catch(console.error);
  };

  return (
    <div>
      {currentUser ? (

        <h2 className="profileWelcome">
          Hello {currentUser} Welcome!{" "}
        </h2>

      ) : null}

      <h1>Messages</h1>

      {allMessages.length === 0 ? (

        <h3>You have no messages</h3>
      ) : (
        
        allMessages.map((myMessages, idx) => {
          return (
            <div key={idx} className="Messages">
              <p>Post: {myMessages.post.title}</p>
              <p>Sent From: {myMessages.fromUser.username}</p>
              <p>Message: {myMessages.content}</p>
            </div>
          );
        })
      )}

      <h1>Posts</h1>
      {userPosts.length === 0 ? (
        <h3>You have no posts to show</h3>
      ) : (
        userPosts.map((myPosts, idx) => {
          
          return (
            <div key={idx}  className="Posts">

              <span>Item for sale: </span> <span>{myPosts.title}</span>
              <p>Item description: {myPosts.description}</p>
              <p>Item Price: ${myPosts.price}</p>


              <div className="userPostsButtons">
                {myPosts.active ? <p className='PostUp'>This Post is still Posted</p> : 
                <p className='PostDown'>This Post has been deleted</p>}

                <button id="button">Edit Post</button>
                <button id="button" onClick={()=>deletePost(myPosts._id)}>Delete Post</button>

              </div>

            </div>
          );
        })
      )}
    </div>
  );
};

export default Profile;