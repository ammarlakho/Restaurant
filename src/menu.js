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
    test.textContent = "Menu Itemssss";

}

export default renderContact;
