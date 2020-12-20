const chatBody = document.getElementsByClassName('chat-content')[0];
const msgBody = document.getElementById('messageField');
const sendBtn = document.getElementById('sendBtn');
const searchResults = document.getElementById('search-results');
const searchedMsg = searchResults.getElementsByClassName('message')

class Messages {
    db = new Map();
    lastId = 0;
    constructor(){

    };
    addMessage(msgText) {
        let id = this.lastId;
        let message = {};
        message.id = id;
        message.text = msgText
        this.db.set(id,message);
        this.lastId++;
        return message.id
    }
    readMessage(id) {
        if(!this.db.has(id)) throw new Error('Message with that id was not found')
        return this.db.get(id);
    }
    readAll() {
        let arr = [];
        this.db.forEach((value) => {
            arr.push(value)
        })
        return arr;
    }
    searchMsg(word) {
        let msgArr = this.readAll();
        let ansArr = [];
        for(let i in msgArr){
            let msg = msgArr[i].text;
            if (msg.search(word)>-1){
                ansArr.push(msgArr[i]);
            } else continue;
        }
        if(ansArr.length === 0) return null;
        else return ansArr;
    }
    sendMsg() {
        let userTxt = msgBody.value;
        let message = document.createElement('span');
        let msgText = document.createTextNode(`${userTxt}`);
        let breakLine = document.createElement('br');
        message.appendChild(msgText);
        message.className = 'message';
        message.id = `message${this.addMessage(userTxt)}`
        chatBody.appendChild(message);
        chatBody.appendChild(breakLine);
        msgBody.value = null;
    }
}

let messages = new Messages();

sendBtn.addEventListener('click',messages.sendMsg);
msgBody.onkeypress = (event) => {
    if(event.keyCode === 13) {
        messages.sendMsg();
    }
}
searchBar.onkeypress = (event) => {
    if(event.keyCode === 13) {
        let searchResult = messages.searchMsg(searchBar.value);
        if(searchResult == null) {
            searchBar.style.border = '1px solid red';
        }else {
            searchResults.style.display = 'block';
            for(let value of searchResult) {
                let msg = value.text;
                let msgBln = document.createElement('span');
                let msgText = document.createTextNode(`${msg}`);
                let breakLine = document.createElement('br');
                msgBln.appendChild(msgText);
                msgBln.className = 'message';
                msgBln.id = `messageFound${msg.id}`;
                searchResults.appendChild(msgBln);
                searchResults.appendChild(breakLine);
            }
            for(let msgBox in searchedMsg) {
                msgBox.addEventListener('click', ()=> {
                    let origMsg = chatBody.getElementById(``)
                })
            }
        }
    }
}