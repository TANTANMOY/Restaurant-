$(document).ready(function(){
    var pos = document.getElementById("pos");
    var neg = document.getElementById("neg");
    var num = document.getElementById("num");
   var count = 0;
pos.onclick = function() {
  count += 1;
  num.innerHTML=count;
};
neg.onclick = function() {
    if (count>0)
    count -= 1;
    num.innerHTML=count;
  };
});