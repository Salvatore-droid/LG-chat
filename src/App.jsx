import Detail from "./componenets/detail/Detail"
import List from "./componenets/list/List"
import Chat from "./componenets/chat/Chat"
import Login from "./componenets/login/Login"
import Notification from "./componenets/notification/Notification"

const App = () => {

  const user = false

  return (
    <div className='container'>
        {
          user ? (
            <>
              <List/>
              <Chat/>
              <Detail/>
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