import Detail from "./componenets/detail/Detail"
import List from "./componenets/list/List"
import Chat from "./componenets/chat/Chat"
import Login from "./componenets/login/Login"

const App = () => {

  const user = true

  return (
    <div className='container'>
        {
          user ? (
            <>
              <List/>
              <Chat/>
              <Detail/>
            </>
          ):
              <Login/>
        }; 
    </div>
  )
}

export default App