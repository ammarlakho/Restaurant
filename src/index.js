import renderHome from './home.js';
import renderMenu from './menu.js';
import renderContact from './contact.js'
import renderHeader from './header.js';

let content = document.getElementById('content')
renderHeader(content);
renderHome();


let homeTab = document.getElementById("home-tab");
homeTab.addEventListener('click', switchTabs)

let menuTab = document.getElementById("menu-tab");
menuTab.addEventListener('click', switchTabs)

let contactTab = document.getElementById("contact-tab");
contactTab.addEventListener('click', switchTabs)

function switchTabs(e) {
    let id = e.target.id;
    console.log("switching tabs");
    console.log(id);
    clearPageContent();

    if (id == 'home-tab') {
        renderHome();
    }
    else if (id == 'menu-tab') {
        renderMenu();
    }
    else if(id == 'contact-tab') {
        renderContact();
    }
}

function clearPageContent() { 
    var pageContent = document.getElementById('page-content'); 
      
    while(pageContent.firstChild) { 
        pageContent.removeChild(pageContent.firstChild); 
    } 
    pageContent.remove();

} 

