import React from 'react';
import { useHistory } from 'react-router-dom';

const GroupTag = ({ grouptype, value, color }) => {
  const history = useHistory();

  const getGroupedTitleList = () => {
    history.push(`/posts/${grouptype}/${value}`);
  }

  return (
    <i
      className={`GroupTag text-${color} ml-2 font-weight-bold`}
      onClick={getGroupedTitleList}>{value}
    </i>
  )
}

export default GroupTag;