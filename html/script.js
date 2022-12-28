




document.querySelectorAll("nav a").forEach( (li , index) => {
    li.addEventListener("click" , (e) =>{
        
        $("nav li a").attr("class" , "nav-link")
        e.target.classList.add("active")
        console.log($(e.target).hasClass("nav-link") )
        if($(e.target).hasClass("nav-link") ){
            $("nav").addClass( "scaler")
           
        }else{
            $("nav").removeClass("scaler")
            

        }
        
        
        window.location.href = `${window.location.href}#${index}`
    
    
    })
} )



