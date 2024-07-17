// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { getBookmarks } from "../redux/bookmarkActions";
// import Tweet from "./Tweet";

// const Bookmarks = () => {
//   const dispatch = useDispatch();
//   const { bookmarks } = useSelector((store) => store.tweet);

//   useEffect(() => {
//     dispatch(getBookmarks());
//   }, [dispatch]);

//   return (
//     <div>
//       {bookmarks.map((tweet) => (
//         <Tweet key={tweet._id} tweet={tweet} />
//       ))}
//     </div>
//   );
// };

// export default Bookmarks;
