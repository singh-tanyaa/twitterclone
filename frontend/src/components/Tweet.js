import React from "react";
import Avatar from "react-avatar";
import { CiHeart } from "react-icons/ci";
import { FaRegComment } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { getRefresh } from "../redux/tweetSlice";
import { timeSince } from "../utils/constant";
import { toggleBookmark } from "../redux/bookmarkActions"; // import toggleBookmark action


const Tweet = ({ tweet }) => {
  const { user } = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const likeOrDislikeHandler = async (id) => {
    try {
      const res = await axios.put(
        `${TWEET_API_END_POINT}/like/${id}`,
        { id: user?._id },
        {
          withCredentials: true,
        }
      );
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    }
  };
  const deleteTweetHandler = async (id) => {
    try {
      axios.defaults.withCredentials = true;
      const res = await axios.delete(`${TWEET_API_END_POINT}/delete/${id}`);
      console.log(res);
      dispatch(getRefresh());
      toast.success(res.data.message);
    } catch (error) {
      toast.success(error.response.data.message);
      console.log(error);
    }
  };
  const bookmarkHandler = (id) => {
    dispatch(toggleBookmark(id));
  };


  return (
    <div className="border-b border-gray-200">
      <div>
        <div className="flex p-4 ">
          <Avatar src="/girl.avif" size="50" round={true} />
          <div className=" w-full">
            <div className="flex items-center ml-2">
              <h1 className="font-bold ">{tweet?.userDetails[0]?.name}</h1>
              <p className="text-gray-500 text-sm ml-1">{`@${tweet?.userDetails[0]?.username} . ${timeSince(tweet?.createdAt)}`}</p>
            </div>
            <div>
              <p className="text-left ml-2">{tweet?.description}</p>
            </div>
            <div className="flex justify-between my-3 ">
              <div className="flex items-center  ">
                <div
                  onClick={() => likeOrDislikeHandler(tweet?._id)}
                  className="p-2 hover:bg-pink-200 rounded-full cursor-pointer"
                >
                  <CiHeart size={"24px"} />
                </div>

                <p className="ml-1">{tweet?.like?.length}</p>
              </div>
              <div className="flex items-center ">
                <div className="p-2 hover:bg-green-200 rounded-full cursor-pointer">
                  <FaRegComment size={"20px"} />
                </div>

                <p className="ml-1">0</p>
              </div>
              <div className="flex items-center ">
                <div onClick={() => bookmarkHandler(tweet?._id)} className="p-2 hover:bg-yellow-200 rounded-full cursor-pointer">
                  <CiBookmark size={"24px"} />
                </div>

                <p className="ml-1">
                {tweet?.bookmarks?.length}</p> {/* Assuming bookmarks array is in the tweet */}
                
              </div>
              {user?._id === tweet?.userId && (
                <div
                  onClick={() => deleteTweetHandler(tweet?._id)}
                  className="flex items-center"
                >
                  <div className="p-2 hover:bg-red-300 rounded-full cursor-pointer">
                    <MdOutlineDeleteOutline size="24px" />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
