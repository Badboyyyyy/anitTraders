$('.owl-carousel').owlCarousel({
    loop:true,
    margin:70,
    nav:true,
   autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:5,
            nav:true,
            loop:false
        }
    }
});
// Buy Now Button function
$("#search").click(function(){
    $("#searchBar").show(1000);
});
var price = document.getElementsByClassName("btn");
var plus = document.getElementsByClassName("plus")
var minus = document.getElementsByClassName("minus");
var num = document.getElementsByClassName("num");
var j, k, l , m;
var p = 1;


    for(j=0; j < price.length; j++){
        price[j].addEventListener("click", function() {
            this.style.display = "none";
           this.nextElementSibling.style.display = "flex";
        })
    }
 // Plus button function 
 for(k=0; k < plus.length ; k++){
     plus[k].addEventListener("click", function(){
         
         p++;
         console.log(p);
        this.nextElementSibling.value = p;
         
     })
 }
 
// minus button function
for(m=0; m < minus.length; m++){
    minus[m].addEventListener("click", function() {
        if(p <= 0){
            alert("value should be atleast 1");
        }
        else{
            p--;
            this.previousElementSibling.value = p;
           
        }
    
    })
}
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "flex";
    evt.currentTarget.className += " active";
  }
  document.getElementById("defaultOpen").click();