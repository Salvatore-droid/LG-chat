import { auth } from "../../lib/firebase"
import "./detail.css"

const Detail = () => {
    return (
        <div className="detail">
            <div className="user">
                <img src="./avatar.png" alt="" />
                <h2>Angelina</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat settings</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy and help</span>
                        <img src="./arrowUp.png" alt="" />
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                </div>
                <div className="photo">
                    <div className="photoItem">
                        <img src="./gen.jpg" alt="" />
                        <span>Lorem ipsum dolor sit.</span>
                    </div>
                    <img src="./download.png" alt="" className="icons"/>
                </div>
                <div className="photo">
                    <div className="photoItem">
                        <img src="./gen.jpg" alt="" />
                        <span>Lorem ipsum dolor sit.</span>
                    </div>
                    <img src="./download.png" alt="" className="icons"/>
                </div>
                <div className="photo">
                    <div className="photoItem">
                        <img src="./gen.jpg" alt="" />
                        <span>Lorem ipsum dolor sit.</span>
                    </div>
                    <img src="./download.png" alt="" className="icons"/>
                </div>
                <div className="photo">
                    <div className="photoItem">
                        <img src="./gen.jpg" alt="" />
                        <span>Lorem ipsum dolor sit.</span>
                    </div>
                    <img src="./download.png" alt="" className="icons"/>
                </div>
                <div className="photo">
                    <div className="photoItem">
                        <img src="./gen.jpg" alt="" />
                        <span>Lorem ipsum dolor sit.</span>
                    </div>
                    <img src="./download.png" alt="" className="icons" />
                </div>
                <div className="photo">
                    <div className="photoItem">
                        <img src="./gen.jpg" alt="" />
                        <span>Lorem ipsum dolor sit.</span>
                    </div>
                    <img src="./download.png" alt="" className="icons"/>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="./arrowDown.png" alt="" />
                    </div>
                </div>
            </div>
            <div className="buttons">
                <button className="block">Block User</button>
                <button className="logout" onClick={()=>auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail