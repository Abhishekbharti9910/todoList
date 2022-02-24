import Todo from "./todo";

const Project = (projectNme, ttle, prio, date) => {
   
    const projectName = projectNme;
    const todo = Todo(ttle, prio, date);
    return {projectName, todo};
}

export default Project;