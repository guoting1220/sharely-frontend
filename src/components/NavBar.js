import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from "react-router-dom";
import './NavBar.css';
import { logout } from '../actions/userActions';


const NavBar = () => {
  const username = useSelector(store => store.user.username);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout());
  }

  function loggedInNav() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-4">
          <NavLink className="nav-link" exact to="/posts">
            All Items
            </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" exact to="/myposts">
            My Posts
            </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" exact to="/likes">
            Likes
            </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" exact to="/sentinvites">
            Sent Invites
            </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" exact to="/receivedinvites">
            Received Invites
            </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" exact to="/deals">
            Deals
            </NavLink>
        </li>
        <li className="nav-item mx-4 border border-secondary rounded-pill">
          <NavLink className="nav-link" exact to="/new">
            Add New Post
            </NavLink>
        </li>
        {/* <li className="nav-item mr-4">
          <NavLink className="nav-link" exact to="/profile">
            My Profile
            </NavLink>
        </li> */}
        <li className="nav-item ml-5">
          <Link className="nav-link" exact to="/" onClick={logOut}>
            Log out {username}
          </Link>
        </li>
      </ul>
    );
  }

  function loggedOutNav() {
    return (
      <ul className="navbar-nav ml-auto">
        <li className="nav-item mr-5">
          <NavLink className="nav-link" exact to="/posts">
            All Items
            </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/login">
            Login
            </NavLink>
        </li>
        <li className="nav-item mr-4">
          <NavLink className="nav-link" to="/signup">
            Sign Up
            </NavLink>
        </li>
      </ul>
    );
  }

  return (
    <nav className="NavBar navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
      <Link className="navbar-brand" exact to="/">
        Bay Sharing
      </Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {username ? loggedInNav() : loggedOutNav()}
      </div>
    </nav>
  )
}

export default NavBar;