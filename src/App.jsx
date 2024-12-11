import Detail from "./componenets/detail/Detail"
import List from "./componenets/list/List"
import Chat from "./componenets/chat/Chat"
import Login from "./componenets/login/Login"
import Notification from "./componenets/notification/Notification"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./lib/firebase"
import { useUserStore } from "./lib/userStore"
import { useChatStore } from "./lib/chatStore"

const App = () => {

  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();

  useEffect(() =>{
    const unSub = onAuthStateChanged(auth, (user)=>{
      fetchUserInfo(user?.uid);

    return ()=>{
      unSub();
    }
    })
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
        {
          currentUser ? (
            <>
              <List/>
              {chatId && <Chat/>}
              {chatId && <Detail/>}
            </>
          ):(
              <Login/>
          )
        }; 
        <Notification/>
    </div>
  )
}

export default App