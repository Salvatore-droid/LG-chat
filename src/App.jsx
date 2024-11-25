import Detail from "./componenets/detail/Detail"
import List from "./componenets/list/List"
import Chat from "./componenets/chat/Chat"

const App = () => {
  return (
    <div className='container'>
      <List/>
      <Chat/>
      <Detail/>
    </div>
  )
}

export default App