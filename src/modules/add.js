// create form here
import '../styles/add.css' 
import img from '../pngs/logo.png';

const add = () =>{
    const div = document.createElement("div");
    div.classList.add("form-add");
    div.classList.add("hide");

    const mainDiv = document.createElement("div");
    mainDiv.id = "mainDiv";

    const logo = new Image();
    logo.src = img;
    logo.id = "logo";
    // mainDiv.append(logo);
    
    const form = `
                    <h2>Add your todo</h2>
                    <form>
                    <label for="title" class="form-label">Title*</label>
                    <input type="text" id="title" class="form-input">

                    <label class="form-label">Choose Project*</label>
                    <select id="project-select" class="form-input">
                    <option value="">add project</option>
                    <option value="">Default</option>
                    </select>

                    <label for="due date" class="form-label">Due date</label>
                    <input type="date" id="date" class="form-input">

                    <label for="priority" class="form-label" id="priority">Priority</label>
                    <label for="low" class="prioLow">low</label>
                    <input type="radio" id="3" name="priority" value="low">

                    <label for="low" class="prioMed">medium</label>
                    <input type="radio" id="2" name="priority" value="mid">

                    <label for="low" class="prioHigh">high</label>
                    <input type="radio" id="1" name="priority" value="high">

                    </form>
                    <div id= "submit">submit</div>`;



    div.innerHTML = form;

    
    // mainDiv.append(div);
    return div;
                    
}


export default add;