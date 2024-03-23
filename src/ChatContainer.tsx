import React, { useState } from "react"
import { useContacts } from "./db"
import { ChatSmall } from "./ChatSmall";

export function ChatContainer() {
    const { contacts } = useContacts();
    
    return <>
        <div className="chat-container">
			{contacts.map(c => <ChatSmall key={c.name} name={c.name} text={c.text} time={c.time} count={c.count}/>)}
		</div>
    </>
}