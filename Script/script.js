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
var pp =0; mm=0;
// Buy Now Button function
$("#search").click(function(){
    $("#searchBar").show(1000);
});
var price = document.getElementsByClassName("btn");
var plus = document.getElementsByClassName("plus")
var minus = document.getElementsByClassName("minus");
var num = document.getElementsByClassName("num");

var j, k, l , m, p;
var p = 1;


    for(j=0; j < price.length; j++){
        price[j].addEventListener("click", function() {
            this.style.display = "none";
            this.nextElementSibling.style.display = "none";
           this.nextElementSibling.style.display = "flex";
         
        })
    }
 // Plus button function 
 for(k=0; k < plus.length ; k++){
     plus[k].addEventListener("click", function(){
         pp++;
         p++;
         console.log(p);
        this.nextElementSibling.value = p;
        item++;
        document.getElementsByClassName("item")[0].innerHTML = item;
       var  check = item;
         
     })
 }
 
// minus button function
for(m=0; m < minus.length; m++){
    minus[m].addEventListener("click", function() {
        
        if(p < 1){
           for(p = 0; p < price.length; p++){
               price[p].style.display = "flex";
           }
          this.parentElement.style.display = "none";
          
        }
        else{
           
          
            p--;
            
            this.previousElementSibling.value = p;
            item--;
            document.getElementsByClassName("item")[0].innerHTML = item;
        }
    
    })
}
// menu active class added

// Add to cart Button functionality
var addCart = document.getElementsByClassName("addTo");

var item = 0;
for(var i = 0; i < addCart.length; i++) {
   
    addCart[i].addEventListener("click", updateCartContent)
    function updateCartContent(e) {
        item++;
        document.getElementsByClassName("item")[0].innerHTML = item;
    var currentAddToCartButton = e.target;
    var parentBox = currentAddToCartButton.parentElement;
    var val= this.nextElementSibling;
    
    var images = parentBox.getElementsByClassName("imgfluid")[0].src;
    var title= parentBox.getElementsByTagName("p")[0].innerText;
    var weight= parentBox.getElementsByTagName("p")[1].innerText;
    var rate= parentBox.getElementsByTagName("p")[2].innerText;
    
    
       
    
     addnewRowInCart(images, title,weight, rate);
    }
    
}
var cartContainter = document.getElementsByClassName("cartContainer")[0];
function addnewRowInCart(images, title, weight, rate) {
 var div = document.createElement("div");
    div.classList.add("row");
    insideDivContent = `
    <div class="col-6">
    <img src=${images}>
    </div>
    <div class="col-6">
   
 
    <div class="contentTitle">
     <h4>${title}</d4>
     <h5>${weight}</h5>
     <h5>${rate}</h5>
    
    </div>
    
    </div>
    <button class="removeBtn rmvBtn">Remove Button </button>`;
    div.innerHTML = insideDivContent;
    cartContainter.appendChild(div);
    var removeBtn = document.getElementsByClassName("removeBtn");
    for(var k = 0; k < removeBtn.length; k++) {
        removeBtn[k].addEventListener("click", removeItem)
    }
    function removeItem(e) {
        e.target.parentElement.remove();
     
       
        document.getElementsByClassName("item")[0].innerHTML = item--;
    }
}

                    
/*
function deleteItem(){
   
var ma = document.getElementsByClassName("row");
 ma[0].style.display = "none";

    }
    */
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