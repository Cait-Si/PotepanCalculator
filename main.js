/*global $*/
$(document).ready(function(){
  let displayNumber = [0];
  let displayText;
  let equal;
  let lastarray;
  let dot= 0 ;
  
  $("#button1").click(function(){
    pushButton(1);
  });
  $("#button2").click(function(){
    pushButton(2);
  });
  $("#button3").click(function(){
    pushButton(3);
  });
  $("#button4").click(function(){
    pushButton(4);
  });
  $("#button5").click(function(){
    pushButton(5);
  });
  $("#button6").click(function(){
    pushButton(6);
  });
  $("#button7").click(function(){
    pushButton(7);
  });
  $("#button8").click(function(){
    pushButton(8);
  });
  $("#button9").click(function(){
    pushButton(9);
  });
  $("#button0").click(function(){
    pushButton(0);
  });
  $("#button00").click(function(){
    pushButton("00");
  });
  $("#buttonP").click(function(){
    pushButton("+");
  });
  $("#buttonM").click(function(){
    pushButton("-");
  });
  $("#buttonA").click(function(){
    pushButton("*");
  });
  $("#buttonS").click(function(){
    pushButton("/");
  });
  $("#buttonD").click(function(){
    pushButton(".");
  });
  $("#buttonAC").click(function(){
    pushButton("AC")
  });
  $("#buttonE").click(function(){
    pushButton("=");
  });
  
  function pushButton(pushNumber){
    lastarray = displayNumber[displayNumber.length - 1];
    console.log(displayNumber[0]);
    if( displayNumber[0]===0 && dot==0 && pushNumber!=0){
      if( pushNumber!="+" && pushNumber!="-" && pushNumber!="/" && pushNumber!=0 && pushNumber!="*" && pushNumber!="AC"){
        displayNumber=[];
        if( pushNumber == "."){
          displayNumber.push("0.");
          dot++;
        }else{
          displayNumber.push(pushNumber);
        }
        displayText=displayNumber.join("");
        $("#display").text(displayText);
      }
    }else if( displayNumber[0]===0 && dot==0 && pushNumber==0){
    }else{
      if( pushNumber=="+" || pushNumber=="-" || pushNumber=="/" || pushNumber=="." || pushNumber=="*"){
        if( lastarray!="+" && lastarray!="-" && lastarray!="/" && lastarray!="." && lastarray!="*" ){
          if( dot==1 && pushNumber =="."){
          }else if( dot<=1 && pushNumber!="." ){
            displayNumber.push(pushNumber);
            displayText=displayNumber.join("");
            $("#display").text(displayText);
            dot=0;
          }else if( dot==0 && pushNumber=="."){
            displayNumber.push(pushNumber);
            displayText=displayNumber.join("");
            $("#display").text(displayText);
            dot++;
          }
        }
      }else if( pushNumber=="=" ){
        equal=eval(displayText);
        $("#display").text(equal);
        displayNumber=[];
        displayNumber.push(equal);
      }else if( pushNumber=="AC" ){
        displayNumber=[];
        $("#display").text(0);
        displayNumber[0] = 0;
        dot=0;
      }else{
        displayNumber.push(pushNumber);
        displayText=displayNumber.join("");
        $("#display").text(displayText);
      }
    }
  }
});