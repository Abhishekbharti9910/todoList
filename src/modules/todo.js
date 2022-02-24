
import { format,addDays } from 'date-fns.js';

const Todo = (ttle, prio, date) => {
    const title = ttle;
    const prioColor = ["red", "yellow", "green"];
    let priority = prioColor[prio];
    // const project = pro
    const dueDate = date;
    let checklist = false;

    const changePriority = (prio) =>{
        priority = prioColor[prio];
    }

    const getDetails = () => {
        console.log("title : ",title);
        console.log("priority : ",priority);
        console.log("date : ", format(date, 'dd-MM-yyyy'));
        console.log("done : ",checklist);
    }
    
    // const changeChecklist = (check) => { 
    // }

    return {title, dueDate, priority, checklist,
            changePriority,getDetails
    };
}

export default Todo;




