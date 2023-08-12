var menuItems = document.getElementById("menuItems");

menuItems.style.maxHeight = "0px";

function myMenu(){
    if (menuItems.style.maxHeight =="0px") {
        
        menuItems.style.maxHeight = "400px";
       
    }
   
    else{
        menuItems.style.maxHeight = "0px";
      
     
    }

 
}
