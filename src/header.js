const renderHeader = (content) => {
    console.log('renderHead has been called');
    let headerDiv = document.createElement('div');
    content.appendChild(headerDiv);
    headerDiv.classList.add('header');
    
    let companyName = document.createElement('strong');
    headerDiv.appendChild(companyName);
    companyName.textContent = "Food Gasm";
    
    let navbar = document.createElement('ul');
    headerDiv.appendChild(navbar);

    let l1 = document.createElement('li');
    navbar.appendChild(l1);
    let a1 = document.createElement('a');
    l1.appendChild(a1); 
    a1.id = "home-tab";
    a1.href = '#';
    a1.textContent = "Home";

    let l2 = document.createElement('li');
    navbar.appendChild(l2);
    let a2 = document.createElement('a');
    l2.appendChild(a2); 
    a2.id = "menu-tab";
    a2.href = '#';
    a2.textContent = "Menu";

    let l3 = document.createElement('li');
    navbar.appendChild(l3);
    let a3 = document.createElement('a');
    l3.appendChild(a3); 
    a3.id = "contact-tab";
    a3.href = '#';
    a3.textContent = "Contact";
}

export default renderHeader;