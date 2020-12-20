const chatBody = document.getElementsByClassName('chat-content')[0];
const msgBody = document.getElementById('messageField');
const sendBtn = document.getElementById('sendBtn');
const searchResults = document.getElementById('search-results');
const searchedMsg = searchResults.getElementsByClassName('message');
const closedChat = document.getElementById('chat-closed');
const openedChat = document.getElementById('chat-open');
const closeBtn = document.getElementById('x-button');
const dropdBtn = document.getElementById('dropdown');
const dropuBtn = document.getElementById('dropup');
const dropMenu = document.getElementsByClassName('dropdown-menu')[0];
const searchShowBtn = document.getElementById('searchShow');
const searchHideBtn = document.getElementById('searchHide');
const searchBar = document.getElementById('searchField');
const list = document.getElementById('dropdown-ul');
const clearBtn = document.getElementById('clear');
const confirm = document.getElementById('confirmation-li');
const acceptBtn = document.getElementById('optionYes');
const declineBtn = document.getElementById('optionNo');

const openChat = () => {
    openedChat.style.animation = 'chatOpen 1s';
    openedChat.style.display = 'block';
    closedChat.style.display = 'none';
}

const closeChat = () => {
    openedChat.style.animation = 'chatClose 0.2s';
    setTimeout(() => {
        openedChat.style.display = 'none';
        closedChat.style.display = 'block';
    }, 150);
}

const dropMenuDown = () => {
    dropMenu.style.display = 'flex';
    dropMenu.style.animation = 'chatOpen 0.5s';
    dropdBtn.style.display = 'none';
    dropuBtn.style.display = 'inline';
}

const dropMenuUp = () => {
    dropMenu.style.animation = 'chatClose 0.2s';
    setTimeout(() => {
        dropMenu.style.display = 'none';
        dropuBtn.style.display = 'none';
        dropdBtn.style.display = 'inline';
    }, 150);
}

const showSearchField = () => {
    searchBar.style.display = 'block';
    searchShowBtn.style.display = 'none'
    searchHideBtn.style.display = 'inline'
}

const closeSearchField = () => {
    searchBar.style.display = 'none';
    searchHideBtn.style.display = 'none';
    searchShowBtn.style.display = 'inline';
}
const confirmation = () => {
    acceptBtn.style.display = 'block';
    declineBtn.style.display = 'block';
    confirm.style.display = 'block';
}
const clearResponse = () => {

}
const confirmationHide = () => {
    acceptBtn.style.display = 'none';
    declineBtn.style.display = 'none';
    confirm.style.display = 'none';
}
const addTag = (target,tag,value,id,classname,br) => {
    // if(typeof target != 'string') throw new Error('target tag is required and should be a string');
    if(typeof tag != 'string') throw new Error('tag is required and should be a string');
    if(typeof value == 'undefined') throw new Error('value is required');
    let newTag = document.createElement(`${tag}`);
    let newInner = document.createTextNode(`${value}`);
    newTag.appendChild(newInner);
    if(typeof id != 'undefined') {
        if(typeof id != 'string') throw new Error('id should be a string');
        newTag.id = `${id}`;
    }
    if(typeof classname != 'undefined') {
        // if(typeof classname != 'string') throw new Error('class should be a string');
        newTag.className = `${classname}`;
    }
    target.appendChild(newTag);
    if(typeof br != 'undefined') {
        if(typeof br != 'boolean') throw new Error('br should be a boolean');
        let breakLine = document.createElement('br');
        target.appendChild(breakLine);
    }
    return newTag;
}

dropdBtn.addEventListener('click',dropMenuDown);
dropuBtn.addEventListener('click',dropMenuUp);
closedChat.addEventListener('click',openChat);
closeBtn.addEventListener('click',closeChat);
searchShowBtn.addEventListener('click',showSearchField);
searchHideBtn.addEventListener('click',closeSearchField);
clearBtn.addEventListener('click',() => {
    confirmation();
    acceptBtn.onclick = () => {
        confirmationHide();
        dropMenuUp();
        chatBody.innerHTML = null;
        searchResults.innerHTML = null;
        messages.clear();
    }
    declineBtn.onclick = () => {
        confirmationHide();
    }
})
