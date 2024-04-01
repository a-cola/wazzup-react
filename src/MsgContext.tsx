import React, {createContext} from 'react'
import { useDB, Chat } from './db';

type MsgContexType = {
    chatList: Chat[];
    addChat: (group:boolean, name:string) => void;
    addMessage: (id: string, sender: 'sent' | 'received', text: string) => void;
};

export const MsgContext = createContext<MsgContexType>({
    chatList: [],
    addChat: () => {},
    addMessage: () => {},
});

export const MsgProvider = ({children}) => {
    const {chatList, addChat, addMessage} = useDB();

    return <>
        <MsgContext.Provider value={{chatList, addChat, addMessage}}>
            {children}
        </MsgContext.Provider>
    </>
}