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

};


 if (screen.width <= 480) {
   
$('div.onePage').css('width','100vw');     
$('div.onePage').css('display','none');

$('a.toggled').click(function() {
var $dataName = $(this).data("name");
         
$('div.onePage').css('display','none');


$("#" + $dataName).css('display','block');
    
    
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
    setTimeout(carousel, 500); 
}

                       
});

