import React, { useState } from "react";
import axios from "axios";
import './style/NewUser.css'

const baseURL = "https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";




  
const NewUser = () => {
  const [userName, setUserName] = useState("");
  const [passWord, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  

  const addUser = async (event) => {
    event.preventDefault();
    if (passWord !== confirmPassword) {
      alert("PASSWORDS DON'T MATCH");

    } else {

      try {
        const response = await axios.post(`${baseURL}/users/NewUser`, {
          user: {
            username: userName,
            password: passWord,
          },
        });
        window.localStorage.setItem('token', response.data.data.token);
        setUserName(' ');
        setPassword(' ');

      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="NewUser">

      <h3>Please enter your info belwo to start using Stranger's Things</h3>
          <p>Username must have 6 characters / Password must have 4 characters </p>


      <form onSubmit={addUser}>

        <div className="username">
          <label>Username:</label>
          <br></br>
          <input
            type="text"
            required
            minLength={6}
            onChange={(event) => setUserName(event.target.value)}
          ></input>
        </div>


        <div className="password">
          <label>Password:</label>
          <br></br>
          <input
            type="password"
            required
            minLength={4}
            onChange={(event) => setPassword(event.target.value)}
          ></input>
          </div>


          <div>
          <label>Confirm Password:</label>
          <br></br>
          <input
            type="password"
            required
            minLength={4}
            onChange={(event) => setConfirmPassword(event.target.value)}
          ></input>
        </div>

        
          <div>
            <button type="submit" id="button">Create New Account</button>
          </div>
       
      </form>
    </div>
  );
};

export default NewUser;