const renderHome = () => {
    console.log('renderHome has been called');
    let content = document.getElementById('content');
    // renderHeader(content);

    let pageContent = document.createElement('div');
    content.appendChild(pageContent)
    pageContent.id = "page-content";

    let bg = document.createElement('div');
    pageContent.appendChild(bg);
    bg.classList.add('background');

    let img = document.createElement('img');
    bg.appendChild(img);
    img.classList.add('background-image');
    img.src = "./img/home_bg.jpg"

    let txt = document.createElement('h3');
    bg.appendChild(txt);
    txt.classList.add('background-text');
    txt.textContent = "Some random ass stuff to welcome you to out website!";
}


export default renderHome;