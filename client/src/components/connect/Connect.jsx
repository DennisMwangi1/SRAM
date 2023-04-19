import React, { useState, useEffect } from "react";
import axios from "axios";
import { Alert } from '@mui/material';

function Connect({currentUser, friends, setRefreshFriends, refreshFriends}) {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [refresh,setRefresh] = useState(false)
  const friendIds = friends?.map(friend => friend.id)

  useEffect(() => {
    axios.get("http://127.0.0.1:3000/users").then((response) => {
      setUsers(response.data);
    });
  }, [refresh]);


function addFriend(friendId) {

  axios.post('http://127.0.0.1:3000/friendships', { user_id: currentUser.id, friend_id: friendId })
    .then(response => {
      handleClick()
      setRefresh(!refresh)
      setRefreshFriends(!refreshFriends)
    })
    .catch(error => {
      console.log('Error creating friendship', error);
    });
}
const handleClick = () => {
  setShowAlert(true);
};
const handleClose = () => {
  setShowAlert(false);
};


    // search functionality
    const getFilteredUsers = () => {
      if (!searchValue) return users
      return users.filter(
          user => user.first_name.toLowerCase().includes(searchValue.toLowerCase())
      )
  }

  const filteredUsers = getFilteredUsers();
  const nonFriends = filteredUsers.filter(user => !friendIds?.includes(user.id));

  return (
    <div className="max-w-6xl mx-auto  py-6 ">
        <a href="/profile">Back to Profile</a>
        {showAlert && (
                                <Alert severity="success" onClose={handleClose}>
                                    Connected successfully!!
                                </Alert>
                            )}
      <div className='ml-4  flex justify-end mt-4 '>
                    <div className='pb-4'>
                        <label>Search User </label>
                        <input  onChange={(e) => setSearchValue(e.target.value)} className='rounded-md text-center ml-2 w-7/12 bg-slate-300 text-black' type='search' placeholder='search client....' />
                    </div>
                </div>
      <table className="table-auto w-full bg-slate-200">
        <thead>
          <tr className="bg-gray-200 border border-4 border-slate-500">
            <th className="py-2 px-4 font-bold uppercase text-sm text-gray-700">
              First Name
            </th>
            <th className="py-2 px-4 font-bold uppercase text-sm text-gray-700">
              Last Name
            </th>
            <th className="py-2 px-4 font-bold uppercase text-sm text-gray-700">
              Email
            </th>
            <th className="py-2 px-4 font-bold uppercase text-sm text-gray-700">
              Location
            </th>
            <th className="py-2 px-4 font-bold uppercase text-sm text-gray-700">
              Work Station
            </th>
            <th className="py-2 px-4 font-bold uppercase text-sm text-gray-700">
              Connect
            </th>
          </tr>
        </thead>
        <tbody>
          {/* eslint-disable-next-line array-callback-return */}
          {nonFriends.map((user) => {
            if (user.id !== currentUser.id ) {
              return(
                 <tr key={user.id} className="border-b border-gray-400">
              <td className="py-2 px-4 text-gray-800">{user.first_name}</td>
              <td className="py-2 px-4 text-gray-800">{user.last_name}</td>
              <td className="py-2 px-4 text-gray-800">{user.email}</td>
              <td className="py-2 px-4 text-gray-800">{user.location}</td>
              <td className="py-2 px-4 text-gray-800">{user.work_station}</td>
              <td className="py-2 px-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={()=>addFriend(user.id)}>
                  Connect
                </button>
              </td>
            </tr>
              )
              
            }
          }
            
           
          )}
        </tbody>
      </table>
    </div>
  )
}

export default Connect