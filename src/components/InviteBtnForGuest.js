import React from 'react';
import { useHistory } from 'react-router';


const InviteBtnForGuest = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/login")
  }

  return (
    <div className="InviteBtnForGuest">
      <div className="btn btn-sm btn-outline-success" onClick={handleClick}>Invite</div>
    </div>
  )
}

export default InviteBtnForGuest;