import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router } from "react-router-dom";

import {
  Post,
  NewUser,
  NewPost,
  NavBar,
  Login,
  Profile,
  SendMessage,
  Header,
} from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [userToken, setUserToken] = useState("");
  const [userLogin, setUserLogin] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [willDeliver, setWillDeliver] = useState(false);

  return (
    <main>
      <div className="NavBar">
        <Header />
        <NavBar />
      </div>

      <div className="body">
        <Route exact path="/">
          <Login
            userToken={userToken}
            setUserToken={setUserToken}
            userLogin={userLogin}
            userPassword={userPassword}
            setUserLogin={setUserLogin}
            setUserPassword={setUserPassword}
          />
        </Route>

        <Route path="/post">
          <Post
            allPosts={allPosts}
            setAllPosts={setAllPosts}
            willDeliver={willDeliver}
            setWillDeliver={setWillDeliver}
          />
        </Route>

        <Route path="/newpost" component={NewPost} />
        <Route path="/newuser" component={NewUser} />
        
        <Route path="/profile">
          <Profile
            userToken={userToken}
            userLogin={userLogin}
            setUserToken={setUserToken}
          />
        </Route>


        <Route path="/sendmessage">
          <SendMessage userLogin={userLogin} allPosts={allPosts} />
        </Route>

        
      </div>
    </main>
  );
};

const appElement = document.getElementById("app");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  appElement
);