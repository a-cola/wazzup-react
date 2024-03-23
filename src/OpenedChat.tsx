import React, { useState } from "react";
import { useMessages } from "./db";

export function OpenedChat() {
    const {messages} = useMessages();

    return <>
        <div className="opened-chat">
            {messages.map((message, index) => {
            

            if(message.sr == "sent") return (
            <div className="sent" key={index}>
                <div className="text-box-s">
                <span>{message.text}</span>
                <a className="chat-time" style={{color:"gray"}}>{message.time}</a>
                </div>
            </div>
            )
            else if(message.sr == "received") return (
            <div className="received" key={index}>
                <div className="text-box-r">
                <a className="name">Hannah</a>
                <span>{message.text}</span>
                <a className="chat-time" style={{color:"gray"}}>{message.time}</a>
                </div>
            </div>
            )
        })}
        </div>
    </>
}