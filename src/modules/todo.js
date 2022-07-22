
import { format,addDays } from 'date-fns.js';

const Todo = (projectNme, ttle, prio, date) => {
    const prioColor = ["red", "yellow", "green"];

    const title = ttle;
    const projectName = projectNme;
    let priority = prioColor[prio];
    let checklist = false;
    const dueDate = date;

    const changePriority = (prio) =>{
        priority = prioColor[prio];
    }

    const getProjectName = () => {
        return projectName;
    }

    const getDate = () => {
        return date;
    }

    const getPrio = () => {
        return priority;
    }

    const getDetails = () => {
        console.log("title : ",title);
        console.log("priority : ",priority);
        console.log("done : ",checklist);
    }
    

    return {title, dueDate, priority, checklist,
            changePriority, getDetails, getProjectName, getDate, getPrio
    };
}

export default Todo;




