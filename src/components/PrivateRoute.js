import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from 'react-redux';
// import UserContext from "../auth/UserContext";

/** "Higher-Order Component" for private routes.
 *
 * In routing component, use these instead of <Route ...>. This component
 * will check if there is a valid current user and only continues to the
 * route if so. If no user is present, redirects to login form.
 */

function PrivateRoute({ exact, path, children }) {
  const token = useSelector(store => store.user.token);

  console.debug(
    "PrivateRoute",
    "exact=", exact,
    "path=", path,
    "currentUser=", useSelector(store => store.user.username)
  );

  if (!token) {
    return <Redirect to="/login" />;
  }

  return (
    <Route exact={exact} path={path}>
      {children}
    </Route>
  );
}

export default PrivateRoute;
