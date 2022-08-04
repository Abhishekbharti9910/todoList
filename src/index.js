import header from "./header.js";
import dashboard from "./dashboard.js";
import add from './modules/add';
import { projectAdder } from "./menu.js";
import eventListners from "./modules/eventsListner.js";

import './styles/header.css';
import Project from "./modules/projectBuild.js";

var projects = [];
var todos = [];

window.addEventListener('DOMContentLoaded', () => {
    
    const allTheListners = eventListners();
    // const header = document.getElementById("header");
    document.body.append(add());
    document.body.append(header());
    document.body.append(dashboard(projects));
    allTheListners.addBtnClicked();
    allTheListners.addCollection();
    allTheListners.picSelected();
    allTheListners.projectSubmitBtnClicked(projects);
    console.log(projects);
});
