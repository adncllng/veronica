$(document).ready(function(){
    
if (screen.width >= 480) {
    
$('div.onePage').css('width','0vw');

$('a.toggled').click(function() {
var $dataName = $(this).data("name");
         
$('div.onePage').css('width','0vw');


$("#" + $dataName).css('width','49vw');
    
    
});

    
    
$('h1').click(function(){
    $('div.onePage').css('width','0vw');
});   


$('h1').click(function(){
    $('div.projContent').css('height','0vh');
    $('div.closingsection').css('display','none');
});
  $('div.closingsection').click(function(){
    $('div.projContent').css('height','0vh');
      $('div.closingsection').css('display','none');
});  
 
    
    
$('div.projContent').css('height','0vh');

$('h2.projtog').click(function() {
     $('.projContent').animate({ scrollTop: 0 }, 'fast');
var $dataName1 = $(this).data("name");
         $('div.closingsection').css('display','block');
    
$('div.projContent').css({
    height: "0vh", 
transition: "all 0.3",
});


$("#" + $dataName1).css({
    height: "100vh", 
   transition: "all 0.6s"
});
    
    
        $('a.toggled').click(function(){
        $('div.projContent').css('height','0vh');
            $('#news').animate({ scrollTop: 0 }, 'fast');
            $('div.closingsection').css('display','none');
})
    
    
});
    
};
    


 if (screen.width <= 480) {
   
$('div.onePage').css('width','100vw');     
$('div.onePage').css('display','none');

$('a.toggled').click(function() {
var $dataName = $(this).data("name");
         
$('div.onePage').css('display','none');


$("#" + $dataName).css('display','block');
    
    
});
$('h1').click(function(){
    $('div.onePage').css('display','none');
});

};

var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 300); 
}

                       
});

