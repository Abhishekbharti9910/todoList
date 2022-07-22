// all event listner are specified here

//1. for hiding and shoding form to add todos

const eventListners = () => (() => {
    const addBtnClicked = () => {
        console.log("hi");
        const btn = document.getElementById("add-btn");
        btn.addEventListener("click", () => {
        const form = document.querySelector(".form-add");
        form.classList.toggle("hide");
        })
    }

    return {addBtnClicked: addBtnClicked,}
})()






export default eventListners;