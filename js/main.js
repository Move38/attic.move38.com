if (screen.width >= 500) {
   document.location = "../desktop.html";
   /* Sends the user to a desktop formatted site ... */
}

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const blinksterID = urlParams.get('ref');
var discount = urlParams.get('discount');

if(discount === null) {
  discount = "VIP-8675309";
}

function buyBlinksAction() {
  window.location.href='https://move38.com/discount/' + discount + '?redirect=/cart/37584214130865:1&ref='+blinksterID;
};

var _statcounter = _statcounter || []; 
_statcounter.push({"tags": {"blinksterID": blinksterID, "discount": discount, "page": "FnF Deal"}}); 

window.onscroll = function() {scrollRotate()};

function scrollRotate() {
	// rotate each of the games based on the position of the page... stop rotating at specific points
  var windowOffset = window.pageYOffset;
  //console.log("window offset: " + windowOffset);
  
  var tiltAngle = 15;
  var tiltStart = 200;
  var tiltOffset = 275;
  var tiltRange = 300;  
  
  // Rotate hexagons:
  var hex1 = document.getElementById("hex-small");
  hex1.style.transform = "rotate("+ getRotation(0,600,30) + "deg)";
  
  var hex2 = document.getElementById("hex-medium");
  hex2.style.transform = "rotate("+ getRotation(0,600,-30) + "deg)";
  
  var hex3 = document.getElementById("hex-large");
  hex3.style.transform = "rotate("+ getRotation(0,600,-15) + "deg)";

  
  var game1 = document.getElementById("game1");
  game1.style.transform = "rotate("+ getRotation(tiltStart+tiltOffset*0,tiltStart+tiltOffset*0 + tiltRange,15) + "deg)";

  var game2 = document.getElementById("game2");
  game2.style.transform = "rotate("+ getRotation(tiltStart+tiltOffset*1,tiltStart+tiltOffset*1 + tiltRange,-15) + "deg)";
  
  var game3 = document.getElementById("game3");
  game3.style.transform = "rotate("+ getRotation(tiltStart+tiltOffset*2,tiltStart+tiltOffset*2 + tiltRange,15) + "deg)";

  var game4 = document.getElementById("game4");
  game4.style.transform = "rotate("+ getRotation(tiltStart+tiltOffset*3,tiltStart+tiltOffset*3 + tiltRange,-15) + "deg)";
  
  var game5 = document.getElementById("game5");
  game5.style.transform = "rotate("+ getRotation(tiltStart+tiltOffset*4,tiltStart+tiltOffset*4 + tiltRange,15) + "deg)";
  
  
  var game6 = document.getElementById("game6");
  game6.style.transform = "rotate("+ getRotation(tiltStart+tiltOffset*5,tiltStart+tiltOffset*5 + tiltRange,-15) + "deg)";
  
  var game7 = document.getElementById("game7");
  game7.style.transform = "rotate("+ getRotation(tiltStart+tiltOffset*6,tiltStart+tiltOffset*6 + tiltRange,15) + "deg)";
  
  var game8 = document.getElementById("game8");
  game8.style.transform = "rotate("+ getRotation(tiltStart+tiltOffset*7,tiltStart+tiltOffset*7 + tiltRange,-15) + "deg)";
  
  var game9 = document.getElementById("game9");
  game9.style.transform = "rotate("+ getRotation(tiltStart+tiltOffset*8,tiltStart+tiltOffset*8 + tiltRange,15) + "deg)";

  /* Function to compute how much to rotate
   *
   *  start = a starting point in pixels
   *  stop = stopping point in pixels
   *  amount = degree rotation
   */ 
  function getRotation(start, stop, amount) {
    var gameRotate;
    if(windowOffset < start) {
      gameRotate = 0;
    }
    else if(windowOffset >= start && windowOffset < stop) {
      gameRotate = (windowOffset-start)/((stop-start)/amount);
    }
    else {
      gameRotate = (stop-start)/((stop-start)/amount);
    }
  
    return gameRotate;
  }


}
