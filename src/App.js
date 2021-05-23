import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Home from './components/Home';
import ItemList from './components/itemList';
import Post from './components/Post';
import PostList from './components/PostList';
import UserList from './components/UserList';

function App() {
  return (
    <div>
      <Router>
        <div>
          <ul className="nav">
            <li className="nav-item">
              <Link clLinkssNLinkme="nav-link active" to="/">R</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/postlist">Posts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/posts">Postings</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/itemlist">Items</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/userList">UserList</Link>
            </li>
          </ul>

          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/posts">
              <Post />
            </Route>
            <Route path="/userlist">
              <UserList />
            </Route>
            <Route path="/postlist">
              <PostList />
            </Route>
            <Route path="/itemlist">
              <ItemList />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
