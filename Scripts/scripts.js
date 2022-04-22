const navbutton = document.getElementById('navbutton');
const popupmenu = document.getElementById('popup');
const popupclose = document.getElementById('popup-close');

/* Navigation button which opens popup menu */
navbutton.addEventListener('click', function(e){
    e.preventDefault();
    window.onkeydown = function( event ) {
        if ( event.keyCode == 27 ) {
            popupmenu.style.visibility = 'hidden';
        }
    };
    popupmenu.style.visibility = 'visible';
})

/* Button for closing the popup menu */
popupclose.addEventListener('click', function(e){
    e.preventDefault();
    popupmenu.style.visibility = 'hidden';
})