const Project = (projectNme, img) => {
   
    const title = projectNme;
    const image = img;
    
    return {title, image};
}

// // this function return the array of all todos in same project
// Project.prototype.getAllTodo = function(data, projectName) {
//     let projectTodos = []
//     if (data !== null || data.length !== 0) {
//             projectTodos = data.filter((todo) => {
//                 if (title=== todo.getProjectName()) {
//                     return todo;
//                 }
//             })
//     }

//     return projectTodos;
// }

export default Project;