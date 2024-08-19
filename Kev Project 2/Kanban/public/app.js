import Card from "./card.js";
import Mover from "./mover.js";


export default class App {

  constructor() {
    this.mover = new Mover();
  }


  addCard(col, title, color) {
    this.col = col;
    let mycard = new Card(title, color);
    mycard.addToCol(col, this.mover);


    fetch('./cardTemplate.html')
      .then(data => data.text())
      .then(html => {
        let doc = html.replace("[TEMPLATE]", mycard.title.toUpperCase());
        let col = doc.replace("[COLORTEMP]", mycard.color);
        let dre = col.replace("[DELETEID]", `delete-${document.getElementById("liveCount").innerHTML}`);
        let vre = dre.replace("[EDITID]", `edit-${document.getElementById("liveCount").innerHTML}`);
        let she = vre.replace("[NODESCRIPTION]", mycard.text);
        let bhe = she.replace("[EDITTEXTID]", `edittxt-${document.getElementById("liveCount").innerHTML}`);
        let khe = bhe.replace("[DESCRIPTIONID]", `describe-${document.getElementById("liveCount").innerHTML}`);
        let zhe = khe.replace("[FIRSTDESCRIPTION]", mycard.text);
        let gre = zhe.replace("[MOVEID]", `move-${document.getElementById("liveCount").innerHTML}`);
        let bre = gre.replace("[MOVEDESTINATIONID]", `destination-${document.getElementById("liveCount").innerHTML}`);
        let jhe = bre.replace("[CARDID]", `card-${document.getElementById("liveCount").innerHTML}`);
        console.log(html);
        document.getElementById("todo").insertAdjacentHTML("beforeend", jhe);

        var btn = document.createElement("button");
        btn.setAttribute("id", `btn-${document.getElementById("liveCount2").innerHTML}`)
        let text = document.createTextNode("— Move here —");
        btn.setAttribute("class", "moveHere");
        btn.appendChild(text);
        document.getElementById("todo").insertAdjacentElement("beforeend", btn);





        let deleteButton = document.getElementById(`delete-${document.getElementById("liveCount").innerHTML}`);
        deleteButton.addEventListener("click", (e) => {
          e.preventDefault();
          let cardel = deleteButton.parentElement.parentElement;
          let destdel = e.currentTarget.parentElement.parentElement.nextSibling;
          cardel.remove();
          destdel.remove();

        })


        let editButton = document.getElementById(`edit-${document.getElementById("liveCount").innerHTML}`);
        let editTextArea = document.getElementById(`edittxt-${document.getElementById("liveCount").innerHTML}`);
        let description = document.getElementById(`describe-${document.getElementById("liveCount").innerHTML}`)

        editButton.addEventListener("click", (d) => {
          d.preventDefault();
          editTextArea.style.display = "block";
          editTextArea.focus();
          editTextArea.select();
          description.style.display = "none";
          editTextArea.addEventListener("blur", (e) => {
            editTextArea.style.display = "none";
            description.style.display = "block";
            description.innerHTML = editTextArea.value;
          })

        })


        let moveButton = document.getElementById(`move-${document.getElementById("liveCount").innerHTML}`);
        let destinations = document.getElementsByClassName("moveHere");


        moveButton.addEventListener("click", (v) => {
          v.preventDefault();
          moveButton.parentElement.parentElement.setAttribute("class", "moving");
          for (var i = 0; i < destinations.length; i += 1) {
            destinations[i].style.display = "block";

          }
        })


        let userclick = document.getElementById(`btn-${document.getElementById("liveCount2").innerHTML}`);
        userclick.addEventListener("click", (e) => {
          e.preventDefault();

          let cardmove = document.getElementsByClassName("moving")[0];
          let cardbut = cardmove.nextSibling;
          e.currentTarget.insertAdjacentElement("afterend", cardmove);
          cardmove.insertAdjacentElement("afterend", cardbut);
          cardmove.classList.remove("moving");
          for (var i = 0; i < destinations.length; i += 1) {
            destinations[i].style.display = "none";

          }





        })

        let sectionclick = document.getElementById(`btn-${document.getElementById("liveCount").innerHTML}`);
        sectionclick.addEventListener("click", (e) => {
          e.preventDefault();

          let cardmove = document.getElementsByClassName("moving")[0];
          let cardbut = cardmove.nextSibling;
          e.currentTarget.insertAdjacentElement("afterend", cardmove);
          cardmove.insertAdjacentElement("afterend", cardbut);
          cardmove.classList.remove("moving");
          for (var i = 0; i < destinations.length; i += 1) {
            destinations[i].style.display = "none";

          }



        })


        //Cancel Move if Add button is triggered
        document.getElementById("addButton").addEventListener("click", (e) => {
          let cardmove = document.getElementsByClassName("moving")[0];
          if (cardmove !== null && cardmove !== undefined) {
            cardmove.classList.remove("moving");
            for (var i = 0; i < destinations.length; i += 1) {
              destinations[i].style.display = "none";
            }
          }
        })

        //Cancel Move if Delete Button is Triggered
        deleteButton.addEventListener("click", (e) => {
          let cardmove = document.getElementsByClassName("moving")[0];
          cardmove.classList.remove("moving");
          for (var i = 0; i < destinations.length; i += 1) {
            destinations[i].style.display = "none";

          }
        })


        // const draggableItem = document.getElementById(`card-${document.getElementById("liveCount").innerHTML}`);
        // const droppableArea1 = document.getElementById("todo")
        // const droppableArea2 = document.getElementById("doing")
        // const droppableArea3 = document.getElementById("done")



        // draggableItem.addEventListener("drag",(e)=>{
        //   e.preventDefault();
        //   let dragged = e.currentTarget; 

        //   droppableArea1.addEventListener("dragover",(e)=>{
        //     e.preventDefault();
        //     droppableArea1.appendChild(dragged);
        //   })
        //   droppableArea2.addEventListener("dragover",(e)=>{
        //     e.preventDefault();
        //     droppableArea2.appendChild(dragged);
        //   })
        //   droppableArea3.addEventListener("dragover",(e)=>{
        //     e.preventDefault();
        //     droppableArea3.appendChild(dragged);
        //   })
        // })

        const draggables = document.querySelectorAll(".cards");
        const droppables = document.querySelectorAll(".moveHere");



        draggables.forEach(draggable => {
          draggable.addEventListener('dragstart', () => {
            draggable.classList.add('dragging');
            draggable.nextElementSibling.classList.add('draggingbutton');
            for (var i = 0; i < destinations.length; i += 1) {
              destinations[i].style.display = "block";
  
            }

          })
          draggable.addEventListener("dragend", () => {
            draggable.classList.remove('dragging');
            draggable.nextElementSibling.classList.remove('draggingbutton');
            for (var i = 0; i < destinations.length; i += 1) {
              destinations[i].style.display = "none";
  
            }
          })
        })

        droppables.forEach(droppable => {
          droppable.addEventListener("dragover", (e) => {
            e.preventDefault();
            const draggable = document.querySelector('.dragging');
            const draggable2 = document.querySelector('.draggingbutton');

            // droppable.insertAdjacentElement("afterend",draggable.nextElementSibling);
            droppable.insertAdjacentElement("afterend", draggable2)
            droppable.insertAdjacentElement("afterend", draggable)
          })
        })

        // function getDragAfterElement(droppable,y){
        //   const draggableElements = [...droppable.querySelectorAll('draggable:not(.dragging)')]
        //   draggableElements.reduce((closest,child)=>{
        //     const box = child.getBoundingClientRect();

        //   }, {offset: Number.POSITIVE_INFINITY});
        // }











      });


  }

  //TODO

}





