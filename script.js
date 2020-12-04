
import { level } from './js/levels.js';
import { paint } from './js/paint.js';
import { coordinate } from './js/coordinate.js';
import { events } from './js/events.js';
import { gravity } from './js/gravity.js';
import { serverSide } from './js/serverSide.js';

/***********************************************************************
*************************MANI CONTROLLER********************************
***********************************************************************/
var controller = (async function(paint, coordinate, events, gravity, level) {

    // 1. SET VARIABLES
    var start, countLevel, points, lives, sumPoints, dataAPI, stage, totalPoints, st, point;

    start = 1;
    countLevel = 1;
    points = 0;
    lives = 3;
    sumPoints = 0;
    dataAPI = 0;
    stage = level.getLevel(countLevel);
    totalPoints = coordinate.totalPoints(stage);

    if(dataAPI === 0) {
      dataAPI = serverSide.api();
    }

    // PAINT STAGE
    paint.draw(stage);


      // IF PRESS KEYBOARD
      document.addEventListener('keydown', function(event) {

        if(start == 1) {
          var c = coordinate.coor(stage);

          st = events.move(c, stage, event.keyCode, lives, start, sumPoints);
          lives = st.lives;
          start = st.start;
          point = st.point;
          stage = st.newstage;

          points += st.point;
          sumPoints += st.point;

          gravity.move(stage);
          gravity.move(stage);
          gravity.move(stage);
          gravity.move(stage);

          paint.draw(stage);

          // PRINT SCORE
          document.querySelector(".score").innerHTML = "Points: " + points + "/" + totalPoints + "(" + sumPoints + ")";

          // IF STAGE IS OVER
          if(points === totalPoints) {
            document.querySelector('.success-game').setAttribute('style', 'display: block');
            start = 0;
          }

          // LIVES REMOVE
          if(lives === 2 && start === 2) {
            document.querySelector('img.heart2').style.display = 'none';
            stage = level.getLevel(countLevel);
            points = 0;
            start = 1;
            setTimeout(function () {
              paint.draw(stage);
            }, 1200);
          } else if(lives === 1 && start === 2) {
            document.querySelector('img.heart1').style.display = 'none';
            stage = level.getLevel(countLevel);
            points = 0;
            start = 1;
            setTimeout(function () {
              paint.draw(stage);
            }, 1200);
          } else if(lives === 0 && start === 2) {
            document.querySelector('img.heart0').style.display = 'none';
            stage = level.getLevel(countLevel);
            points = 0;
            start = 1;
            setTimeout(function () {
              paint.draw(stage);
            }, 1200);
          }

          // IF DIES, PAINT STAGE
          if(lives !== 0 && !coordinate) {
            setTimeout(function () {
              stage = level.getLevel(countLevel);
              paint.draw(stage);
            }, 3600);
          }
        }

        // LIVES, CREATE HEART
        document.querySelector('.lives').innerHTML = '';
        for (var i = 0; i < lives; i++) {
          var img = document.createElement('img');
          img.classList.add('heart'+ i);
          img.src = 'img/heart.svg';
          document.querySelector('.lives').appendChild(img);
        }
      });

      // IF CLICK NEXT LEVEL
      document.querySelector('.next-level').addEventListener('click', function(event) {
        document.querySelector('.success-game').setAttribute('style', 'display: none');
        countLevel++;
        start = 1;

        document.querySelector('.stage').innerHTML = "STAGE " + countLevel;
        stage = level.getLevel(countLevel);
        points = 0;
        totalPoints = coordinate.totalPoints(stage);
        document.querySelector(".score").innerHTML = "Točke: " + points + "/" + totalPoints;
        paint.draw(stage);
      });


      // IF CLICK GIVE UP
      document.querySelector('.give-up').addEventListener('click', function(event) {
        start = 1;
        lives--;
        document.querySelector('.game-over').setAttribute('style', 'display: none');
        stage = level.getLevel(countLevel);
        document.querySelector('.stage').innerHTML = "STAGE 1";
        points = 0;
        totalPoints = coordinate.totalPoints(stage);
        document.querySelector(".score").innerHTML = "Points: " + points + "/" + totalPoints;
        paint.draw(stage);
      });

      // IF SUBMIT PLAYER RESULT AT END
      document.querySelector('.playerSubmit').addEventListener('click', async function(event) {

        document.querySelector('.game-over').style.display = 'none';
        document.querySelector('.loading').style.display = 'flex';

        var playerName = document.querySelector('.playerName').value;
        await serverSide.postData(playerName, sumPoints);
        var players = [];
        players =  await serverSide.getData();

        document.querySelector('.loading').style.display = "none";
        document.querySelector('.ranking').style.display = "block";

        rankingLine = document.createElement('tr');

        document.querySelector('.dataInsert').innerHTML = '';

        players.forEach((player, i) => {
          tra = document.createElement('tr');
          tra.classList.add('player' + i);
          document.querySelector('.dataInsert').appendChild(tra);
          var dec = "<td>" + (i + 1) + "</td><td>" + player.name + "</td><td>" + player.points + "</td>";
          tra.innerHTML = dec;
        });

      });


      // CLICK ON START AGAING
      document.querySelector('.start-n').addEventListener('click', function(event) {
        start = 1;
        document.querySelector('.ranking').style.display = "none";
        document.querySelector('.game-over').setAttribute('style', 'display: none');
        countLevel = 1;
        stage = level.getLevel(countLevel);
        document.querySelector('.stage').innerHTML = "STAGE 1";
        lives = 3;
        points = 0;
        sumPoints = 0;
        totalPoints = coordinate.totalPoints(stage);
        document.querySelector(".score").innerHTML = "Points: " + points + "/" + totalPoints;

        document.querySelector('.lives').innerHTML = '';
        for (var i = 0; i < lives; i++) {
          var img = document.createElement('img');
          img.classList.add('heart'+ i);
          img.src = 'img/heart.svg';
          document.querySelector('.lives').appendChild(img);
        }

        paint.draw(stage);
      });

      // CLICK START AGAIN
      document.querySelector('.start-new').addEventListener('click', function(event) {
        start = 1;
        document.querySelector('.ranking').style.display = "none";
        document.querySelector('.game-over').setAttribute('style', 'display: none');
        countLevel = 1;
        stage = level.getLevel(countLevel);
        document.querySelector('.stage').innerHTML = "STAGE 1";
        lives = 3;
        points = 0;
        sumPoints = 0;
        totalPoints = coordinate.totalPoints(stage);
        document.querySelector(".score").innerHTML = "Points: " + points + "/" + totalPoints;


      });

})(paint, coordinate, events, gravity, level)
