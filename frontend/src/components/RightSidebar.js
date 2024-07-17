import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import Avatar from "react-avatar";
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa";

const RightSidebar = ({ otherUsers }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <div className='w-full md:w-[25%]'>
      {/* Sidebar Toggle Button for Mobile View */}
      <div className='block md:hidden'>
        <button onClick={toggleSidebar} className='text-2xl p-2'>
          <FaBars />
        </button>
      </div>

      {/* Sidebar Content */}
      <div className={`fixed md:relative top-0 right-0 h-full bg-white md:bg-transparent transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:flex md:flex-col w-64 md:w-auto`}>
        {/* Close Button */}
        <div className="flex justify-end p-2">
          <button onClick={closeSidebar} className="text-xl">
            <FaTimes />
          </button>
        </div>
        
        <div className='flex items-center p-2 bg-gray-100 rounded-full outline-none w-full'>
          <CiSearch size="20px" />
          <input type="text" className='bg-transparent outline-none px-2' placeholder='Search' />
        </div>
        <div className='p-4 bg-gray-100 rounded-2xl my-4'>
          <h1 className='font-bold text-lg'>Who to follow</h1>
          {
            otherUsers?.map((user) => (
              <div key={user?._id} className='flex items-center justify-between my-3'>
                <div className='flex items-center'>
                  <Avatar src="/girl.avif" size="50" round={true} />
                  <div className='ml-2'>
                    <h1 className='font-bold'>{user?.name}</h1>
                    <p className='text-sm'>@{user?.username}</p>
                  </div>
                </div>
                <div>
                  <Link to={`/profile/${user?._id}`}>
                    <button className='px-4 py-1 bg-black text-white rounded-full'>Profile</button>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default RightSidebar;
