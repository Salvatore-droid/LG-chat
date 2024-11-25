import { useState } from "react"
import "./chat.css"

const Chat = () => {
    const [text, setText] = useState("");
     return (
        <div className="chat">
            <div className="top">
                <div className="user">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <span>Mifetia</span>
                        <p>I'm not everyone's cup of tea</p>
                    </div>
                </div>
                <div className="icons">
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>
            </div>
            <div className="center">
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto error ratione, similique dolorem mollitia eum dignissimos iure officiis suscipit corrupti, ipsum, 
                            saepe aut necessitatibus rerum quibusdam porro maiores enim quia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message-own">
                    <div className="texts">
                        <img src="./true.jpg" alt="" />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto error ratione, similique dolorem mollitia eum dignissimos iure officiis suscipit corrupti, ipsum, 
                            saepe aut necessitatibus rerum quibusdam porro maiores enim quia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto error ratione, similique dolorem mollitia eum dignissimos iure officiis suscipit corrupti, ipsum, 
                            saepe aut necessitatibus rerum quibusdam porro maiores enim quia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message-own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto error ratione, similique dolorem mollitia eum dignissimos iure officiis suscipit corrupti, ipsum, 
                            saepe aut necessitatibus rerum quibusdam porro maiores enim quia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto error ratione, similique dolorem mollitia eum dignissimos iure officiis suscipit corrupti, ipsum, 
                            saepe aut necessitatibus rerum quibusdam porro maiores enim quia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message-own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto error ratione, similique dolorem mollitia eum dignissimos iure officiis suscipit corrupti, ipsum, 
                            saepe aut necessitatibus rerum quibusdam porro maiores enim quia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message">
                    <img src="./avatar.png" alt="" />
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto error ratione, similique dolorem mollitia eum dignissimos iure officiis suscipit corrupti, ipsum, 
                            saepe aut necessitatibus rerum quibusdam porro maiores enim quia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
                <div className="message-own">
                    <div className="texts">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Iusto error ratione, similique dolorem mollitia eum dignissimos iure officiis suscipit corrupti, ipsum, 
                            saepe aut necessitatibus rerum quibusdam porro maiores enim quia.
                        </p>
                        <span>1 min ago</span>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="icons">
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type="text" placeholder="Message..." onChange={e=>setText(e.target.value)} />
                <div className="emoji">
                    <img src="./emoji.png" alt="" />
                </div>
                <button className="send-button">Send</button>
            </div>
        </div>
    )
}

export default Chat