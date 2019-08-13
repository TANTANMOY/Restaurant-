$(document).ready(function(){
    var pos = $(".pos");
    var neg = $(".neg");
    var num = $(".num");
    
   var count =0;
   for(var i=0;i<pos.length;i++)
   {
pos[i].click(function() {
  count += 1;
  num[i].innerHTML=count;
});
neg[i].click (function() {
    if (count>0)
    count -= 1;
    num[i].innerHTML=count;
  });
}
//   pos1.onclick = function() {
//     count1 += 1;
//     num1.innerHTML=count1;
//   };
//   neg1.onclick = function() {
//       if (count>0)
//       count1 -= 1;
//       num1.innerHTML=count1;
//     };
//     pos2.onclick = function() {
//       count2 += 1;
//       num2.innerHTML=count2;
//     };
//     neg2.onclick = function() {
//         if (count>0)
//         count2 -= 1;
//         num2.innerHTML=count2;
//       };
});