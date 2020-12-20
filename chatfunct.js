

class Messages {
    #db = new Map();
    lastId = 0;
    constructor(){
        return true;
    };
    addMessage(msgText) {
        let id = this.lastId;
        let message = {};
        message.id = id;
        message.text = msgText
        this.#db.set(id,message);
        this.lastId++;
        return message.id
    }
    readMessage(id) {
        if(!this.#db.has(id)) throw new Error('Message with that id was not found')
        return this.#db.get(id);
    }
    readAll() {
        let arr = [];
        this.#db.forEach((value) => {
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
        let message = addTag(chatBody, 'span', msgBody.value, `message${this.addMessage(msgBody.value)}`, 'message', true);
        msgBody.value = null;
        let coord = message.offsetTop;
        chatBody.scrollTo(0,coord);
    }
    clear() {
        this.lastId = 0;
        return this.#db.clear();
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
        searchResults.innerHTML = null;
        let searchResult = messages.searchMsg(searchBar.value);
        if(searchResult == null) {
            searchBar.style.border = '1px solid red';
            setTimeout(() => {
                searchBar.style.border = '1px solid black';
            }, 10000);
        }else {
            searchBar.style.border = '1px solid green';
            setTimeout(() => {
                searchBar.style.border = '1px solid black';
            }, 10000);
            searchResults.style.display = 'block';
            for(let value of searchResult) {
                addTag(searchResults, 'span', value.text, `messageFound${value.id}`, 'message', true)
            }
            searchResult.forEach((value,index) => {
                let resultBubble = value.id;
                let searchedMsg = document.getElementById(`messageFound${resultBubble}`);
                let origMsg = document.getElementById(`message${resultBubble}`);
                searchedMsg.addEventListener('click',() => {
                    let coord = origMsg.offsetTop;
                    dropMenuUp();
                    chatBody.scrollTo(0,coord);
                    origMsg.style.border = '3px solid orange';
                    setTimeout(() => {
                        origMsg.style.border = 'none';
                    }, 10000);
                })
            })
        }
    }
}