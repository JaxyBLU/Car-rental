/* Variables to hold input elements and etc */
const makeInput = document.getElementById('make');
const modelInput = document.getElementById('model');
const yearInput = document.getElementById('year');
const engineInput = document.getElementById('engine');
const crashInput = document.getElementById('crashed');
const searchButton = document.getElementById('search-button');
const inputForm = document.getElementById('search-form');

/* EventListener for when form is submitted */
inputForm.addEventListener('submit', function(e){
    e.preventDefault();
    alert('Form Submitted!');
    collectInput();
})

/* Function for collecting input data */
function collectInput(){
    const inputData = {
        make: makeInput.value,
        model: modelInput.value,
        year: yearInput.value,
        engine: engineInput.value,
        crashed: crashInput.value
    }

    console.log(inputData);
}