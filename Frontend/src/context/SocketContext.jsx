import { createContext, useState ,useEffect} from "react";
import { useAuth } from "./AuthProvider";
import io from "socket.io-client";
 
const socketContext = createContext();

export const SocketProvider = ({ children }) => {
  const [socket, setSocket] = useState();
  
  const [authUser] = useAuth();
  console.log(authUser)
  useEffect(() => {
    if (authUser) {
      const socket = io("http://localhost:3002", {
        query: {
          userId: authUser.user._id,
        },
      });
      setSocket(socket);
    }


  }, [authUser]);
  return  ( 
    <socketContext.Provider value={{socket}}>
      {children}
    </socketContext.Provider>

  );

};