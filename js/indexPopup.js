document.querySelectorAll(".tourguides-item").forEach(item => {

    item.addEventListener("click", function(e){

        // Jeżeli to normalny link - nic nie rób
        if(this.getAttribute("href") !== "#"){
            return;
        }

        // Popup
        e.preventDefault();

        const popup = document.getElementById(this.id + "-content");

        if(!popup) return;

        popup.classList.add("active");

    });

});


document.querySelectorAll(".popup-close").forEach(btn=>{

    btn.addEventListener("click",function(){

        this.closest(".popup").classList.remove("active");

    });

});


document.querySelectorAll(".popup").forEach(popup=>{

    popup.addEventListener("click",function(e){

        if(e.target===this){

            this.classList.remove("active");

        }

    });

});


document.addEventListener("keydown",function(e){

    if(e.key==="Escape"){

        document.querySelectorAll(".popup.active").forEach(p=>{

            p.classList.remove("active");

        });

    }

});
