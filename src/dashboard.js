import './styles/dashboard.css';
import menu from './menu';
import add from './modules/add';
import todoUnit from './modules/todoGUIstrip'


const collectionDashTemplate = () => {

    const card = document.createElement("div");
    card.id = "dash-card";
    const row1 = document.createElement("div");
    row1.classList.add("dash-card-element");
    row1.classList.add("dash-card-element-top");
    
    const row2 = document.createElement("div");
    row2.classList.add("dash-card-element");
    row2.classList.add("dash-card-element-bottom");

    // all todos are put inside content div
    const contentDiv = document.createElement("div");
    contentDiv.id = "contentDiv";
    contentDiv.classList.add("dash-card-element");

    //todos gui 
    contentDiv.appendChild(todoUnit());
    
    card.append(row1);
    card.append(contentDiv);
    card.append(row2);

    return card;
}

const dashContent = () => {
    const mainDiv = document.createElement("div");
    mainDiv.id = "dash-content";
    const h2 = document.createElement("h2");
    const h1 = document.createElement("h1");
    const divBtn = document.createElement("div");
    divBtn.id = "dash-btns";
    const overviewBtn = document.createElement("div");
    overviewBtn.classList.add("btn");
    overviewBtn.innerText = "daily overview";
    const statisticBtn = document.createElement("div");
    statisticBtn.innerText = "Statistics";
    statisticBtn.classList.add("btn");

    divBtn.append(overviewBtn);
    divBtn.append(statisticBtn);

    
    h2.innerText = "Dashboard"
    h1.innerHTML = "Good morning,<br> John Doe";
    
    mainDiv.append(h2);
    mainDiv.append(h1);
    mainDiv.append(divBtn);
    mainDiv.append(collectionDashTemplate());

    return mainDiv;
}



const dashboard = () => {
    const main = document.createElement("main");
    main.id = "dashboard";
    main.append(menu());
    main.append(dashContent());
    

    return main;
}

export default dashboard;