import App from "./app.js";


const main = () => {
  let app = new App();
  
  let button = document.getElementById('addButton');
  
  var count = 0;
  button.addEventListener("click", function(){
    count +=1;
    document.getElementById("liveCount").innerHTML = count;

  })
  
  


  /* You can add cards to the board here so you don't have to type them all in every time the page refreshes. Here are a few examples: */
  //app.addCard("doing", "Write Card class", "lightblue");
  //app.addCard("todo", "Write App class", "khaki");
  //let card = app.addCard("todo", "Test everything!", "pink");
  //card.setDescription("Hopefully we've been testing throughout the process...");
  document.addEventListener("DOMContentLoaded", (e) => {
  button.addEventListener("click", (e) =>{
    e.preventDefault();
    let title1 = document.getElementById('cardTitle').value;
    let color1 = document.getElementById('cardColor').value;
    app.addCard("todo",title1, color1);
    let input1 = document.getElementById('cardTitle');
    input1.value = ""; 
   // var btn = document.createElement("button");
   // btn.setAttribute("id","btn")
   // let text = document.createTextNode("— Move here —");
   // btn.setAttribute("class","moveHere");
   // btn.appendChild(text);
   // document.getElementById("todo").appendChild(btn);

   // document.getElementById("doing").insertBefore(btn,null);
  })
  
});


};
main();
