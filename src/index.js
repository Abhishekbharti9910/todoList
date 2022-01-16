import header from "./header.js";
import dashboard from "./dashboard.js";

import './styles/header.css';


window.addEventListener('DOMContentLoaded', () => {
    
    // const header = document.getElementById("header");
    document.body.append(header());
    document.body.append(dashboard());
});
