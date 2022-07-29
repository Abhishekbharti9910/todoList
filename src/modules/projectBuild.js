const Project = (projectNme, img) => {
   
    const projectName = projectNme;
    const image = img;
    
    return {projectName, image};
}

// this function return the array of all todos in same project
Project.prototype.getAllTodo = function(data, projectName) {
    let projectTodos = []
    if (data !== null || data.length !== 0) {
            projectTodos = data.filter((todo) => {
                if (projectName === todo.getProjectName()) {
                    return todo;
                }
            })
    }

    return projectTodos;
}

export default Project;