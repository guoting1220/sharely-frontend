import React from "react";
import { useSelector } from 'react-redux';
import TitleList from './TitleList';
import NotFound from './NotFound';


const MyPosts = () => {
  const titles = useSelector(store => store.titles);
  const myPostIdSet = new Set(useSelector(store => store.user.posts));
  const myPostTitles = titles.filter(title => myPostIdSet.has(title.id));

  const myPosts = myPostTitles.length === 0 
    ? <NotFound msg="No posts yet!" />
    : <TitleList titles={myPostTitles} />


  return (
    <div className="MyPosts container">
      <h4 className="my-4">My Posts: </h4>
      <hr/>
      {myPosts}
    </div>
  )
}

export default MyPosts;
