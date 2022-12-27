

document.querySelectorAll("nav a").forEach( (li , index) => {
    li.addEventListener("click" , (e) =>{
        
        $("nav li a").attr("class" , "nav-link")
        e.target.classList.add("active")
        console.log($(e.target).hasClass("nav-link") )
        if($(e.target).hasClass("nav-link") ){
           // document.querySelector("nav").style.top = "-4%"
           // document.querySelector("nav").style.bottom = "95%"
           $("nav").addClass( "scaler")
        }else{
            $("nav").removeClass("scaler")
            //document.querySelector("nav").style.top = "0%"
            //document.querySelector("nav").style.bottom = "88%"
        }
        
        
        window.location.href = `${window.location.href}#${index}`
    
    
    })
} )



