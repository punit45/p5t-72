import React from 'react';
import "./Main.css";
import { assets } from "../../assets/assets";


const Main = () => {
    return (
        <div className='main'>
            <div className='nav'>
                <p>Gemini</p>
                <img src={assets.user_icon} alt="" />
            </div>
            <div className="mainContainer">
                <div className="greet">
                    <p><span>Hello, Tinup!!</span></p>
                    <p>How can i help you today?</p>
                </div>
                <div className="cards">
                    <div className="card">
                        <p>Suggest few things for travelling</p>
                        <img src={assets.compass_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Briefly tell me about this topic: Urban planning</p>
                        <img src={assets.bulb_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Brainstorming activity for employees</p>
                        <img src={assets.message_icon} alt="" />
                    </div>
                    <div className="card">
                        <p>Improve readability of the following code</p>
                        <img src={assets.code_icon} alt="" />
                    </div>
                </div>
                <div className="mainBottom">
                    <div className="searchBox">
                        <input type="text" placeholder='Enter a prompt Here' />
                        <div>
                            <img src={assets.gallery_icon} alt="" />
                            <img src={assets.mic_icon} alt="" />
                            <img src={assets.send_icon} alt="" />
                        </div>
                    </div>
                    <p className='bottomInfo'>
                        Gemini May Show Inaccurate info, including about people, so double-check its responses.Your privacy  and Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Main