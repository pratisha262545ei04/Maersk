/* Author: Pratisha Rath
   Shuffle and Sort
   Javascript and CSS

*/
var dataObject = {
    0: {"id":0,"color":"light-blue"},
    1: {"id":1,"color":"dark-blue"},
    2: {"id":2,"color":"grey-blue"},
    3: {"id":3,"color":"dark-blue"},
    4: {"id":4,"color":"grey-blue"},
    5: {"id":5,"color":"grey"},
    6: {"id":6,"color":"grey"},
    7: {"id":7,"color":"light-blue"},
    8: {"id":8,"color":"grey-blue"}
  };


  var template = document.getElementById("template");
  var templateHtml = template.innerHTML;
  var listHtml = "";
  for (var key in dataObject) {
    listHtml += templateHtml.replace(/{{id}}/g, dataObject[key]["id"] + 1)
                            .replace(/{{color}}/g, dataObject[key]["color"]);
  }
  document.getElementById("list").innerHTML = listHtml;


var getAllNum=[];
for (var key in dataObject){
        getAllNum.push(dataObject[key].id)
    }
    


function numberedCardShuffle(getAllNum) {
    console.log('shuffle')
  var currentIndex = getAllNum.length, temporaryVal, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryVal = getAllNum[currentIndex];
    getAllNum[currentIndex] = getAllNum[randomIndex];
    getAllNum[randomIndex] = temporaryVal;
  }
  for (var key in dataObject){

    document.getElementsByClassName('card')[key].innerText = getAllNum[key] + 1;
    document.getElementsByClassName('card')[key].className = "card " + dataObject[getAllNum[key]].color;
    }

  
  
}




function sortNum() {
    console.log('sort')
    getAllNum.sort(function(a, b){return a-b});
    for (var key in dataObject){
        document.getElementsByClassName('card')[key].innerText = getAllNum[key] + 1;
        document.getElementsByClassName('card')[key].className = "card " +dataObject[getAllNum[key]].color;
    }
  
}
