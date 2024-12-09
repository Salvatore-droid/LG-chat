import "./addUser.css"

const AddUser = () =>{
    return(
        <div className="addUser">
            <form action="">
                <input type="text" placeholder="username" name="username"/>
                <button>search</button>
            </form>
            <div className="user">
                <div className="detail">
                    <img src="./avatar.png" alt="" />
                    <span>Genius</span>
                </div>
                <button>Add User</button>
            </div>
        </div>
    )
}

export default AddUser