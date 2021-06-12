import React from "react";
import { useSelector } from 'react-redux';
import NotFound from './NotFound';
import ReceivedInvite from './ReceivedInvite';
import {getFrequencyCounter} from '../helpers/helpers';



const ReceivedInviteList = () => {

  /*   receivedInvites from store. return [{username, postId}, ...]
    (which user invited which post of yours) */

  const receivedInvites = useSelector(store => store.user.receivedInvites);

  /*   create the frequency counter of the received invites
    return {username: [postId, ...], ...} 
    showing the users and which posts of yours they are interested, grouping by username */

  const receivedInvitesCounter = getFrequencyCounter(receivedInvites, "username", "postId");

  const receivedGroupedInvites = receivedInvites.length !== 0 ?
    <div>
      <div className="text-secondary mb-5">
        Click on the user's name tag to check the posts from the user and make a deal!
      </div>
      {Object.keys(receivedInvitesCounter).map(username =>
        <ReceivedInvite
          key={username}
          username={username}
          posts={receivedInvitesCounter[username]}
        />
      )}
    </div>
    : <NotFound msg="No invite received!" />

  return (
    <div className="Likes container">
      <h4 className="my-4">Received Invites: </h4>
      <hr />
      {receivedGroupedInvites}
    </div>
  )
}

export default ReceivedInviteList;
