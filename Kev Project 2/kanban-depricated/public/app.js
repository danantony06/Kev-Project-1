import Card from "./card.js";
import Mover from "./mover.js";


export default class App {
    
  constructor() {
    this.mover = new Mover();
    }
  

  addCard(col, title, color) {
    this.col = col;
    let mycard = new Card(title,color);
    mycard.addToCol(col,this.mover);

   // mycard.setDescription();

    //document.getElementById("todo").insertAdjacentHTML("beforeend",`${title} <br></br>`)
    fetch('./cardTemplate.html')
        .then(data => data.text())
        .then(html => {
          let doc = html.replace("[TEMPLATE]", mycard.title.toUpperCase());
          let col = doc.replace("[COLORTEMP]", mycard.color);
          let dre = col.replace("[DELETEID]",`delete-${document.getElementById("liveCount").innerHTML}`);
          let vre = dre.replace("[EDITID]",`edit-${document.getElementById("liveCount").innerHTML}`);
          let she = vre.replace("[NODESCRIPTION]",mycard.text);
          let bhe = she.replace("[EDITTEXTID]",`edittxt-${document.getElementById("liveCount").innerHTML}`);
          let khe = bhe.replace("[DESCRIPTIONID]",`describe-${document.getElementById("liveCount").innerHTML}`);
          let zhe = khe.replace("[FIRSTDESCRIPTION]", mycard.text);
          let gre = zhe.replace("[MOVEID]", `move-${document.getElementById("liveCount").innerHTML}`);
          let bre = gre.replace("[MOVEDESTINATIONID]", `destination-${document.getElementById("liveCount").innerHTML}`);
          console.log(html);
        //  document.getElementsByClassName("myarticle").style.color = color;
          document.getElementById("todo").insertAdjacentHTML("beforeend",bre);
          



          let deleteButton = document.getElementById(`delete-${document.getElementById("liveCount").innerHTML}`);
            deleteButton.addEventListener("click", (e)=>{
              e.preventDefault();
              let cardel = deleteButton.parentElement.parentElement;
              cardel.remove();
            
            })


          let editButton = document.getElementById(`edit-${document.getElementById("liveCount").innerHTML}`);
          let editTextArea = document.getElementById(`edittxt-${document.getElementById("liveCount").innerHTML}`);
          let description = document.getElementById(`describe-${document.getElementById("liveCount").innerHTML}`)

            editButton.addEventListener("click", (d)=>{
              d.preventDefault();
              editTextArea.style.display = "block";
              editTextArea.focus();
              editTextArea.select();
              description.style.display = "none";
              editTextArea.addEventListener("blur", (e)=>{
              //  mycard.text = editText[i].value;
                editTextArea.style.display = "none";
                description.style.display = "block";
                description.innerHTML = editTextArea.value;
              })
            
            })
          

          let moveButton = document.getElementById(`move-${document.getElementById("liveCount").innerHTML}`);
          let destinations = document.getElementsByClassName("moveHere");


          moveButton.addEventListener("click", (v)=>{
            v.preventDefault();
            moveButton.parentElement.parentElement.setAttribute("class","moving");
            for(var i = 0; i < destinations.length; i +=1){
              destinations[i].style.display = "block";

            }
          })


          const newDiv = document.createElement("div");
          const newContent = document.createTextNode("Hi there and greetings!");
          newDiv.appendChild(newContent);
          let userclick = document.getElementById(`destination-${document.getElementById("liveCount").innerHTML}`);
          userclick.addEventListener("click", (e)=>{
            e.preventDefault();
            let appendcard = userclick.parentElement;
            //appendcard.insertAdjacentElement("afterend",newDiv);  
            let cardmove = document.getElementsByClassName("moving")[0];
            //appendcard.insertAdjacentHTML("afterend",document.getElementsByClassName("moving")[0].innerHTML);
            appendcard.insertAdjacentElement("afterend",cardmove);
          })

          



          
   // for(var i = 0; i < document.getElementsByClassName("moveHere").length; i +=1){
   //   document.getElementsByClassName("moveHere")[i].addEventListener("click", (e)=>{
     //   e.preventDefault();

    //    this.mover.startMoving(document.getElementsByClassName("moving")[0]);
    //  })

  //  }

  

            // let moveButtons = document.getElementsByClassName("startMove");

            // for (let i = 0; i < moveButtons.length; i++) {
            //   moveButtons[i].addEventListener("click", (c)=>{
            //     c.preventDefault();
            //     console.log(i);
            //     console.log(moveButtons[i]);
            //     moveButtons[i].setAttribute("class","moving");
            //   })

          
            // }
  
        
          

          
          


        //   document.getElementById("1").addEventListener("click", (e) => {
        //     e.preventDefault();
        //     let cardel = e.currentTarget.parentElement.parentElement;
        //     //let cardel = document.getElementsByClassName("card")[0];
        //     cardel.remove();
            
        //  });

        });
        

  } 

  //TODO

}





