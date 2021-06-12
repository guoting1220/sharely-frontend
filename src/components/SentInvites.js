import React from "react";
import { useSelector } from 'react-redux';
import TitleList from './TitleList';
import NotFound from './NotFound';

const SentInvites = () => {
  const titles = useSelector(store => store.titles);
  const sentInvitePostIds = useSelector(store => store.user.sentInvites).map(invite => invite.postId);
  const sentIdSet = new Set(sentInvitePostIds);
  const invitesTitles = titles.filter(title => sentIdSet.has(title.id));

  const invites = invitesTitles.length === 0
    ? <NotFound msg="No invite sent!" />
    : <TitleList titles={invitesTitles} />

  return (
    <div className="Likes container">
      <h4 className="my-4">Sent Invites: </h4>
      <hr/>
      {invites}
    </div>
  )
}

export default SentInvites;
