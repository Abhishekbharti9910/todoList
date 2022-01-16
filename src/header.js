import hamburg from './pngs/hamburg.png';
import collections from './pngs/collections.png';
import dashboard from './pngs/dashboard.png';
import add from './pngs/add.png';
import search from './pngs/search.png';
import notification from './pngs/notification.png';

let createUnorderedList = (numOfList, clsLis, ...args) => {

    let ul = document.createElement("ul")
    ul.classList.add("nav-list");
    
    for (let i = 0; i < numOfList; i++) {
        let myImage = new Image();
        myImage.src = args[i];

        let li = document.createElement("li");
        li.classList.add(clsLis);
        li.append(myImage);
        ul.appendChild(li);
    }

    
    // div.append(ul);

    return ul;
}


const leftHeaderContent = () => {
    const ul = createUnorderedList(3, "leftList", hamburg, dashboard, collections);
    return ul;
}

const rightHeaderContent = () => {
    const ul = createUnorderedList(3, "rightList", add, search, notification);
    return ul;

}



const header = () => {
    const header = document.createElement("header");

    const navbar = document.createElement("nav");
    navbar.id = "navbar";

    header.append(navbar);

    const dl = leftHeaderContent();
    const dr = rightHeaderContent();

    navbar.append(dl);
    navbar.append(dr);

    return header;
}

export default header;