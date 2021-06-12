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




// Add to cart button click function
    for(let j=0; j < price.length; j++){
        price[j].addEventListener("click", function() {
           
            this.style.display = "none";
            this.nextElementSibling.style.display = "none";
           this.nextElementSibling.style.display = "flex";
         
        })
    }
 
 

// Add to cart Button functionality
var addCart = document.getElementsByClassName("addTo");

var item = 0;

for(let i = 0; i < addCart.length; i++) {
   
    addCart[i].addEventListener("click", updateCartContent)
    function updateCartContent(e) {
      item++;
      
        document.getElementsByClassName("item")[0].innerHTML = item;
    var currentAddToCartButton = e.target;
    var parentBox = currentAddToCartButton.parentElement;
   // var val= this.nextElementSibling;
    
    var images = parentBox.getElementsByClassName("imgfluid")[0].src;
    var title= parentBox.getElementsByTagName("p")[0].innerText;
    var weight= parentBox.getElementsByTagName("p")[1].innerText;
    var rate= parentBox.getElementsByTagName("p")[2].innerText;   
     addnewRowInCart(images, title,weight, rate);
    }
}

// Card creating functionality
var cartContainter = document.getElementsByClassName("cartContainer")[0];
function addnewRowInCart(images, title, weight, rate) {
 let div = document.createElement("div");
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
    for(let k = 0; k < removeBtn.length; k++) {
        removeBtn[k].addEventListener("click", removeItem)
    }
    function removeItem(e) {
        e.target.parentElement.remove();
        document.getElementsByClassName("item")[0].innerHTML = item--;
    }
}
// Plus button function 

for( let k=0; k < plus.length ; k++){
    let p =0; 
    plus[k].addEventListener("click", function(){
      let a = ++p;
       this.nextElementSibling.value = a;
    })
}

// minus button function
for(let m=0; m < minus.length; m++){
  
   minus[m].addEventListener("click", function(e) {
     let p=  e.target.previousElementSibling.value;
       if(p < 1){
          for(let q = 0; q < price.length; q++){
              price[q].style.display = "flex";
          }
          item--;
          document.getElementsByClassName("item")[0].innerHTML = item;
         this.parentElement.style.display = "none"; 
       }
      
       else{
          let b= --p;
           this.previousElementSibling.value = b;   
              
       }
   
   })
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