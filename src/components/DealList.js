import React from "react";
import { useSelector} from 'react-redux';
import NotFound from './NotFound';
import Deal from './Deal';
import { getFrequencyCounter, findIntersection} from '../helpers/helpers';



const DealList = () => {
  const sentInvites = useSelector(store => store.user.sentInvites);
  const receivedInvites = useSelector(store => store.user.receivedInvites);

  /* create sent invites frequency counter, return {username: [title,...], ...} 
  showoing the users and their posts you sent invite, grouping by username
  */
  const sentInvitesCounter = getFrequencyCounter(sentInvites, "postOwner", "postId");
  const sentInvitesToUsers = Object.keys(sentInvitesCounter);

  /* create received invites frequency counter, return {username: [title,...], ...}
  showoing the users and their posts you sent invite, grouping by username
  */
  const receivedInvitesCounter = getFrequencyCounter(receivedInvites, "username", "postId");
  const receivedInvitesFromUsers = Object.keys(receivedInvitesCounter);

  /* find the common users who are in both the sent invites and received invites frequency counters */
  const commonUsers = findIntersection(sentInvitesToUsers, receivedInvitesFromUsers);

  const deals = commonUsers.length === 0 ?
    <NotFound msg="No deals can be made!" />
    : commonUsers.map(user =>
      <Deal
        key={user}
        username={user}
        sentInvitePostIds={sentInvitesCounter[user]}
        receivedInvitePostIds={receivedInvitesCounter[user]}
      />)

  return (
    <div className="Likes container">
      <h4 className="my-4">Deals: </h4>
      <hr />
      {deals}
    </div>
  )
}

export default DealList;
