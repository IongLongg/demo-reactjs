import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation,
} from "react-router-dom";
import Game from "./routers/Game";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/game">Game</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
          <PrivateRoute path="/game">
            <AuthButton />
            <Game />
          </PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

// You can think of these components as "pages"
// in your app.

// fake event
const fakeAuth = {
  isAuthenticated: false,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  },
};

function AuthButton() {
  let history = useHistory();

  return fakeAuth.isAuthenticated ? (
    <div>
      <p>Welcome {"Long"}</p>
      <button
        onClick={() => {
          fakeAuth.signout(() => history.push("/"));
        }}
      >
        Sign out
      </button>
    </div>
  ) : null;
}

// define PrivateRoute
function PrivateRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        fakeAuth.isAuthenticated ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login", // placeholder page
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  const { register, handleSubmit, errors } = useForm();

  let { from } = location.state || { from: { pathname: "/" } };
  let login = (data) => {
    console.log(data);
    fakeAuth.authenticate(() => {
      history.replace(from); // allow back to home and still login
    });
  };

  return (
    <div>
      <p>You must log in to view the Game</p>
      <form onSubmit={handleSubmit(login)}>
        <input name="email" type="email" placeholder="Email" ref={register} />
        <input
          name="password"
          type="password"
          placeholder="Password"
          ref={register({
            required: { value: true, message: "Password is required"},
            minLength: { value: 8, message: "Too short" }
          })}
        />
        <input type="submit" />
        <p>{errors.password && errors.password.message}</p>
      </form>
    </div>
  );
}
