  var A1=document.getElementById("tag");
  var A2=document.getElementById("tag1");
  var B1=document.getElementById("tag2");
  var B2=document.getElementById("tag3");
  var dices = document.getElementById("die1");
  var turn= document.getElementById("tm-turn");
  var count=0;
  var countA1=0;
  var countA2=0;
  var countB1=0;
  var countB2=0; 
  var countA11=0;
  var countA22=0;
  var countB11=0;
  var countB22=0;
  var lockerA=2;
  var lockerB=2;
  var count1=0;
  var rollA1=0;
  var rollA2=0;
  var rollB1=0;
  var rollB2=0;
  var i=1;
  var i2=1;
  var i3=1;
  var i4=1;



  function rolldice1(){

       var d2 = prompt("Enter any Dice value", "Dice-roll");
     if (d2==1 || d2==2 || d2==3 ||d2==4 ||d2==5 ||d2==6){
    var die1 = document.getElementById("die1");
    var status= document.getElementById("status");
    die1.innerHTML = d2;
    status.innerHTML = "You rolled " + d2 ;
    if(d2==6){
     status.innerHTML+= ".  Roll for another turn!"; 
       document.getElementById("myimg").src="img/6.jpg";
       count1++;
     }
     else if(d2==1){
      document.getElementById("myimg").src="img/1.jpg";
      count++;
      }
      else if(d2==2){
      document.getElementById("myimg").src="img/2.jpg";
      count++;
      }
      else if(d2==3){
      document.getElementById("myimg").src="img/3.jpg";
      count++;
      }
      else if(d2==4){
      document.getElementById("myimg").src="img/4.jpg";
      count++;
      }
      else if(d2==5){
      document.getElementById("myimg").src="img/5.jpg";
      count++;
      }
        }


    if(count%2==1 && dices.innerHTML!=6){
      
        turn.innerHTML="TURN: Player B";

      }
      else if(count%2==1 && dices.innerHTML==6){
        turn.innerHTML="TURN: Player B";
      }
      else if(count%2==0 && dices.innerHTML!=6){
        turn.innerHTML="TURN: Player A";
      }
      else if(count%2==0 && dices.innerHTML==6)
      {
        turn.innerHTML="TURN: Player A"; 
      }
  
     }

  function rolldice(){
     
    var die1 = document.getElementById("die1");
    var status= document.getElementById("status");
    var d1 = Math.floor( Math.random() * 6 ) + 1;
    die1.innerHTML = d1;
    status.innerHTML = "You rolled " + d1 ;
    if(d1==6){
     status.innerHTML+= ".  Roll for another turn!"; 
       document.getElementById("myimg").src="img/6.jpg";
       count1++;
     }
     else if(d1==1){
      document.getElementById("myimg").src="img/1.jpg";
      count++;
      }
      else if(d1==2){
      document.getElementById("myimg").src="img/2.jpg";
      count++;
      }
      else if(d1==3){
      document.getElementById("myimg").src="img/3.jpg";
      count++;
      }
      else if(d1==4){
      document.getElementById("myimg").src="img/4.jpg";
      count++;
      }

      else if(d1==5){
      document.getElementById("myimg").src="img/5.jpg";
      count++;
      }
      
       if(count%2==1 && dices.innerHTML!=6){
         turn.innerHTML="TURN: Player B";
      }
      else if(count%2==1 && dices.innerHTML==6){
        turn.innerHTML="TURN: Player B";
      }
      else if(count%2==0 && dices.innerHTML!=6){
        turn.innerHTML="TURN: Player A";
      }
      else if(count%2==0 && dices.innerHTML==6)
      {
        turn.innerHTML="TURN: Player A"; 
      }
    return d1;
}


 function checkA1(){
  if(dices.innerHTML==6 && turn.innerText=="TURN: Player A" && count%2==0 && lockerA==2){
   document.getElementById("tm-div1").innerHTML="<img src='img/red.jpg' id ='i1' width=22px height=38px />";
   document.getElementById('i1').onclick=function(){
    checkA1();
   }
   var image_x = A1;
   image_x.parentNode.removeChild(image_x);
   A2.style.left="-120px"; 
   lockerA--;
   countA1=count1;
   countA11=count; 
 }
 else if(lockerA==1 && countA1!=count1){
   document.getElementById("tm-div1").innerHTML="<img src='img/red.jpg' id='i1' width=22px height=38px />";
   document.getElementById('i1').onclick=function(){
    checkA1();
     }
   var image_x =A1;
   image_x.parentNode.removeChild(image_x);
   A2.style.left="-120px"; 
   lockerA--;
   countA1=count1;
   countA11=count;
 }
   //for roll dice
   if(lockerA==0 || (lockerA==1 && countA11!=count)){
    var a=parseInt(i);
    i=i+parseInt(die1.innerHTML);
    parseInt(i); 
     document.getElementById("tm-div"+i).innerHTML="<img src='img/red.jpg'   width=22px height=38px />";
     document.getElementById("i"+i).onclick=function(){
     checkA1();
    }
    var img=document.getElementById("i"+a);
    img.parentNode.removeChild(img);
    A2.style.left="-120px"; 
    countA1=count1;
    countA11=count;
   }
   

 }


 function checkA2(){
  if(dices.innerHTML==6 && turn.innerText=="TURN: Player A" && count%2==0 && lockerA==2){
   document.getElementById("tm-div1").innerHTML="<img src='img/red.jpg' id ='i2' width=22px height=38px />";
   document.getElementById('i2').onclick=function(){
    checkA2();
   }
   var image_x = A2;
   image_x.parentNode.removeChild(image_x);
   A1.style.left="-120px"; 
   lockerA--;
   countA2=count1;
   countA22=count; 
 }
 else if(lockerA==1 && countA2!=count1){
   document.getElementById("tm-div1").innerHTML="<img src='img/red.jpg' id='i2' width=22px height=38px />";
   document.getElementById('i2').onclick=function(){
    checkA2();
     }
   var image_x =A2;
   image_x.parentNode.removeChild(image_x);
   A1.style.left="-120px"; 
   lockerA--;
   countA2=count1;
   countA22=count;
 }
   //for roll dice
   if(lockerA==0 || (lockerA==1 && countA22!=count)){
    var a=parseInt(i);
    i=i+parseInt(die1.innerHTML);
    parseInt(i); 
     document.getElementById("tm-div"+i).innerHTML="<img src='img/red.jpg'   width=22px height=38px />";
     document.getElementById("i2"+i).onclick=function(){
     checkA2();
    }
    var img=document.getElementById("i2"+a);
    img.parentNode.removeChild(img);
    A1.style.left="-120px"; 
    countA2=count1;
    countA22=count;
   }
   

 } 


 function checkB1(){
  if(dices.innerHTML==6 && turn.innerText=="TURN: Player B" && count%2==1 && lockerB==2){
   document.getElementById("tm-div15").innerHTML="<img src='img/blue.jpg' id ='i3' width=22px height=38px />";
   document.getElementById('i3').onclick=function(){
    checkB1();
   }
   var image_x = B1;
   image_x.parentNode.removeChild(image_x);
   B2.style.left="-10px";
   B2.style.top="-124px"; 
   lockerB--;
   countB1=count1;
   countB11=count; 
 }
 else if(lockerA==1 && countB1!=count1){
   document.getElementById("tm-div15").innerHTML="<img src='img/blue.jpg' id='i3' width=22px height=38px />";
   document.getElementById('i3').onclick=function(){
    checkB1();
     }
   var image_x =B1;
   image_x.parentNode.removeChild(image_x);
   B2.style.left="-10px";
   B2.style.top="-124px"; 
   lockerB--;
   countB1=count1;
   countB11=count;
 }
   //for roll dice
   if(lockerA==0 || (lockerA==1 && countB11!=count)){
    var a=parseInt(i3);
    i3=i3+15+parseInt(die1.innerHTML);
    parseInt(i3); 
     document.getElementById("tm-div"+i3).innerHTML="<img src='img/blue.jpg'   width=22px height=38px />";
     document.getElementById("i"+i3).onclick=function(){
     checkB1();
    }
    var img=document.getElementById("i3"+a);
    img.parentNode.removeChild(img);
    B2.style.left="-10px";
   B2.style.top="-124px";  
    countB1=count1;
    countB11=count;
   }
   

 } 


 function checkB2(){
  if(dices.innerHTML==6 && turn.innerText=="TURN: Player B" && count%2==1 && lockerB==2){
   document.getElementById("tm-div15").innerHTML="<img src='img/blue.jpg' id ='i4' width=22px height=38px />";
   document.getElementById('i4').onclick=function(){
    checkB2();
   }
   var image_x = B2;
   image_x.parentNode.removeChild(image_x);
   B1.style.left="-50px"; 
   B1.style.top="-125px"; 
   lockerA--;
   countA1=count1;
   countA11=count; 
 }
 else if(lockerA==1 && countB2!=count1){
   document.getElementById("tm-div15").innerHTML="<img src='img/blue.jpg' id='i4' width=22px height=38px />";
   document.getElementById('i4').onclick=function(){
    checkB2();
     }
   var image_x =B2;
   image_x.parentNode.removeChild(image_x);
   B1.style.left="-50px"; 
   B1.style.top="-125px"; 
   lockerB--;
   countB2=count1;
   countB22=count;
 }
   //for roll dice
   if(lockerB==0 || (lockerB==1 && countB22!=count)){
    var a=parseInt(i4);
    i4=i4+15+parseInt(die1.innerHTML);
    parseInt(i4); 
     document.getElementById("tm-div"+i4).innerHTML="<img src='img/blue.jpg'   width=22px height=38px />";
     document.getElementById("i"+i4).onclick=function(){
     checkB2();
    }
    var img=document.getElementById("i"+a);
    img.parentNode.removeChild(img);
    B1.style.left="-50px"; 
    B1.style.top="-125px"; 
    countB2=count1;
    countB22=count;
   }
   

 }  












