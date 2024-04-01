import React from "react";
import { ChatList } from "./ChatList";
import { MsgProvider } from "./MsgContext";

export function StartPage() {
    return <>
        <MsgProvider>
            <ChatList />
        </MsgProvider>
        <span className="no-chat">Seleziona una chat dalla lista</span>
    </>
}