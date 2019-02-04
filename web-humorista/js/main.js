$(document).ready(function(){

    if(window.location.href.indexOf('index')){
        $('.galeria').bxSlider({
            
            mode: 'horizontal',
            captions: false,
            slideWidth: 1200,
            responsive: true,
            pager: true,
            auto: true,
            pause: 2000,
            adaptiveHeight: true,
            minSlides: 1,
            maxSlides: 2,
            moveSlides: 2,
            
            slideWidth: 500

        });
    };

    if(window.location.href.indexOf('index') > -1){

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top', //Sirve para mostrar todos los errores en la parte superior.
            scrollToTopOnError: true,
        });
    };

    if(window.location.href.indexOf('index')){
        // When the user scrolls the page, execute myFunction 
        window.onscroll = function() {stickyHeader()};

        // Get the header
        var header = document.getElementById("header");

        // Get the offset position of the navbar
        var sticky = header.offsetTop;

        // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
        function stickyHeader() {
            if (window.pageYOffset > sticky) {
                header.classList.add("sticky");
                
            }if(function stickyHeader() {}){
               /* $("#header").animate({height: "69px"}, "slow");
                $("#logo_img").animate({height: "60px", width: "80px", marginTop: "-75px"}, "slow");
            */
            }else{
                header.classList.remove("sticky");
            };
        };    
    };

    if(window.location.href.indexOf('index')){
        var formulario = document.querySelector("#form_contact");
        
        formulario.addEventListener("submit", function(){

            var nombre = document.querySelector("#input-name").value;
            var email = document.querySelector("#input-email").value;

            if(true){
                localStorage.setItem(nombre, email);
            };
        });
    };
});
    
