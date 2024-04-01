import React from "react";
import { ChatList } from "./ChatList";
import { CurrentChat } from "./CurrentChat";
import { MsgProvider } from "./MsgContext";

export function ChatPage() {
    return <>
        <MsgProvider>
            <ChatList />
            <CurrentChat />
        </MsgProvider>
    </>
}