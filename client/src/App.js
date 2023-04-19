import React, { useEffect, useState } from "react";
import axios from 'axios';
import {Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Profile from "./components/profile/Profile";
import SignIn from "./components/signIn/SignIn";
import Connect from "./components/connect/Connect";
import Friends from "./components/friends/Friends";

function App() {
  const [currentUser, setCurrentUser] = useState(null);
  const [friends,setFriends] = useState(null);
  const [refreshFriends, setRefreshFriends] = useState(false)

  useEffect(() => {
    const userData = localStorage.getItem('currentUser');
  if (userData !== null ) {
    setCurrentUser(JSON.parse(userData));
  }
},[])

useEffect(() => {
  localStorage.setItem('currentUser',JSON.stringify(currentUser))
  
}, [currentUser])
  
useEffect(() => {
  const fetchFriends = async () => {
      const response = await axios.get(`http://127.0.0.1:3000/users/${currentUser.id}/friends`);
      const friends = response.data;
      setFriends(friends)
  };
  if(currentUser){
    fetchFriends();
  }
}, [refreshFriends, currentUser?.id,currentUser]);
  return (
    <>
      {currentUser ? (
        <div>
          <Routes>
          <Route path="/" exact element={<Home/>}/>
          <Route path='/profile' element={<Profile currentUser={currentUser} friends={friends}/>}/>
          <Route path='/connect' element={<Connect currentUser={currentUser} friends={friends} refreshFriends={refreshFriends} setRefreshFriends={setRefreshFriends}/>}/>
          <Route path = '/friends' element={<Friends currentUser={currentUser} friends={friends}/>}/>
          </Routes>
          

        </div>
      ) : (
        <SignIn  setCurrentUser={setCurrentUser}/>
      )}
    </>
  );
}

export default App;
