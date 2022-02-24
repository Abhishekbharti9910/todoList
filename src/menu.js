import './styles/menu.css';
import deflt from './pngs/default.png';
import add from './pngs/add.png';

const menuHeading = () => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    div.id = "menu-heading";
    h2.innerText = "Collections";
    div.append(h2);

    return div;
}

const createCollection = (image, name) => {
    const div = document.createElement("div");
    div.classList = "collections-item";

    const collImage = new Image();
    collImage.src = image;

    const h5 = document.createElement("h5");
    h5.innerText = name;

    div.append(collImage);
    div.append(h5)

    return div;
}

const collectionsMenu = () => {
    const collections = document.createElement("div");
    collections.id = "menu-collections";
    collections.append(createCollection(deflt, "Default"));
    
    return collections;
}


const menuPanel = () => {
    const menubar = document.createElement("div");
    menubar.id = "menubar";
    
    menubar.append(menuHeading());
    menubar.append(collectionsMenu());

    return menubar;
}

export default menuPanel;