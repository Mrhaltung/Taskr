import React, { useEffect, useRef, useState } from "react";
import LogoSearch from "../components/LogoSearch";
import { useSelector } from "react-redux";
import "./_pages.css";
import { userChats } from "../api/AuthRequest";
import Conversation from "../components/Conversation";
import ChatBox from "../components/ChatBox";
import {
  UilSetting,
  UilEstate,
  UilBell,
  UilMessage,
} from "@iconscout/react-unicons";
import { Link } from "react-router-dom";
import { io } from "socket.io-client";

export default function Chat() {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const socket = useRef();

  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", user._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, [user]);

  useEffect(() => {
    const getChats = async () => {
      try {
        const { data } = await userChats(user._id);
        setChats(data);
      } catch (error) {
        console.log(error);
      }
    };
    getChats();
  }, [user._id]);

  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      setReceivedMessage(data);
    });
  }, [setReceivedMessage]);
  
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  return (
    <div className="Chat">
      <h2 style={{display: 'none'}}>{onlineUsers.length}</h2>
      <div className="Left-side-chat">
        <LogoSearch />
        <div className="Chat-container">
          <h2>Chats</h2>
          <div className="Chat-list">
            {chats.map((chat, ind) => {
              return (
                <div
                  key={ind}
                  onClick={() => {
                    setCurrentChat(chat);
                  }}
                >
                  <Conversation
                    data={chat}
                    currentUserId={user._id}
                    key={ind}

                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="Right-side-chat">
        <div
          className="navIcons"
          style={{ width: "280px", alignSelf: "flex-end" }}
        >
          <Link
            to="../home"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <UilEstate />
          </Link>
          <UilSetting />
          <UilBell />
          <Link to="/chat" style={{ textDecoration: "none", color: "inherit" }}>
            <UilMessage />
          </Link>
        </div>
        <ChatBox
          chat={currentChat}
          currentUser={user._id}
          setSendMessage={setSendMessage}
          receivedMessage={receivedMessage}
        />
      </div>
    </div>
  );
}
