import './styles/menu.css';
import deflt from './pngs/default.png';
import add from './pngs/add.png';
import Project from './modules/projectBuild';


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
const collectionsMenu = (element) => {
    const collections = document.createElement("div");
    collections.id = "menu-collections";

    return collections;
}

// project adder in left pane
const projectAdder = (project) => {
    console.log("collection add func", project);
    const collection = document.getElementById("menu-collections");
    collection.append(createCollection(project.image, project.title));
}

// whole collection building
const menuPanel = () => {
    const menubar = document.createElement("div");
    menubar.id = "menubar";

    menubar.append(menuHeading());
    menubar.append(collectionsMenu());
    menubar.append(collAddBtn());

    return menubar;
}

export  {menuPanel, projectAdder};