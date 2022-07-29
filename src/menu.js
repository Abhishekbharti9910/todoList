import './styles/menu.css';
import deflt from './pngs/default.png';
import add from './pngs/add.png';

// project pics import
import camera from './collection_pic/camera.png'
// projects pics import end here

// menubar heading
const menuHeading = () => {
    const div = document.createElement("div");
    const h2 = document.createElement("h2");
    div.id = "menu-heading";
    h2.innerText = "Collections";
    div.append(h2);

    return div;
}

// btn for adding collection object
const collAddBtn = () => {
    const div = document.createElement("div");
    div.id = "collAddBtn";
    div.innerText = "Add Collection";
    return div;
}

// collection-unit-card  
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

// collection creation 
const collectionsMenu = (projects) => {
    const collections = document.createElement("div");
    collections.id = "menu-collections";
    collections.append(createCollection(deflt, "Default"));
    if (projects != undefined && projects != null && projects.length != 0) {
        projects.map((project) => {
            collections.append(createCollection(project.pic, project.name));
        })
    }
    return collections;
}

// whole collection building
const menuPanel = (projects, todos) => {
    const menubar = document.createElement("div");
    menubar.id = "menubar";
    
    menubar.append(menuHeading());
    menubar.append(collectionsMenu());
    menubar.append(collAddBtn());

    return menubar;
}

export default menuPanel;