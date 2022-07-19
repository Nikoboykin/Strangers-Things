import React from "react";
import "./style/Login.css";

const baseURL ="https://strangers-things.herokuapp.com/api/2206-ftb-et-web-ft-b";

const Login = ({ 
        userToken, 
        setUserToken,
        userLogin,
        userPassword,
        setUserLogin, 
        setUserPassword
    }) => {
  

  

  const logInUser = async (event) => {
    event.preventDefault();
    fetch(`${baseURL}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: userLogin,
          password: userPassword,
        },
      }),
    })
      .then((response) => response.json())
      .then((result) => {
        window.localStorage.setItem("token", result.data.token);
        setUserToken(localStorage.getItem("token"));
      })
      .catch(console.error);
  };

  return (
    <main>
      <h1 className="Header">
        Please Login to Stranger's Things
      </h1>

      {userToken ? <h1 className='userName'>You are now logged in as {userLogin}</h1> :
      <div className="login">

        <form onSubmit={logInUser}>
          
          <label>Username</label>
          
          <br></br>
          <input
            type="text"
            required
            onChange={(event) => setUserLogin(event.target.value)}
          ></input>
          <br></br>

          <label>Password</label>

          <br></br>
          <input
            type="password"
            required
            onChange={(event) => setUserPassword(event.target.value)}
          ></input>
          <br></br>

          <button type="submit" id="button">Log In</button>

        </form>
      </div>
      
    }
    </main>
  );
};

export default Login;