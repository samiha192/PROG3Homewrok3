var names  = [];
var rates   = [];


var nameInput  = document.getElementById("name");
var rateInput   = document.getElementById("rate");


var messageBox  = document.getElementById("display");

"use strict";
function insert ( ) {

  document.getElementById("name").required = true;

if(rateInput.value > 0 && rateInput.value <6){
 names.push( nameInput.value );
 rates.push( rateInput.value );

  nameInput.value = "";
  rateInput.value = "";
  }
  else if (!nameInput.value)
  {
  alert("Data feild is empty");
  nameInput.value = "";
  rateInput.value = ""; 
  }
else
{
alert("Rate has to be within a certain range");
  nameInput.value = "";
  rateInput.value = ""; 
}
}

function clearAndShow () {
  // Clear our fields
  nameInput.value = "";
  rateInput.value = "";
  
  messageBox.innerHTML = "";
  
  for (var i = 0; i < names.length; ++i) {
  //for (var j = 0; j < rates.length; ++j) {
  messageBox.innerHTML +=  names[i] + "  " + rates[i] + "<br/>";}//}
  
  
}