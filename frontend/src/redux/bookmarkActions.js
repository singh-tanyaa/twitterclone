// import axios from 'axios';
// import { BOOKMARK_TOGGLE, GET_BOOKMARKS } from './types';
// import { TWEET_API_END_POINT } from '../utils/constant';

// export const toggleBookmark = (id) => async (dispatch, getState) => {
//   try {
//     const res = await axios.put(`${TWEET_API_END_POINT}/bookmark/${id}`, { id: getState().user.user._id });
//     dispatch({ type: BOOKMARK_TOGGLE, payload: res.data });
//   } catch (error) {
//     console.error(error);
//   }
// };

// export const getBookmarks = () => async (dispatch) => {
//   try {
//     const res = await axios.get(`${TWEET_API_END_POINT}/bookmarks`);
//     dispatch({ type: GET_BOOKMARKS, payload: res.data });
//   } catch (error) {
//     console.error(error);
//   }
// };
