import React from "react";
import { MockDB } from "./db";

export function OpenedChat({id}:{id:string}) {
    const db = MockDB.getInstance();

    return <>
        <div className="opened-chat">
            {db.getChat(id)!.messages.map((message, index) => {
            if(message.sender == "sent") return (
            <div className="sent" key={index}>
                <div className="text-box-s">
                <span>{message.text}</span>
                <a className="chat-time" style={{color:"gray"}}>{message.time}</a>
                </div>
            </div>
            )
            else return (
            <div className="received" key={index}>
                <div className="text-box-r">
                {db.isGroup(id)
                    ? <a className="name">{message.sender}</a>
                    : <></>
                }
                <span>{message.text}</span>
                <a className="chat-time" style={{color:"gray"}}>{message.time}</a>
                </div>
            </div>
            )})}
        </div>
    </>
}