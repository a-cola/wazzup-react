import React, { useContext } from "react"
import { Chat } from "./db"
import { ChatSmall } from "./ChatSmall";
import { useNavigate } from "react-router-dom";
import { MsgContext } from "./MsgContext";

export function ChatContainer() {
    const navigate = useNavigate();

    const openChat = (chat:Chat) => {
        chat.count='';
        navigate('/chatlist/'+chat.id)
    }

    const MsgCtx = useContext(MsgContext);

    const chatList = MsgCtx.chatList;
    
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