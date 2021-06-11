import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Home from './Home';
import Post from './Post';
import NewPost from './NewPost';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import PrivateRoute from './PrivateRoute';
import AllTitles from './AllTitles';
import MyPosts from './MyPosts';
import Likes from './Likes';
import SentInvites from './SentInvites';
import ReceivedInviteList from './ReceivedInviteList';
import TitleListForUser from './TitleListForUser';
import DealList from './DealList';
import GroupedTitles from './GroupedTitles';


const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/login">
        <LoginForm />
      </Route>

      <Route exact path="/signup">
        <SignupForm />
      </Route>

      <Route exact path="/posts">
        <AllTitles />
      </Route>

      <PrivateRoute exact path="/new">
        <NewPost />
      </PrivateRoute>

      {/* <PrivateRoute path="/profile">
        <ProfileForm />
      </PrivateRoute> */}

      <PrivateRoute exact path="/myposts">
        <MyPosts />
      </PrivateRoute>

      <PrivateRoute exact path="/likes">
        <Likes />
      </PrivateRoute>

      <PrivateRoute exact path="/sentinvites">
        <SentInvites />
      </PrivateRoute>

      <PrivateRoute exact path="/receivedinvites">
        <ReceivedInviteList />
      </PrivateRoute>

      <PrivateRoute exact path="/posts/:postId">
        <Post />
      </PrivateRoute>

      <Route exact path="/posts/user/:username">
        <TitleListForUser />
      </Route>

      <Route exact path="/posts/:grouptype/:value">
        <GroupedTitles />
      </Route>

      <PrivateRoute exact path="/deals">
        <DealList />
      </PrivateRoute>

      <Redirect to="/" />
    </Switch>
  )
}

export default Routes;