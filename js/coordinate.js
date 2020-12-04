var coordinate = (function() {

  //GETTING COORDINATES
  function coo(stage) {

    // DEFINED RETURN VARIABLE
    var c;

    //SEARCHING FOR COORDINATES
    stage.forEach((item2, te) => {
      var search = item2.split("");
      search.forEach((item1, s) => {
        if(item1 === 'p')
        {
          c = {'line': te, 'row': s};
        }
      });
    });

// *****************************RETURN ********************
    return c;
  }
  // COUNTING POINTS OF STAGE
  function totalPoints(stage) {
    var totalPoints = 0;
    stage.forEach((item2, te) => {
      var search = item2.split("");
      search.forEach((item1, s) => {
        if(item1 === 'd')
        {
          totalPoints += 1;
        }
      });
    });
    //*********************RETURN ************************
    return totalPoints;
  }

//******************RETURN *****************************
  return {
    coor: function(stage) {
      return coo(stage);
    },
    totalPoints: function(stage) {
      return totalPoints(stage);
    }
  }

})();


export {
  coordinate
};
