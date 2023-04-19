import React, { useState} from "react";
import { ChatFeed, Message } from "react-chat-ui";

const Friends = ({ currentUser, friends }) => {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [selectedFriendMessages, setSelectedFriendMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleFriendSelect = async (friend) => {
    setSelectedFriend(friend);
    try {
      const response = await fetch(`http://127.0.0.1:3000/chats?user_id=${parseInt(currentUser.id)}&friend_id=${parseInt(friend.id)}`);
      const data = await response.json();
      const formattedMessages = data.map((message) => {
        const isCurrentUser = message.sender_id === currentUser.id;
        const senderName = isCurrentUser ? currentUser.first_name : friend.first_name;
        const senderId = isCurrentUser ? 0 : 1;
        return new Message({
          id: senderId,
          message: message.body,
          senderName: senderName,
          timestamp: new Date(message.created_at).getTime(),
        });
      });
      formattedMessages.sort((a, b) => a.timestamp - b.timestamp);
      setSelectedFriendMessages(formattedMessages);
    } catch (error) {
      console.error(error);
    }
  };
  

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) {
      return;
    }

    const newMessageObj = {
      sender_id: currentUser.id,
      recipient_id: selectedFriend.id,
      body: newMessage,
    };
    fetch("http://127.0.0.1:3000/chats", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMessageObj),
    })
      .then((response) => response.json())
      .then((data) => {
        const message = new Message({
          id: 0,
          message: data.body,
          senderName: currentUser.first_name,
          timestamp: new Date(data.created_at).getTime(),
        });
        setSelectedFriendMessages([...selectedFriendMessages, message]);
        setNewMessage("");
      })
      .catch((error) => console.error(error));
  };

  return (
    <>
      <a href="/profile" className="ml-4">
        Back to Profile
      </a>
      <div className="flex h-[90vh]  w-9/12 m-auto gradient-custom-2">
        <div className="w-1/3 bg-gray-200 overflow-y-scroll rounded-xl">
          <h1 className="text-xl text-center font-bold">Friends</h1>
          <ul className="p-4 ">
            {friends?.map((friend) => (
              <li
                className="my-4 p-2 text-center  cursor-pointer hover:bg-gray-400 bg-gray-300 rounded-full"
                key={friend.id}
                onClick={() => handleFriendSelect(friend)}
              >
                {friend.first_name} {friend.last_name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-2/3 flex flex-col justify-between bg-slate-400 rounded-xl">
          <div className="flex-1 p-4 bg-slate-300 rounded-md">
            {selectedFriend ? (
              <ChatFeed
                messages={selectedFriendMessages}
                bubbleStyles={{
                  text: {
                    fontSize: 16,
                  },
                  chatbubble: {
                    backgroundColor: "blue",
                    borderRadius: 20,
                    padding: 10,
                  },
                }}
              />
            ) : (
              <p>No friend selected!</p>
          )}
        </div>
        <div className="p-4 m-auto">
          <input
          className="rounded-md p-2"
            value={newMessage}
            placeholder=" Type your message..."
            onChange={handleNewMessageChange}
            onKeyPress={(event) =>
              event.key === "Enter" ? handleSendMessage() : null
            }
          />
          <button
            color="primary"
            onClick={handleSendMessage}
            className="bg-blue-600 hover:bg-blue-700 ml-4 px-4 py-2 text-white rounded-full"
          >
            Send
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Friends;
