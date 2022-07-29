import header from "./header.js";
import dashboard from "./dashboard.js";
import add from './modules/add';
import eventListners from "./modules/eventsListner.js";

import './styles/header.css';


window.addEventListener('DOMContentLoaded', () => {
    
    const allTheListners = eventListners();
    // const header = document.getElementById("header");
    document.body.append(add());
    document.body.append(header());
    document.body.append(dashboard());
    allTheListners.addBtnClicked();
    allTheListners.addCollection();
});
