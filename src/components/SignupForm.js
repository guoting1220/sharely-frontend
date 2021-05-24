import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import SharelyApi from '../api/api';
import { getTokenFromLSAndGetCurrentUserFromAPI } from '../actions/userActions';
import { fetchTitlesFromAPI } from '../actions/titlesActions';
import { showErr } from '../actions/errorsActions';
import { Formik, Form } from 'formik';
import { TextField } from './formField';
import * as Yup from 'yup';


const SignupForm = () => {
  const initialFormData = {
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  }

  const dispatch = useDispatch();
  const history = useHistory();

  const registerUser = async (userData) => {
    try {
      let token = await SharelyApi.signup(userData);
      window.localStorage.setItem("sharely-token", token);
      await dispatch(getTokenFromLSAndGetCurrentUserFromAPI());
      await dispatch(fetchTitlesFromAPI());
      history.push('/posts')
    }
    catch (errors) {
      console.error("Signup failed", errors);
      dispatch(showErr(errors));
    }
  }


  const validate = Yup.object({
    username: Yup.string()
      .max(25, 'Must be 25 characters or less')
      .required('Required'),
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .max(20, 'Password must be no langer than 20 charaters')
      .required('Password is required')
  })

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <Formik
            initialValues={initialFormData}
            validationSchema={validate}
            onSubmit={(values) => registerUser(values)}
          >
            {({ handleSubmit, handleChange, values }) => (
              <div>
                <h1 className="my-5 font-weight-bold .display-4">Sign Up</h1>
                <Form onSubmit={handleSubmit}>
                  <TextField label="Username" name="username" type="text" value={values.username} onChange={handleChange} />
                  <TextField label="First Name" name="firstName" type="text" value={values.firstName} onChange={handleChange} />
                  <TextField label="last Name" name="lastName" type="text" value={values.lastName} onChange={handleChange} />
                  <TextField label="Email" name="email" type="text" value={values.email} onChange={handleChange} />
                  <TextField label="password" name="password" type="password" value={values.password} onChange={handleChange} />
                  <button className="btn btn-dark mt-3" type="submit">Register</button>
                  <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
                </Form>
              </div>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}


export default SignupForm;