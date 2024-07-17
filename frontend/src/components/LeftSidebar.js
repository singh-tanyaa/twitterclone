import React from "react";
import { IoHome } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoMdNotificationsOutline } from "react-icons/io";
import { MdMailOutline } from "react-icons/md";
import { IoBookmarkOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";
import { MdOutlineLogout } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { USER_API_END_POINT } from '../utils/constant';
import toast from "react-hot-toast";
import { getMyProfile, getOtherUsers, getUser } from '../redux/userSlice';

const LeftSidebar = () => {
  const { user } = useSelector(store => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`);
      dispatch(getUser(null));
      dispatch(getOtherUsers(null));
      dispatch(getMyProfile(null));
      navigate('/login');
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Sidebar for larger screens */}
      <div className="hidden md:block w-[30%]">
        <div className="mx-4">
          <img width={"55px"} src="/twitterlogo.jpeg" alt="twitterz" />
        </div>
        <div className="my-4">

        <Link to="/" className="flex   mt-5 items-center px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
        <IoHome style={{ fontSize: "2.5rem" }}  />
        {/* <h1 className="text-3xl font-bold  ml-2">Home</h1> */}
        
      </Link>


        
          <div className="flex mt-5 items-center px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <IoSearch style={{ fontSize: "2.5rem" }} />
            <h1 className="text-2xl font-semibold ml-2">Explore</h1>
          </div>
          <div className="flex mt-5 items-center px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <IoMdNotificationsOutline style={{ fontSize: "2.5rem" }} />
            <h1 className="text-2xl font-semibold ml-2">Notifications</h1>
          </div>
          <div className="flex mt-5 items-center px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <MdMailOutline style={{ fontSize: "2.5rem" }} />
            <h1 className="text-2xl font-semibold ml-2">Messages</h1>
          </div>
          <div className="flex mt-5 items-center px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <IoBookmarkOutline style={{ fontSize: "2.5rem" }} />
            <h1 className="text-2xl font-semibold ml-2">Bookmarks</h1>
          </div>
          <Link to={`/profile/${user?._id}`} className="flex mt-5 items-center px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <VscAccount style={{ fontSize: "2.5rem" }} />
            <h1 className="text-2xl font-semibold ml-2">Profile</h1>
          </Link>
          <div onClick={logoutHandler} className="flex mt-5 items-center px-4 py-2 hover:bg-gray-300 hover:cursor-pointer rounded-full">
            <MdOutlineLogout style={{ fontSize: "2.5rem" }} />
            <h1 className="text-2xl font-semibold ml-2">Logout</h1>
          </div>
          <button className="text-md font-bold bg-[#1d9bf0] text-white rounded-full px-4 py-2 border-none w-64 h-15">
            Post
          </button>
        </div>
      </div>
      
      {/* Bottom icon menu for mobile screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around py-2">
        <Link to="/" className="flex flex-col items-center">
          <IoHome className="text-[1.5rem]" />
        </Link>
        <div className="flex flex-col items-center">
          <IoSearch className="text-[1.5rem]" />
        </div>
        <div className="flex flex-col items-center">
          <IoMdNotificationsOutline className="text-[1.5rem]" />
        </div>
        <div className="flex flex-col items-center">
          <MdMailOutline className="text-[1.5rem]" />
        </div>
        <div className="flex flex-col items-center">
          <IoBookmarkOutline className="text-[1.5rem]" />
        </div>
        <Link to={`/profile/${user?._id}`} className="flex flex-col items-center">
          <VscAccount className="text-[1.5rem]" />
        </Link>
        <div onClick={logoutHandler} className="flex flex-col items-center">
          <MdOutlineLogout className="text-[1.5rem]" />
        </div>
      </div>
    </div>
  );
};

export default LeftSidebar;
