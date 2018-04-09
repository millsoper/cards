function render(table){
  //check each of the seven stacks in table.foundations() and render them. 
  for (var i = 0; i < table.foundations.length; i++){
    var givenColumn = document.getElementById("column-" + i);
    while (givenColumn.firstChild) {
      givenColumn.removeChild(givenColumn.firstChild);
    }
    for (var j = 0; j < table.foundations[i].length; j++){
      givenColumn.appendChild(paintCard(table.foundations[i][j]));
    }
  }
}