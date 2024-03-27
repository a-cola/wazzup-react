import React from "react";
import { ChatList } from "./ChatList";
import { CurrentChat } from "./CurrentChat";
import { useDB } from "./db";

export function ChatPage() {
    const {chatList, addChat, addMessage} = useDB();

    return <>
        <ChatList chatList={chatList} addChat={addChat}/>
        <CurrentChat addMessage={addMessage}/>
    </>
}