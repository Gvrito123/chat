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
    dropMenu.style.display = 'block';
    dropMenu.style.animation = 'chatOpen 1s';
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
    searchBar.style.animation = 'chatOpen 1s';
    list.style.animation = 'chatOpen 1s';
    searchBar.style.display = 'inline-block';
    searchShowBtn.style.display = 'none'
    searchHideBtn.style.display = 'inline'
}

const closeSearchField = () => {
    searchBar.style.animation = 'chatClose 0.2s';
    list.style.animation = 'chatClose 0.2s';
    setTimeout(() => {
        searchBar.style.display = 'none';
        searchHideBtn.style.display = 'none';
        searchShowBtn.style.display = 'inline';
    }, 150);
}

dropdBtn.addEventListener('click',dropMenuDown);
dropuBtn.addEventListener('click',dropMenuUp);
closedChat.addEventListener('click',openChat);
closeBtn.addEventListener('click',closeChat);
searchShowBtn.addEventListener('click',showSearchField);
searchHideBtn.addEventListener('click',closeSearchField);

