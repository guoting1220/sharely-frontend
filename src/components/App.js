import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import LoadingSpinner from "./LoadingSpinner";
import { getTokenFromLSAndGetCurrentUserFromAPI } from '../actions/userActions';
import { fetchTitlesFromAPI } from '../actions/titlesActions';
import './App.css';
import NavBar from './NavBar';
import Alert from './Alert';
import Routes from './Routes';

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const dispatch = useDispatch();

  // Load user info from API. Until a user is logged in and they have a token, this should not run. It only needs to re-run when a user logs out, so the value of the token is a dependency for this effect.

  useEffect(() => {
    const loadUserAndPostsInfo = async () => {
      await dispatch(getTokenFromLSAndGetCurrentUserFromAPI());
      await dispatch(fetchTitlesFromAPI());
      setInfoLoaded(true);
    };

    // set infoLoaded to false while async loadUserAndPostsInfo runs; once the
    // data is fetched (or even if an error happens!), this will be set back to true to control the spinner.
    setInfoLoaded(false)
    loadUserAndPostsInfo();
  }, [dispatch]);

  if (!infoLoaded) return <LoadingSpinner />;

  return (
    <div className="App">
      <NavBar /> 
      <Alert />
      <Routes />
    </div>
  );
}

export default App;
