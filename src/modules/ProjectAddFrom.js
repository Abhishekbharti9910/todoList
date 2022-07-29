// import camera from '../collection_pic/camera.png';
// import compass from '../collection_pic/compass.png';
// import dine from '../collection_pic/dine.png';
// import message from './../collection_pic/messsage.png';
// import map from '../collection_pic/map.png';
// import nature from '../collection_pic/nature.png';
// import notepad from '../collection_pic/notepad.png';
// import pushPin from '../collection_pic/push-pin.png';
// import relax from '../collection_pic/relax.png';
// import skill from '../collection_pic/skill.png';

// const pics = [camera, compass, dine, message, map, nature, notepad, pushPin, relax, skill];

export default function form() {
    const project = `
    <div id="project-add-form">
        <h3 >Add Collection </h3>
        <label>
            Project Name : 
            <input type="text" name="ProjectName" id="projectName" />
        </label>
        <div id="choose-pics">
        </div>
    </div>
    `;

    return project;
}