import React from "react";
import PostCard from './PostCard';


const TitleList = ({titles}) => {
  return (
    <div className="TitleList container mt-3 ">
      <div className="row">
        {titles.map(t =>
          <PostCard
            key={t.id}
            id={t.id}
            itemName={t.itemName}
            username={t.username}
            postDate={t.postDate}
            city={t.city}
            imgUrl={t.imgUrl}
            category={t.category}
            ageGroup={t.ageGroup}
          />)}
      </div>
    </div>
  );
}

export default TitleList;
