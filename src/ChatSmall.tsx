import React from "react";
import { useMessages } from "./db";

export function ChatSmall({name, text, time, count}:{name:string, text:string, time:string, count:string}) {
    const {messages} = useMessages();

    return <>
        <div className="chat-small">
            <div className="profile-pic">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                </svg>
            </div>
            {name=="Hannah"?<>
                <div className="last-chat">
                    <span>{name}</span>
                    <span style={{fontSize: "10px", color: "rgb(89, 89, 89)"}}>{messages[0].text}</span>
                </div>
                <div className="info">
                    <span className="time">{messages[0].time}</span>
                </div>
            </>
            :
            <>
                <div className="last-chat">
                    <span>{name}</span>
                    <span style={{fontSize: "10px", color: "rgb(89, 89, 89)"}}>{text}</span>
                </div>
                <div className="info">
                    <span className="time">{time}</span>
                    <span className="notify-count">{count}</span>
                </div>
            </>
            }       
        </div>
    </>
}