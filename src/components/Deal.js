import React from "react";
import { useDispatch } from 'react-redux';
import PostThumbnail from './PostThumbnail';
import UserNameTag from './UserNameTag';
import SharelyApi from '../api/api';
import { showErr } from '../actions/errorsActions';

const Deal = ({ username, sentInvitePostIds, receivedInvitePostIds }) => {
  const dispatch = useDispatch();

  const sendEmail = async () => {
    try {
      const email = await SharelyApi.fetchEmail(username);
      window.open(`mailto:${email}`);
    }
    catch (errors) {
      console.error("Login failed", errors);
      dispatch(showErr(errors));
    }
  }


  return (
    <div className="Deal bg-light p-3 my-3 border round">
      <div className="mb-3">
        <p className="font-weight-bold d-inline text-secondary">
          You can make a deal with <UserNameTag username={username} />
        </p>
        <i className="fas fa-envelope fa-lg ml-4 text-success" onClick={sendEmail} data-toggle="tooltip" title={`Contact ${username}`}></i>
      </div>

      <div className="row container mx-auto d-flex justify-content-center">
        <div className="received col-5 row justify-content-start border rounded p-2">
          {receivedInvitePostIds.map(pid =>
            <PostThumbnail key={pid} id={pid} />
          )}
        </div>

        <div className="col-2 align-self-center mx-2">
          <i className="fas fa-exchange-alt text-success fa-2x "></i>
        </div>

        <div className="sent col-5 row justify-content-start border rounded p-2 ">
          {sentInvitePostIds.map(pid =>
            <PostThumbnail key={pid} id={pid} />
          )}
        </div>
      </div>
    </div>
  )
}

export default Deal;
