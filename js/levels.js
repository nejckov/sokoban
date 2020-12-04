var level = (function() {

  function getLevel(x) {

  var level1 = ["xxxxxxxxxxxxxxxxxxxx",
                 "xddpdddddddddddddddx",
                 "xddddnnnnrrrrrdddddx",
                 "xnnnnnnnnnnnnnnnnnnx",
                 "xddrdrrrdddddnnnnnnx",
                 "xddrrrnnddnnrrnnnndx",
                 "xdddrrrrrrrnnnnnnddx",
                 "xrrrdddrdddnnnnnnndx",
                 "xrrddddddddddddddrrx",
                 "xddddddddddddnnnnnnx",
                 "xxxxxxxxxxxxxxxxxxxx"];

   var level2 = ["xxxxxxxxxxxxxxxxxxxx",
                  "xddpdddddddddddddddx",
                  "xddddnnnnxxxxxdddddx",
                  "xnnnnnnnnnnnnnnnnnnx",
                  "xddrdrrrdddddnnnnnnx",
                  "xddrrrnnddnnddnnnndx",
                  "xdddddrrrnnddddnnddx",
                  "xrrrdddrdddnnnnnnndx",
                  "xrrddddddddddddddrrx",
                  "xrrrrrrrrrrrrrrrrdnx",
                  "xxxxxxxxxxxxxxxxxxxx"];

    var level3 = ["xxxxxxxxxxxxxxxxxxxx",
                   "xpdddddnnnnxxxxrrrrx",
                   "xnnnnnnddddddddddddx",
                   "xddnnxxxdddnnnnndddx",
                   "xddrrrnnddnnddnnnndx",
                   "xdddddrrrnnddddnnddx",
                   "xxxxdddrdddnnnnnnndx",
                   "xddddddxxrrrddnrrddx",
                   "xdddddddxxxrrdnddddx",
                   "xxxxxxxxxxxxxxxxxxxx"];

     var level4 = ["xxxxxxxxxxxxxxxxxxxx",
                    "xpxrrnrdddddnnnnnnnx",
                    "xdddddrrrrxxxnnnnddx",
                    "xnnndddrrrrrnnnddddx",
                    "xxxxdddddddddddddddx",
                    "xnnnddrrrrrrrrrddddx",
                    "xnnxxxxxddddddrrrrrx",
                    "xdddddrrrrdddddddddx",
                    "xnnnnndddddddnnnnnnx",
                    "xxxxxxxxxxxxxxxxxxxx"];

    var level5 = ["xxxxxxxxxxxxxxxxxxxx",
                   "xpdddrrrrrxxxxxnnnnx",
                   "xdddddrrrrrrrrrnnnnx",
                   "xnnddddddddddddddddx",
                   "xrrrnnnndddddnnnnnnx",
                   "xrrrrrrdddddnnnnnxxx",
                   "xdddddrrrnnnnddddddx",
                   "xnnnnnddddddddnrrrrx",
                   "xnnddrrddddnnnnnnnxx",
                   "xxxxxxxxxxxxxxxxxxxx"];

     var level6 = ["xxxxxxxxxxxxxxxxxxxx",
                    "xpdrdrdrdrdrdrrnnnnx",
                    "xdddddddrrrrdddnnnnx",
                    "xrrnnxxxdddnnnnndddx",
                    "xxxxddddddnnnrrrrddx",
                    "xndrrddddrdrdrdddddx",
                    "xddddddnnnnnrrrrrddx",
                    "xddddrrrrrnnnddddddx",
                    "xdddddrrrrnddddnnnnx",
                    "xxxxxxxxxxxxxxxxxxxx"];

      var level7 = ["xxxxxxxxxxxxxxxxxxxx",
                     "xpdddrrrrdrdrdrrrnnx",
                     "xxxddddddrrrdddrrrdx",
                     "xnnndddnndddddrrrrnx",
                     "xddddrrrddddrrdddddx",
                     "xrrrrdddrddddnnnnnnx",
                     "xrrdddddxxxxnnnndddx",
                     "xdddddddddnnnnnddddx",
                     "xrrrrrdddrnrrrdddddx",
                     "xxxxxxxxxxxxxxxxxxxx"];

      var level8 = ["xxxxxxxxxxxxxxxxxxxx",
                    "xpxrrrrrrdddrrrddddx",
                    "xdddddddnnnndddrrrrx",
                    "xnnnndddndnnddndrrrx",
                    "xrrrdndrdndrnddddddx",
                    "xdddddrrrdrrrrrnnnnx",
                    "xddddddddddddddddddx",
                    "xnnnnnnndnnnnnnnnnnx",
                    "xrrrrrdnddndndxxxxxx",
                    "xxxxxxxxxxxxxxxxxxxx"];

      var level9 = ["xxxxxxxxxxxxxxxxxxxx",
                     "xpdddddddrrrrddddddx",
                     "xddddddddddddddddddx",
                     "xnnndndndxxxxddddxxx",
                     "xdddddddxxxxxxxddddx",
                     "xddddrrrrrdddddrrrrx",
                     "xddddddrrrrdddxxxxxx",
                     "xdddddddddddnnnddnnx",
                     "xnnnnnddnnndnnrrrrxx",
                     "xxxxxxxxxxxxxxxxxxxx"];

       var level10 = ["xxxxxxxxxxxxxxxxxxxx",
                      "xpxxddddxdddrrrrrrrx",
                      "xdxxddrrxddnnndddddx",
                      "xdxdddddxddnnrrrrrrx",
                      "xdxrrnndxddddddddddx",
                      "xdxdddddxddrrddnnnnx",
                      "xnddddrrrnnnnrndnnnx",
                      "xdddrrnnnddddnnddddx",
                      "xxxxrrrrddddrdddxxxx",
                      "xxxxxxxxxxxxxxxxxxxx"];

        return eval('level' + x);
  }

  return {
    getLevel: function(x) {
      return getLevel(x);
    }
  }

})();

export {
  level
}
