import { useState } from 'react'

export interface Chat {
    id: string;
    group: boolean
    name: string
    text: string
    time: string
    count: string
    messages: Message[]
}

export interface Message {
    sender: string
    text: string
    time: string
}

export class MockDB {
    static instance: MockDB

    static getInstance() {
        if(!MockDB.instance) {
            MockDB.instance = new MockDB();
        }

        return MockDB.instance;
    }

    getRandomTime() {
        const hours = Math.floor(Math.random()*24).toString().padStart(2,'0');
        const minutes = Math.floor(Math.random()*60).toString().padStart(2,'0');

        return hours + ':' + minutes
    }

    private names = ["Giovanni","Giangiorgio", "Natascia", "Fabrizio", "Rianldo", "Michele", "Alice", "Iride"]

    private chatList:Chat[] = [
        { id:'1', group:false, name:"Hannah", text:"Che fai stasera?", time:"13:38", count:`2`,
            messages:[
              {sender:"Hannah", text:"Che fai stasera?", time:"13:38"},
              {sender:"Hannah", text:"Tutto ok", time:"13:38"},
              {sender:"sent", text:"Tutto bene, te?", time:"13:35"},
              {sender:"sent", text:"Ehi", time:"13:35"},
              {sender:"Hannah", text:"Ciao, come va?", time:"13:33"}
          ]},
        { id:'2', group:false, name:"Pippo", text:"Ok grazie", time:"20:12", count:`1`,
            messages:[
              {sender:"Pippo", text:"Ok grazie", time:"20:12"},
              {sender:"sent", text:"Ti ho usato come variabile anche oggi!", time:"19:02"},
            ]},
        { id:'3', group:false, name:"Paolo", text:"Facciamo un applauso!", time:"10:42", count:`1`,
            messages:[
              {sender:"Paolo", text:"Facciamo un applauso!", time:"10:42"},
            ]},
        { id:'4', group:true, name:"UniPi-Informatica", text:"Qualcuno può rispondere!!??!?!?", time:"03:12", count:`3`,
        messages:[
          {sender:"Giovanni", text:"Qualcuno può rispondere!!??!?!?", time:"03:12"},
          {sender:"Giovanni", text:"Quando c'è il compitino di IIA", time:"02:33"},
          {sender:"Giangiorgio", text:"hanno avviato la riunione", time:"14:12"},
        ]},
    ];

    getChatList() {
        return this.chatList;
    }

    getChat(id:string) {
        return this.chatList.find(c=>c.id===id);
    }

    getMessages(id:string) {
        return this.getChat(id)?.messages ?? [];
    }

    isGroup(name:string) {
        return this.getChat(name)?.group ?? false;
    }

    randomNameGenerator() {
        return this.names[Math.floor(Math.random()*this.names.length)]
    }

    addChat(group:boolean, name:string) {
        this.chatList = [...this.chatList, {
            id:window.crypto.randomUUID(),
            group:group,
            name:name,
            text:'',
            time:'',
            count:'',
            messages:[]
        }]
    }
    
    addMessage(id:string, sender:'sent'|'received', text:string) {
        const currentTime = new Date();
        const hours = currentTime.getHours().toString().padStart(2,'0');
        const minutes = currentTime.getMinutes().toString().padStart(2, '0');
        const msg:Message = {
            sender:this.isGroup(id)&&sender==="received"?this.randomNameGenerator():sender,
            text:text,
            time:hours+':'+minutes
        }
        this.chatList = this.chatList.map(c => c.id===id
        ? {...c, messages: [msg, ...c.messages]}
        : c);
    }
}

export function useDB() {
    const db = MockDB.getInstance();
    const [chatList, setChatList] = useState(db.getChatList());

    const addChat = (group:boolean, name:string) => {
        db.addChat(group, name);
        setChatList(db.getChatList());
        console.log("pippo")
    } 

    const addMessage = (id:string, sender:'sent'|'received', text:string) => {
        db.addMessage(id, sender, text);
        setChatList(db.getChatList());
    }
    
    return {
        chatList, addChat, addMessage
    }
}