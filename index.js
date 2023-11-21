const objectsArray = [{
    id: 1,
    name: "Stray Kids",
    photo: "./straykids.jpg"
}]

const cloneContainer = document.querySelector("#cloneContainer")
const select = document.querySelector("select")

function render(){
    cloneContainer.replaceChildren()
    select.replaceChildren()

    for (let object of objectsArray){
        const objectContainer = document.createElement("div")
        objectContainer.className = "objectContainer"
        cloneContainer.appendChild(objectContainer)

        const name = document.createElement("p");
        name.textContent = object.name;
        objectContainer.appendChild(name);

        const idNum = document.createElement("p");
        idNum.textContent = `ID: ${object.id}`;
        objectContainer.appendChild(idNum);

        const photo = document.createElement("img");
        photo.className = "photo"
        photo.src = object.photo
        objectContainer.appendChild(photo);

        const cloneButton = document.createElement("button")
        cloneButton.textContent = "Clone!";
        objectContainer.appendChild(cloneButton);

        const option = document.createElement("option");
        option.textContent = object.id;
        option.value = object.id;
        select.appendChild(option);

        cloneButton.addEventListener("click", () => {
            const clone = {...objectsArray[0], id: objectsArray.length+1}
            objectsArray.push(clone)
            render()
        })                        
    }

}

render()

select.addEventListener("change", (e) => {
    const cloneId = +e.target.value;
})


// select.addEventListener("change", (e) => {
//     // how can i console the id of the dragon that was selected?
//     const dragonId = +e.target.value;
//     // we need to look through our array of dragon and find one with the id of our dragonId
  
//     selectedDragon = dragons.filter((dragon) => dragon.id === dragonId)[0];
//     render();
//   });

