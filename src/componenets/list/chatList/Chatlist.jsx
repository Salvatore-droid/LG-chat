import { useEffect, useState } from "react"
import "./chatList.css"

const Chatlist = () => {
    const [addMode, setAddMode] = useState(false);

    

    return (
        <div className="chatList">
            <div className="search">
                <div className="searchbar">
                    <img src="./search.png" alt="" />
                    <input type="text" placeholder="search" />
                </div>
                <img src={addMode ? "./minus.png" : "./plus.png"} alt="" className="add" onClick={() => setAddMode((prev) => !prev)}/>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
            <div className="item">
                <img src="./avatar.png" alt="" />
                <div className="texts">
                    <span>Genius Richard</span>
                    <p>what's up my dear</p>
                </div>
            </div>
        </div>
    )
}

export default Chatlist