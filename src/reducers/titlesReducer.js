import { FETCH_TITLES, ADD_POST, DELETE_POST, UPDATE_POST } from '../actions/actionTypes';

function makeTitleFromPost({
  id,
  itemName,
  username,
  postDate,
  city,
  imgUrl,
  description,
  category,
  ageGroup
}) {
  return {
    id,
    itemName,
    username,
    postDate,
    city,
    imgUrl,
    category,
    ageGroup
  };
}

// function sortByPostDate(posts) {
//   return posts.sort((a, b) => b.postDate - a.postDate);
// }

export default function titlesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_TITLES: {
      return (
        action.titles.map(title => ({ ...title }))
      );
    }

    case ADD_POST: {
      return (
        [makeTitleFromPost(action.postData),
        ...state.map(titile => ({ ...titile }))       
      ]);
    }

    case UPDATE_POST: {
      return state.map(title => title.id === action.postId
        ? makeTitleFromPost(action.postData)
        : ({ ...title }));
    }

    case DELETE_POST: {
      return state.filter(
        title => title.id !== action.postId).map(title => ({ ...title }));
    }


    default:
      return state;
  }
}




