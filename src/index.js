import header from "./header.js";
import dashboard from "./dashboard.js";
import add from './modules/add';
import { addBtnClicked } from "./modules/eventsListner.js";

import './styles/header.css';


window.addEventListener('DOMContentLoaded', () => {
    
    // const header = document.getElementById("header");
    document.body.append(add());
    document.body.append(header());
    addBtnClicked();
    document.body.append(dashboard());
});
