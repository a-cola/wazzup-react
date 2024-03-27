import React from "react"
import { useDB, Chat } from "./db"
import { ChatSmall } from "./ChatSmall";
import { useNavigate } from "react-router-dom";

export function ChatContainer({chatList}:{chatList:Chat[]}) {
    const navigate = useNavigate();

    const openChat = (chat:Chat) => {
        chat.count='';
        navigate('/chatlist/'+chat.id)
    }
    
    return <>
        <div className="chat-container">
			{chatList.map(c => <ChatSmall
                key={c.name}
                name={c.name}
                text={c.messages.length==0?'':c.messages[0].text}
                time={c.messages.length==0?'':c.messages[0].time}
                count={c.count}
                onClick={() => openChat(c)}
                />
            )}
		</div>
    </>
}