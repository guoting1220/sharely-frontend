import React from "react";
import { Link } from 'react-router-dom';
import LikeTag from './LikeTag';
import GroupTag from './GroupTag';
import InviteBtn from './InviteBtn';
import InviteBtnForGuest from './InviteBtnForGuest';
import { useSelector } from 'react-redux';
import { defaultImageForFailedLoading } from '../config';


const PostCard = ({ id, itemName, username, postDate, city, imgUrl, category, ageGroup }) => {
  const currentUserName = useSelector(store => store.user.username);

  return (
    <div className="PostCard col-sm-6 col-md-4 col-lg-3 mb-3 ">
      <div className="card mx-auto" style={{ 'width': '16rem' }}>
        <Link className="link" exact to={`/posts/${id}`}>
          <img
            src={imgUrl}
            className="card-img-top img-thumbnail d-block"
            style={{ 'height': '10rem' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = defaultImageForFailedLoading
            }}
            alt={itemName}>
          </img>
        </Link>

        {/* {currentUserName && <LikeTag postId={id} />} */}
        <LikeTag postId={id} />

        <div className="p-2">
          <Link className="link" exact to={`/posts/${id}`}>
            <h5 className="card-title mb-1">{itemName}</h5>
          </Link>

          <div className="row">
            <small className="col-md-6 ">
              Category:<GroupTag grouptype="category" value={category} color="warning" />
            </small>
            <small className="col-md-6 ">
              Age:<GroupTag grouptype="ageGroup" value={ageGroup} color="info" />
            </small>
            <small className="col-md-6 ">
              City:<GroupTag grouptype="city" value={city} color="success" />
            </small>
            <small className="col-md-6 text-muted" text-muted>
              <i>{postDate}</i>
            </small>
          </div>

          <hr />
          {currentUserName && <InviteBtn postId={id} postOwner={username} />}
          {!currentUserName && <InviteBtnForGuest />}
        </div>
      </div>
    </div>
    // <div className="PostCard col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
    //   <div className="card mx-auto" style={{ width: '15rem' }}>
    //     <Link className="link" exact to={`/posts/${id}`}>
    //       <img
    //         src={imgUrl}
    //         className="card-img-top d-block"
    //         onError={(e) => {
    //           e.target.onerror = null;
    //           e.target.src = defaultImageForFailedLoading
    //         }}
    //         alt="Loading...">
    //       </img>
    //     </Link>

    //     {/* {currentUserName && <LikeTag postId={id} />} */}
    //     <LikeTag postId={id} />

    //     <div className="card-body">
    //       <Link className="link" exact to={`/posts/${id}`}>
    //         <h5 className="card-title m-0">{itemName}</h5>
    //       </Link>

    //       <div>
    //         <small className="card-text">
    //           <GroupTag grouptype="city" value={city} color="success"/>
    //           <i>  {postDate}</i>
    //         </small>
    //       </div>

    //       <div className="d-flex justify-content-between">
    //         <small>Category:<GroupTag grouptype="category" value={category} color="warning"/></small>
    //         <small>Age:<GroupTag grouptype="ageGroup" value={ageGroup} color="info"/></small>
    //       </div>
    //       <hr />
    //       {currentUserName && <InviteBtn postId={id} postOwner={username} />}
    //       {!currentUserName && <InviteBtnForGuest />}
    //     </div>
    //   </div>
    // </div>
  );
}

export default PostCard;

