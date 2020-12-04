var paint = (function() {

// PICTURES
  function pictures(cell) {
    var src;
    if(cell === "x") {
      src = 'img/wall.svg';
    } else if(cell == 'e') {
      src = 'img/egg.svg';
    } else if(cell == 'd') {
      src = 'img/dolar.svg';
    } else if(cell == 'r') {
      src = 'img/rock.svg';
    } else if(cell == 'n') {
      src = 'img/nothing.svg';
    } else if(cell == 'p') {
      src = 'img/person.svg';
    }
    return src;
  }

// DRAW
  function draw(stage) {

    var p = 0;

    // STAGE FOREACH
    stage.forEach((line, index) => {

      var line = line.split("");
      var img, src;

      // creating line element
      var div = document.createElement('div');
      div.classList.add('line' + index);
      document.querySelector('.game-context').appendChild(div);
      document.querySelector('.line' + index).style.top =  index * 50 + 'px';

      //LINE FOREACH
      line.forEach((cell, i) => {

        p++;
        src = pictures(cell);

        // CHECKING IF CELL EXISTS
        // CREATING
        if(!document.querySelector('.cell' + p + i) ) {
          img = document.createElement('img');
          img.classList.add('cell' + p + i);
          document.querySelector('.line' + index).appendChild(img);
          document.querySelector('.cell' + p + i).style.left =  i * 50 + 'px';
          img.src = src;
        } else {
          // UPDATING
          img = document.querySelector('.cell' + p + i );
          img.src = src;
        }
      });
    });
  }

//************RETURN *************************************
  return {
    draw: function(stage) {
      draw(stage);
    }
  }
})();

export {
  paint
}
