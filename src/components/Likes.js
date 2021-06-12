import React from "react";
import { useSelector } from 'react-redux';
import TitleList from './TitleList';
import NotFound from './NotFound';

const Likes = () => {
  const titles = useSelector(store => store.titles);
  const likedPostIds = new Set(useSelector(store => store.user.likedPosts));
  const likesPostTitles = titles.filter(title => likedPostIds.has(title.id));

  const myLikes = likesPostTitles.length === 0
    ? <NotFound msg="No favorite posts!" />
    : <TitleList titles={likesPostTitles} />

  return (
    <div className="Likes container">
      <h4 className="my-4">Favorite Posts: </h4>
      <hr/>
      {myLikes}
    </div>
  )
}

export default Likes;
