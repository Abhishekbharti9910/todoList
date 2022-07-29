// all event listner are specified here

//1. for hiding and shoding form to add todos
import { sub } from 'date-fns';
import projectForm from './ProjectAddFrom';
// import project from './projectBuild'

const eventListners = () => (() => {

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

    // sumit project button clicked
    const projectSubmitBtnClicked = (project) => {
        const submit = document.getElementById("submit-project");
        submit.addEventListener("click", () => {
            const title = document.getElementById("projectName");
            console.log(title.value);
        })
    }

    // pic is choose for project
    const picSelected = () => {
        const pics = document.getElementsByClassName("project-img");
        let imgTag = null;
        pics.forEach(element => {
            element.addEventListener("click", (e) => {
                console.log(e);
                imgTag = e;
            })
        });
        return imgTag;
    }



    return {addBtnClicked, addCollection, projectSubmitBtnClicked, picSelected}
})()






export default eventListners;