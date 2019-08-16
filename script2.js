$(document).ready(function(){
  var c=[0,0,0],i;
  
  var pos = $(".pos");
  var neg = $(".neg");
  pos.each(function(i){
    $(this).click(function(){
        $($(".num")[i]).html(++c[i]);
      });
  });
  
  neg.each(function(i){
    $(this).click(function(){
      if(c[i]>0)
        $($(".num")[i]).html(--c[i]);
      });
  });
  
  
});