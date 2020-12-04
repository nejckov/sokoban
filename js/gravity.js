var gravity = (function() {


  function move(stage) {

    stage.forEach((line, l) => {
      line = line.split("");

      line.forEach((cell, c) => {

        if(cell === 'r') {

          var line = stage[l];
          var lineDown = stage[l+1];

            var boxDown = lineDown.substring(c, c + 1);

            if(boxDown === 'n') {
              var newLine = line.substring(0, c) + "n" + line.substring(c + 1);
              var newLineDown = lineDown.substring(0, c) + "r" + lineDown.substring(c + 1);

              stage.splice(l, 1, newLine);
              stage.splice(l + 1, 1, newLineDown);
            }


            var boxDownLeft = lineDown.substring(c - 1, c + 1); // nr, nd
            var boxDownRight = lineDown.substring(c , c + 2); // rn, dn

            var boxLeft = line.substring(c - 1, c + 1); // rn
            var boxRight = line.substring(c, c + 2); // rn

          if(boxDownLeft === 'nd' && boxLeft === 'nr' || boxDownLeft === 'nr' && boxLeft === 'nr') {
              var newLine = line.substring(0, c) + "n" + line.substring(c + 1);
              var newLineDown = lineDown.substring(0, c - 1) + "r" + lineDown.substring(c);

              stage.splice(l, 1, newLine);
              stage.splice(l + 1, 1, newLineDown);

            } else if(boxDownRight === 'dn' && boxRight === 'rn' || boxDownRight === 'rn' && boxRight === 'rn') {
              var newLine = line.substring(0, c) + "n" + line.substring(c + 1);
              var newLineDown = lineDown.substring(0, c + 1) + "r" + lineDown.substring(c + 2);

              stage.splice(l, 1, newLine);
              stage.splice(l + 1, 1, newLineDown);

            }
        }
      });

    });
  }

  return {
    move: function(stage) {
      return move(stage)
    }
  }

})();


export {
  gravity
};
