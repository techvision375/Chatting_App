import { createContext, useState, useEffect } from "react";
import { useAuth } from "./AuthProvider";
import io from "socket.io-client";
import { useContext } from "react";

const socketContext = createContext();

//it is a hook
export const useSocketContext = () => {
  return  useContext(socketContext);

};

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  const [onlineUsers, setOnlineUsers] = useState([]);

  const [authUser] = useAuth();
  // console.log(authUser)
  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:3002", {
        query: {
          userId: authUser.user._id,
        },
      });
      setSocket(socket);
      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users)
      });
      // just for performance
      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }


  }, [authUser]);
  return (
    <socketContext.Provider value={{ socket , onlineUsers }}>
      {children}
    </socketContext.Provider>

  );

};