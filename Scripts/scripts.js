const navbutton = document.getElementById('navbutton');
const popupmenu = document.getElementById('popup');
const popupclose = document.getElementById('popup-close');

/* Navigation button which opens popup menu */
navbutton.addEventListener('click', function(e){
    e.preventDefault();
    popupmenu.style.visibility = 'visible';
})

/* Button for closing the popup menu */
popupclose.addEventListener('click', function(e){
    e.preventDefault();
    popupmenu.style.visibility = 'hidden';
})