$(document).ready(function(){
    var pos = document.getElementById("pos");
    var neg = document.getElementById("neg");
    var num = document.getElementById("num");
    var pos1 = document.getElementById("pos1");
    var neg1 = document.getElementById("neg1");
    var num1 = document.getElementById("num1");
    var pos2 = document.getElementById("pos2");
    var neg2 = document.getElementById("neg2");
    var num2 = document.getElementById("num2");
   var count = 0;
   var count1 = 0;
   var count2 = 0;
pos.onclick = function() {
  count += 1;
  num.innerHTML=count;
};
neg.onclick = function() {
    if (count>0)
    count -= 1;
    num.innerHTML=count;
  };
  pos1.onclick = function() {
    count1 += 1;
    num1.innerHTML=count1;
  };
  neg1.onclick = function() {
      if (count>0)
      count1 -= 1;
      num1.innerHTML=count1;
    };
    pos2.onclick = function() {
      count2 += 1;
      num2.innerHTML=count2;
    };
    neg2.onclick = function() {
        if (count>0)
        count2 -= 1;
        num2.innerHTML=count2;
      };
});