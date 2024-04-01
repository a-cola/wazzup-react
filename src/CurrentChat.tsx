import React, { useContext } from "react"
import { OpenedChat } from "./OpenedChat";
import { MockDB } from "./db";
import { useLoaderData } from "react-router-dom";
import { MsgContext } from "./MsgContext";

export function CurrentChat () {
    const id = useLoaderData() as string;

    const db = MockDB.getInstance();

    const MsgCtx = useContext(MsgContext);
    const addMessage = MsgCtx.addMessage;

    const isOnline = () => {
        return Math.random() < 0.1 ? "online" : `Last access ${Math.floor(Math.random()*59+1)} minutes ago`;
      }

    const handleKeyUp = (e) => {
        if(e.key === 'Enter') {
            const message = e.target.value;
            if(message.trim().length == 0) return;
            addMessage(id, "sent", message);
            e.target.value = '';
        }
    
        if(e.key === 'Control') {
            const message = e.target.value;
            if(message.trim().length == 0) return;
            addMessage(id, "received", message);
            e.target.value = '';
        }

        if(e.key === 'Escape') {
            e.target.value = '';
        }
    };

    return <>
    <section className="current-chat">
        <div className="header">
            <div className="user">
                <div className="profile-pic">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"/>
                    </svg>
                </div>
                <div className="user-info">
                    <span className="name">{db.getChat(id)!.name}</span>
                    <span className="last-access">{isOnline()}</span>
                </div>
            </div>
            <button>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 512" style={{height: "18px"}}>
                <path d="M64 360a56 56 0 1 0 0 112 56 56 0 1 0 0-112zm0-160a56 56 0 1 0 0 112 56 56 0 1 0 0-112zM120 96A56 56 0 1 0 8 96a56 56 0 1 0 112 0z"/>
                </svg>
            </button>
        </div>

        <OpenedChat id={id}/>
                
        <div className="chat-text">
            <button className="emoticon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/>
                </svg>
            </button>
            <input type="text"
                style={{width:"92%", height:"100%", borderRadius: "20px", paddingLeft: "15px"}}
                placeholder="Type text..."
                id="myInput"
                onKeyUp={e=>handleKeyUp(e)}
                />
            <button className="mic">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                <path d="M192 0C139 0 96 43 96 96V256c0 53 43 96 96 96s96-43 96-96V96c0-53-43-96-96-96zM64 216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 89.1 66.2 162.7 152 174.4V464H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h72 72c13.3 0 24-10.7 24-24s-10.7-24-24-24H216V430.4c85.8-11.7 152-85.3 152-174.4V216c0-13.3-10.7-24-24-24s-24 10.7-24 24v40c0 70.7-57.3 128-128 128s-128-57.3-128-128V216z"/>
                </svg>
            </button>
        </div>
    </section>
    </>
}