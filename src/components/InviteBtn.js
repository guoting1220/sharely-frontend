import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sendInvite, removeInvite } from '../actions/userActions';

const InviteBtn = ({ postId, postOwner }) => {
  const currentUserName = useSelector(store => store.user.username);

  const sentInvitePostIds = (useSelector(store => store.user.sentInvites)).map(invite => invite.postId);
  const sentIdSet = new Set(sentInvitePostIds);

  const dispatch = useDispatch();

  /* the text and style of the invite button is decided whether the post 
  is invited or not */
  const inviteBtn = sentIdSet.has(postId) ?
    <div className="btn btn-sm btn-success" data-toggle="tooltip" title="cancel invite">Invite Sent</div>
    :
    <div className="btn btn-sm btn-outline-success" data-toggle="tooltip" title="send invite">Invite</div>

  const toggleInvite = () => {
    if (!sentIdSet.has(postId)) {
      dispatch(sendInvite(currentUserName, postId, postOwner));
    }
    else
      dispatch(removeInvite(currentUserName, postId));
  }

  /* the invite button is hidden for the current user's posts 
  (the user can not invite themselve's posts) */
  if (postOwner === currentUserName) return null;

  return (
    <div className="InviteBtn" onClick={toggleInvite}>
      {inviteBtn}
    </div>
  )
}

export default InviteBtn;