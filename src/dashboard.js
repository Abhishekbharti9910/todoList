import './styles/dashboard.css';
import menu from './menu';

const dashboard = () => {
    const main = document.createElement("main");
    main.id = "dashboard";
    main.append(menu());
    return main;
}

export default dashboard;