import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SharelyApi from '../api/api';
import { getTokenFromLSAndGetCurrentUserFromAPI } from '../actions/userActions';
import { showErr } from '../actions/errorsActions';
import { fetchTitlesFromAPI } from '../actions/titlesActions';



const LoginForm = () => {
  const initialFormData = {
    username: "",
    password: ""
  }
  const [formData, setFormData] = useState(initialFormData);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(formData => ({
      ...formData,
      [name]: value
    }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let token = await SharelyApi.login(formData);
      window.localStorage.setItem("sharely-token", token);
      await dispatch(getTokenFromLSAndGetCurrentUserFromAPI());
      await dispatch(fetchTitlesFromAPI());
      history.push('/posts');
      // setFormData(initialFormData);
    }
    catch (errors) {
      console.error("Login failed", errors);
      dispatch(showErr(errors));
    }
  }

  return (
    <div className="LoginForm container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <h1 className="my-5 font-weight-bold .display-4">Login</h1>
          <div className="authForm-formBody">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input className="form-control shadow-sm rounded"
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input className="form-control shadow-sm rounded"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </div>
              <button className="btn btn-success">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}


export default LoginForm;