import './../styles/todoGUI.css';

// desing unit of todo strip

const todoUnit = () =>{
    const continer = document.createElement("div");
    continer.classList.add("todo-strip");

    // priority indicator
    const circle = document.createElement("div");
    circle.classList.add("circle");
    continer.append(circle)
    
    // title in the todo
    // const titleContainer = document.createElement("div");
    // titleContainer.classList.add("title-container");
    const h2 = document.createElement("h6");
    h2.innerText = "hey change it dynamically";
    // titleContainer.append(h2);
    continer.append(h2);

    // todo strip remover icon
    let rmvBtn = document.createElement("button");
    rmvBtn.classList.add("button-remove");
    continer.append(rmvBtn);

    

    return continer;
}

export default todoUnit;