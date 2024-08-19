/* Text to add to the move here button */
const MOVE_HERE_TEXT = "— Move here —";

export default class Mover {
  constructor() {
    //TODO
  }

  startMoving(card) {
    this.card = card;
   // let userclick = document.getElementById(`destination-${document.getElementById("liveCount").innerHTML}`);
   // let appendcard = userclick.parentElement;
    appendcard.insertAdjacentElement("afterend",this.card);


    
    //this.card.remove();
    
    

  }

  stopMoving() {
    //TODO

    
  }

  //TODO
}
