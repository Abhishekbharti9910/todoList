// all event listner are specified here

//1. for hiding and shoding form to add todos
import projectForm from './ProjectAddFrom';

const eventListners = () => (() => {
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

    const addCollection = () => {
        const div = document.getElementById("collAddBtn");
        div.addEventListener("click", ()=> {
            console.log("hello");
        })
        document.getElementsByTagName("body").innerHtml = projectForm();
    }

    return {addBtnClicked, addCollection}
})()






export default eventListners;