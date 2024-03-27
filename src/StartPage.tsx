import React from "react";
import { ChatList } from "./ChatList";
import { useDB } from "./db";

export function StartPage() {
    const {chatList, addChat} = useDB();
    
    return <>
        <ChatList chatList={chatList} addChat={addChat}/>
        <span className="no-chat">Seleziona una chat dalla lista</span>
    </>
}