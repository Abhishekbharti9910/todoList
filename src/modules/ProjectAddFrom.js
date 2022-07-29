// css import
import './../styles/ProjectAddForm.css'


import camera from './collection_pic/camera.png';
import compass from './collection_pic/compass.png';
import dine from './collection_pic/dine.png';
import message from './collection_pic/message.png';
import map from './collection_pic/map.png';
import nature from './collection_pic/nature.png';
import notepad from './collection_pic/notepad.png';
import pushPin from './collection_pic/push-pin.png';
import relax from './collection_pic/relax.png';
import skill from './collection_pic/skill.png';

const pics = [camera, compass, dine, message, map, nature, notepad, pushPin, relax, skill];
const imageSet = (img) => {
    const image = new Image();
    image.classList.add("project-img");
    image.src = img;
    return image;
}


export default function form() {

    // whole thing look like this
    // const project = `
    //     <h3 >Add Collection </h3>
    //     <label>
    //         Project Name : 
    //         <input type="text" name="ProjectName" id="projectName" />
    //     </label>
    //     <div id="choose-pics">
    //     </div>
    //     <div id="submit-project"> Add </div>
    // `;
    // div.innerHTML = project;

    const div = document.createElement("div");
    const h3 = document.createElement("h3");
    h3.innerText = "Add Collection";
    div.append(h3);

    const label = document.createElement("label");
    label.innerText = "Project Name : ";
    const input = document.createElement("input");
    input.id = "projectName"
    input.name = "ProjectName"
    input.type = "text";
    label.appendChild(input);
    div.append(label);

    const picGalleria = document.createElement("div");
    picGalleria.id = "choose-pics";
    
    pics.forEach((pic) => {
        picGalleria.append(imageSet(pic));
    })

    div.append(picGalleria);

    const addBtn = document.createElement("div")
    addBtn.id = "submit-project";
    addBtn.innerText = "Add";
    div.append(addBtn);

    div.classList.add("project-add-form")
    div.classList.add("hide")





    return div;
}