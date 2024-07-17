import React, { useState } from "react";
import Avatar from "react-avatar";
import { CiImageOn } from "react-icons/ci";
import axios from "axios";
import { TWEET_API_END_POINT } from "../utils/constant";
import toast from "react-hot-toast";
import { useSelector, useDispatch } from "react-redux";
import { getAllTweets, getIsActive, getRefresh } from '../redux/tweetSlice';

const CreatePost = () => {
  const [description, setDescription] = useState("");
  const { user } = useSelector((store) => store.user);
  const { isActive } = useSelector((store) => store.tweet);
  const dispatch = useDispatch();

  const submitHandler = async () => {
    try {
      const res = await axios.post(
        `${TWEET_API_END_POINT}/create`,
        { description, id: user?._id },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      dispatch(getRefresh());
      if (res.data.success) {
        toast.success(res.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  const forYouHandler = () => {
    dispatch(getIsActive(true));
  };

  const followingHandler = () => {
    dispatch(getIsActive(false));
  };

  return (
    <div className="w-full max-w-lg mx-auto mt-4">
      <div>
        <div className="flex items-center justify-between border-b border-gray-200">
          <div
            onClick={forYouHandler}
            className={`${
              isActive
                ? "border-b-4 border-blue-600"
                : "border-b-4 border-transparent"
            } cursor-pointer hover:bg-gray-200 flex-1 text-center py-3`}
          >
            <h1 className="font-semibold text-gray-600 text-lg hover:text-white">
              For you
            </h1>
          </div>

          <div
            onClick={followingHandler}
            className={`${
              !isActive
                ? "border-b-4 border-blue-600"
                : "border-b-4 border-transparent"
            } cursor-pointer hover:bg-gray-200 flex-1 text-center py-3`}
          >
            <h1 className="font-semibold text-gray-600 text-lg hover:text-white">
              Following
            </h1>
          </div>
        </div>

        {/* Tweets input */}
        <div className="mt-4">
          <div className="flex items-center p-4">
            <Avatar
              src="/girl.avif"
              size="40"
              round={true}
              className="hidden sm:block" // Show avatar on screens larger than mobile
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className={`flex-grow border p-2 rounded outline-none text-lg ml-2 ${
                window.innerWidth < 600 ? "border border-gray-300" : ""
              }`}
              type="text"
              placeholder="What's happening?"
            />
          </div>
          <div className="flex items-center justify-between border-b border-gray-300 p-4">
            <div>
              <CiImageOn />
            </div>
            <button
              onClick={submitHandler}
              className="text-md font-bold bg-[#1d9bf0] text-white rounded-full px-4 py-2"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
