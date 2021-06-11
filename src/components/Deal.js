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
      const  email  = await SharelyApi.fetchEmail(username);
      window.open(`mailto:${email}`);
    }
    catch (errors) {
      console.error("Login failed", errors);
      dispatch(showErr(errors));
    }
  }


  return (
    <div className="Deal bg-light p-3 my-3 border round">
      <p className="font-weight-bold d-inline">
        You can make a deal with <UserNameTag username={username} />
      </p>
      {/* <span className="btn btn-sm btn-warning align-self-end ml-auto ml-3"
        onClick={sendEmail}>
        Contact <i className="font-weight-bold">{username}</i>
      </span> */}
      <i className="far fa-envelope fa-lg ml-4 text-success" onClick={sendEmail} data-toggle="tooltip" title={`Contact ${username}`}></i>

      <div className="d-flex justify-content-left my-2 p-3">
        <div className="received align-self-center border d-flex p-2 bg-info">
          {receivedInvitePostIds.map(pid =>
            <PostThumbnail key={pid} id={pid} />
          )}
        </div>

        <div className="align-self-center">
          <i className="fas fa-exchange-alt text-success fa-2x m-3"></i>
        </div>

        <div className="sent align-self-center border d-flex p-2 bg-warning">
          {sentInvitePostIds.map(pid =>
            <PostThumbnail key={pid} id={pid} />
          )}
        </div>

        
      </div>
    </div>
  )
}

export default Deal;
