var events = (function() {

  function move(coordinate, stage, keycode, lives, start)
  {

    // 1. DEFINENED VARIABLES
    var newStage = stage
    var point = 0;

    var lineUp = stage[coordinate.line - 1];
    var line = stage[coordinate.line];
    var lineDown = stage[coordinate.line + 1];
    var lineDownDown = stage[coordinate.line + 2];


    // 2. MOVING DIRECTION (LEFT, RIGHT, DONW, UP)
    if(keycode === 37) {
    //LEFT

      // 2.1 DEFINED ADDITIONAL VARIABLES
      var leftBox = line.substring(coordinate.row - 1, coordinate.row);

      // 2.2 CHECKING IF CAN MOVE, THAN MOVE
      if(leftBox === 'd' /*IF LEFT DOLAR*/ || leftBox === 'n' /* IF LEFT NOTHNIG */) {
        var newLine = line.substring(0, coordinate.row - 1) + "pn" + line.substring(coordinate.row + 1);
        newStage.splice(coordinate.line, 1, newLine);
      }

      // 2.3 CHECKING IF IS DOLAR, THAN RAISE POINTS
      if(leftBox === 'd') {
        point += 1;
      }

      // PUSHING ROCK
      pushRock(stage, line, coordinate, keycode);


    } else if(keycode === 39) {
    //RIGHT

      // 2.1 DEFINED ADDITIONA VARIABLES
      var rightBox = line.substring(coordinate.row + 1, coordinate.row + 2);

      // 2.2 CHECKING IF CAN MOVE, THAN MOVE
      if(rightBox === "d" /* IF RIGHT DOLAR*/ || rightBox === "n" /* IF RIGHT IS NOTHNIG*/ ) {
        var newLine = line.substring(0, coordinate.row) + "np" + line.substring(coordinate.row + 2);
        newStage.splice(coordinate.line, 1, newLine);
      }

      // 2.3 CHECKING IF IS DOLAR, THAN RAISE POINTS
      if(rightBox === 'd') {
        point += 1;
      }

      // 2.4 PUSHING ROCK
      pushRock(stage, line, coordinate, keycode);

    } else if(keycode === 38) {
    //UP

      // 2.1 DEFINED ADDITIONAL VARIBLES
      var boxUp = lineUp.substring(coordinate.row, coordinate.row + 1);


      // 2.2 CHECKING IF CAN MOVE; THAN MOVE
      if(boxUp === 'd' /* IF UP DOLAR */ || boxUp === 'n' /* IF UP NOTHING*/ ) {
        var newLine = line.substring(0, coordinate.row) + "n" + line.substring(coordinate.row + 1);
        var newLineUp = lineUp.substring(0, coordinate.row) + "p" + lineUp.substring(coordinate.row + 1);
        newStage.splice(coordinate.line, 1, newLine);
        newStage.splice(coordinate.line - 1, 1, newLineUp);
      }

      // 2.3 CHECKING IF IS DOLAR, THAN RAISE POINTS
      if(boxUp === 'd') {
        point += 1;
      }

    } else if(keycode === 40) {
    // DOWN

      // 2.1 DEFINED ADDITIONAL VARIABLES
      var boxDown = lineDown.substring(coordinate.row, coordinate.row + 1);

      // 2.1 CHECKING IF CAN MOVE, THAN MOVE
      if(boxDown === 'd' /*IF DONW DOLAR*/ || boxDown === 'n' /* IF DOWN NOTHING*/ ) {
      var newLine = line.substring(0, coordinate.row) + "n" + line.substring(coordinate.row + 1);
      var newLineDown = lineDown.substring(0, coordinate.row) + "p" + lineDown.substring(coordinate.row + 1);
      newStage.splice(coordinate.line, 1, newLine);
      newStage.splice(coordinate.line + 1, 1, newLineDown);
      }

      // CHECK IF IS DOLAR, THAN RAISE POINTS
      if(boxDown === 'd') {
        point += 1;
      }

      // DEATH SCENE
      var live = deadScene(stage, lineUp, lineDown, line, lineDownDown, coordinate, lives, start, point);
      lives = live.lives;
      start = live.start;
    }

//******************RETURN *********************************************************
      return {
        "newstage": newStage,
        "point": point,
        "lives": lives,
        "start": start,
      };

    }

/*********************************************************************************************************************
************************************** PUSH ROCK *********************************************************************
*********************************************************************************************************************/

    function pushRock(stage, line, coordinate, keycode) {


      if (line.substring(coordinate.row , coordinate.row + 3) === 'prn' && keycode === 39) {
      // PUSHING RIGHT

        var newLine = line.substring(0, coordinate.row) + 'npr' + line.substring(coordinate.row + 3);
        stage.splice(coordinate.line, 1, newLine);

      } else if (line.substring(coordinate.row - 2, coordinate.row + 1) === 'nrp' && keycode === 37) {
      // PUSHING LEFT

        var newLine = line.substring(0, coordinate.row - 2) + 'rpn' + line.substring(coordinate.row + 1);
        stage.splice(coordinate.line, 1, newLine);

      }
    }

/*****************************************************************************************************************************
******************************************DEAD SCENE *************************************************************************
*****************************************************************************************************************************/

    function deadScene(stage, lineUp, lineDown, line, lineDownDown, coordinate, lives, start, sumPoints, point) {


      // SETTING UP VARIBALES
      var boxUpSingle = lineUp.substring(coordinate.row, coordinate.row + 1);
      var boxDownSingle = lineDown.substring(coordinate.row, coordinate.row + 1);
      var boxUpDoubleLeft = lineUp.substring(coordinate.row - 1, coordinate.row + 1);
      var boxDoubleLeft = line.substring(coordinate.row - 1, coordinate.row + 1)
      var boxDownDobleLeft = lineDown.substring(coordinate.row - 1, coordinate.row + 1);
      var boxUpDoubleRight = lineUp.substring(coordinate.row, coordinate.row + 2);
      var boxDoubleRight = line.substring(coordinate.row, coordinate.row + 2)
      var boxDownDobleRight = lineDown.substring(coordinate.row, coordinate.row + 2);
      var boxDownDown = lineDownDown.substring(coordinate.row, coordinate.row + 1);
      var boxDownDownLeft = lineDownDown.substring(coordinate.row - 1, coordinate.row + 1);
      var boxDownDownRight = lineDownDown.substring(coordinate.row + 1, coordinate.row + 2);

      // CHECKING IF ROCK IS ABOVE
      if(boxUpSingle === 'r' && boxDownSingle !== 'r' //
      || boxUpSingle === 'r' && boxDownSingle !== 'x' //
      || boxUpSingle === 'r' && boxDownSingle === 'p' && boxDownDown === 'n' //
      || boxUpSingle === 'r' && boxDownSingle === 'p' && boxDownDown === 'd' //
      )
      {

        // CHANGING POISITION
        var newLineUp = lineUp.substring(0, coordinate.row) + "n" + lineUp.substring(coordinate.row + 1);
        var newLineDown = lineDown.substring(0, coordinate.row) + 'r' + lineDown.substring(coordinate.row + 1);
        stage.splice(coordinate.line - 1, 1, newLineUp);
        stage.splice(coordinate.line + 1, 1, newLineDown);

        // LIVES CUT
        lives--;
        start = 2;

      } else if(boxUpDoubleRight === 'pr' && boxDoubleRight === 'nr' ||
            boxUpDoubleRight === 'pr' && boxDoubleRight === 'dr' ||
            boxUpDoubleRight === 'pr' && boxDoubleRight === 'nd' ||
            boxDoubleRight === 'pr' && boxDownDobleRight === 'nr' ||
            boxDoubleRight === 'pr' && boxDownDobleRight === 'dr' ||
            boxDoubleRight === 'pr' && boxDownDobleRight === 'nd' ||
            boxDoubleRight === 'pr' && boxDownDobleRight === 'dd' ||
            boxDoubleLeft === 'pr' && !boxDownSingle === 'x' ||
            boxDownDobleLeft === 'pr' && boxDownDownLeft === 'd' ||
            boxDownDobleLeft === 'pr' && boxDownDownLeft === 'n' ||
            boxDownDobleLeft === 'pd' && boxDownDownLeft === 'd' ||
            boxDownDobleLeft === 'pd' && boxDownDownLeft === 'n'
        )
      {
        // RIGHT
        // CHANGING POSITION
        var newLine = line.substring(0, coordinate.row) + 'nn' + line.substring(coordinate.row + 2);
        var newLineDown = lineDown.substring(0, coordinate.row) + 'r' + lineDown.substring(coordinate.row + 1);
        stage.splice(coordinate.line , 1, newLine);
        stage.splice(coordinate.line + 1, 1, newLineDown);

        // LIVES CUT
        lives--;
        start = 2;

      } else if(boxUpDoubleLeft === 'rp' && boxDoubleLeft === 'rn' ||
            boxUpDoubleLeft === 'rp' && boxDoubleLeft === 'rd' ||
            boxUpDoubleLeft === 'rp' && boxDoubleLeft === 'dn' ||
            boxDoubleLeft === 'rp' && boxDownDobleLeft === 'rn' ||
            boxDoubleLeft === 'rp' && boxDownDobleLeft === 'dn' ||
            boxDoubleLeft === 'rp' && boxDownDobleLeft === 'dd' ||
            boxDoubleLeft === 'rp' && !boxDownSingle === 'x' ||
            boxDownDobleLeft === 'rp' && boxDownDownLeft === 'd' ||
            boxDownDobleLeft === 'rp' && boxDownDownLeft === 'n' ||
            boxDownDobleLeft === 'dp' && boxDownDownLeft === 'd' ||
            boxDownDobleLeft === 'dp' && boxDownDownLeft === 'n'
            )
      {
        // LEFT
        // CHANGING POSITION
        var newLine = line.substring(0, coordinate.row - 1) + 'nn' + line.substring(coordinate.row + 1);
        var newLineDown = lineDown.substring(0, coordinate.row) + 'r' + lineDown.substring(coordinate.row + 1);
        stage.splice(coordinate.line , 1, newLine);
        stage.splice(coordinate.line + 1, 1, newLineDown);

        document.querySelector('.live-down').style.display = 'block';

        // LIVES CUT
        lives--;
        start = 2;

      }

      // CHECK LIVES - GAVE OVER
      if(lives === 0) {
        start = 0;
        sumPoints += point;
      setTimeout(function () {
          document.querySelector('.game-over').setAttribute('style', 'display: block');
      }, 1000);

      }

      return {
        "lives": lives,
        "start": start,
        "sumPoints": sumPoints,
      }
    }

// RETUREN *********************************************************************************************************

  return {
    move: function(coordinate, stage, keycode, lives, start, sumPoints) {
      return move(coordinate, stage, keycode, lives, start, sumPoints);
    }
  }

})();


export {
  events
}
