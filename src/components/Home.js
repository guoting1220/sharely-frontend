import React from 'react';
// import './Home.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Home = () => {
  const token = useSelector(store => store.user.token);

  const logInAndSignUpBtns = !token ?
    <div>
      <Link exact to="/login">
        <button className="btn btn-primary mx-4 my-2">Log in</button>
      </Link>
      <Link exact to="/signup">
        <button className="btn btn-primary">Sign up</button>
      </Link>
    </div>
    : null;

  return (
    <div  className="Home d-flex align-items-center vh-100 ">
      <div className="container bg-light border rounded py-5" >
        <h1 className="mb-5">Welcome to Bay Sharing!</h1>
        <p>
          The best place to find other people and families to share your belongings in Bay Area!
        </p>
        {logInAndSignUpBtns}
      </div>
    </div>
  )
}

export default Home;