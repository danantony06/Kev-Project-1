/* The text to use when description is empty */
const NO_DESCRIPTION_TEXT = "(No description)";

export default class Card {
  
  text = NO_DESCRIPTION_TEXT;
  

  constructor(title, color) {
    this.title = title;
    this.color = color;
  }

  addToCol(colElem, mover) {
    this.colElem = colElem;
    this.mover = mover;

    //TODO
  }

  setDescription(text) {
    this.text = text;

  //TODO
}



}
