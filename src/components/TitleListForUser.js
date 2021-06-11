import React from "react";
import { useSelector } from 'react-redux';
import {  useParams } from 'react-router';
import TitleList from './TitleList';
import NotFound from './NotFound';


const TitleListForUser = () => {
  const username = useParams().username;
  const titles = useSelector(store => store.titles);
  const selectedTitles = titles.filter(title => title.username === username);

  const titlesForUser = selectedTitles.length === 0
    ? <NotFound msg={`${username} has no posts yet!`} />
    : <TitleList titles={selectedTitles} />

  return (
    <div className="TitleListForUser container">
      <h4 className="my-4">Posts from <i className="text-primary font-weight-bold">{username} </i> : </h4>
      <hr />
      {titlesForUser}
    </div>
  )
}

export default TitleListForUser;
