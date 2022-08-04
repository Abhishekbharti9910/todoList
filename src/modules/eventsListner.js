// all event listner are specified here

//1. for hiding and shoding form to add todos
import { sub } from 'date-fns';
import projectForm from './ProjectAddFrom';
import Project from './projectBuild';
import { projectAdder } from '../menu';
// import project from './projectBuild'

const eventListners = () => (() => {
    var img;
    var projects = []
    // todo adder
    const addBtnClicked = () => {
        console.log("hi");
        const btn = document.getElementById("add-btn");
        btn.addEventListener("click", () => {
        const form = document.querySelector(".form-add");
        form.classList.toggle("hide");
        })
    }

    const hamburgClicked = () => {

    }

    // add collection or project button button clicked
    const addCollection = () => {
        const div = document.getElementById("collAddBtn");
        div.addEventListener("click", ()=> {
            const form = document.querySelector(".project-add-form");
            form.classList.toggle("hide");
        })
        const body = document.querySelector("body");
        body.append(projectForm());
    }

    // submit project button clicked
    const projectSubmitBtnClicked = () => {
        const submit = document.getElementById("submit-project");
        
        submit.addEventListener("click", () => {
            const title = document.getElementById("projectName");
            console.log(title.value);
            console.log(img.srcElement.src);
            let project = Project(title.value, img.srcElement.src);
            console.log(project);
            projects.push(project);
            projects.forEach( project => {
                projectAdder(project)
            })
            // please check here is error and
            console.log(projects); 
        })

    }

    // pic is choose for project
    const picSelected = () => {
        const pics = document.querySelectorAll(".project-img");
        pics.forEach(element => {
            element.addEventListener("click", (e) => {
                img = e;
                // return e;
            })
        });
    }

    // when clicked make submit btn active



    return {addBtnClicked, addCollection, projectSubmitBtnClicked, picSelected}
})()






export default eventListners;