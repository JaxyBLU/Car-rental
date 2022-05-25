/* Variables to hold input elements and etc */
const makeInput = document.getElementById('make');
const modelInput = document.getElementById('model');
const yearInput = document.getElementById('year');
const engineInput = document.getElementById('engine');
const crashInput = document.getElementById('crashed');
const searchButton = document.getElementById('search-button');
const inputForm = document.getElementById('search-form');
const yearNow = 2022;

/* EventListener for when form is submitted */
inputForm.addEventListener('submit', async function(e){
    e.preventDefault();
    alert('Form Submitted!');
    const prices = await fetchPricesForMake(collectInput());
    console.log(prices);
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

    return inputData;
}

/* Function for final price calculation */
async function fetchPricesForMake(data){
    fetch(`../Textdata/${data.make}PricesPerModel.json`)
    .then(response => {
        return response.json()
    })
    .then(jsondata => {
        return jsondata;
    })
}

