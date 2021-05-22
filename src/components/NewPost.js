import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { showErr } from '../actions/errorsActions';
import { sendPostToAPI } from "../actions/postsActions";
import PostForm from "./PostForm";


/** Show post form, and handle editing of it. */

function NewPost() {
  const dispatch = useDispatch();
  const history = useHistory();

  /** Adds post and saves to backend. */

  async function add(postData) {
    try {
      await dispatch(sendPostToAPI(postData));
      history.push("/posts");
    }
    catch(e) {
      dispatch(showErr(e));
    }    
  }

  function cancel() {
    history.push("/posts");
  }

  return (
    <main>
      <PostForm save={add} cancel={cancel} title="Add Post" />
    </main>
  );
}

export default NewPost;
