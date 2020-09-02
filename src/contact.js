import renderHeader from './header'


const renderContact = () => {
    console.log('renderContact has been called');
    let content = document.getElementById('content');
    // renderHeader(content);

    let pageContent = document.createElement('div');
    content.appendChild(pageContent)
    pageContent.id = "page-content";

    let test = document.createElement('h4');
    pageContent.appendChild(test);
    test.textContent = "Reach out to us!";

    let bg = document.createElement('div');
    pageContent.appendChild(bg);
    bg.classList.add('background');

    let img = document.createElement('img');
    bg.appendChild(img);
    img.classList.add('background-image');
    img.src = "./img/contact_bg.jpg"
}

export default renderContact;
