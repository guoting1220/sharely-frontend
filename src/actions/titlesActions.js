// import axios from 'axios';
import { FETCH_TITLES } from './actionTypes';
import SharelyApi from '../api/api';
// const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/posts";
import { showErr } from './errorsActions';


/* "thunk" action creactor */

/* fetch titles from API, then update the titles state in store */
export const fetchTitlesFromAPI = () => (
  async (dispatch) => {
    // debugger;
    try {
      const titles = await SharelyApi.getAllTitles();
      dispatch(getTitltes(titles));
    }
    catch (errors) {
      console.error("Getting posts fails.", errors);
      dispatch(showErr(errors));
    }
  }
)

/* normal action creators  */
export const getTitltes = (titles) => (
  {
    type: FETCH_TITLES,
    titles
  }
)


