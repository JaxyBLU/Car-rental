/* Variables to hold input elements and etc */
const makeInput = document.getElementById('make');
const modelInput = document.getElementById('model');
const yearInput = document.getElementById('year');
const engineInput = document.getElementById('engine');
const crashInput = document.getElementById('crashed');
const searchButton = document.getElementById('search-button');
const inputForm = document.getElementById('search-form');
const yearNow = 2022;

/* Data for the models selection */
const bmwmodels = `
<option value="M5Competition">M5Competition</option>
<option value="3Series">3Series</option>
<option value="5Series">5Series</option>
<option value="7Series">7Series</option>
<option value="X5">X5</option>
<option value="X7">X7</option>
`;

const hondamodels = `
<option value="Accord">Accord</option>
<option value="CR-V">CR-V</option>
<option value="Civic">Civic</option>
`;

const subarumodels = `
<option value="Forester">Forester</option>
<option value="Impreza">Impreza</option>
<option value="Outback">Outback</option>
`;

const nissanmodels = `
<option value="Pathfinder">Pathfinder</option>
<option value="Teana">Teana</option>
<option value="Primera">Primera</option>
`;

const toyotamodels = `
<option value="Camry">Camry</option>
<option value="Avensis">Avensis</option>
<option value="Allion">Allion</option>
<option value="Corolla">Corolla</option>
<option value="RAV4">RAV4</option>
<option value="Highlander">Highlander</option>
`;

/* Data for the prices */
const bmwprices = {
    "M5Competition": 150000,
    "3Series": 1300,
    "5Series": 1500,
    "7Series": 1700,
    "X5": 15000,
    "X7": 17000
};

const hondaprices = {
    "Accord": 1888,
    "CR-V": 1999,
    "Civic": 2111
};

const subaruprices = {
    "Forester": 6666,
    "Impreza": 7777,
    "Outback": 8888
};

const nissanprices = {
    "Pathfinder": 9876,
    "Teana": 8765,
    "Primera": 7654
};

const toyotaprices = {
    "Camry": 12345,
    "Avensis": 23456,
    "Allion": 34567,
    "Corolla": 45678,
    "RAV4": 56789,
    "Highlander": 7890
};

/* Models being changed depending on the selected make of the vehicle */
makeInput.addEventListener('change', function(){
    const makechoosen = makeInput.value;
    switch(makechoosen){
        case 'BMW':
            modelInput.innerHTML = bmwmodels;
            break;
        case 'Toyota':
            modelInput.innerHTML = toyotamodels;
            break;
        case 'Honda':
            modelInput.innerHTML = hondamodels;
            break;
        case 'Subaru':
            modelInput.innerHTML = subarumodels;
            break;
        case 'Nissan':
            modelInput.innerHTML = nissanmodels;
            break;
    }
})

/* EventListener for when form is submitted */
inputForm.addEventListener('submit', async function(e){
    e.preventDefault();
    alert('Form Submitted!');
    const datanow = collectInput();
    const priceofthemodel = getPriceForModel(datanow.make, datanow.model);
    const finalprice = calculateFinalPrice(datanow, priceofthemodel);
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

/* Function for getting the price for the selected model */
function getPriceForModel(make, model){
    var price = 0;
    switch(make){
        case "BMW":
            price = bmwprices[model];
            break;
        case "Honda":
            price = hondaprices[model];
            break;
        case "Subaru":
            price = subaruprices[model];
            break;
        case "Nissan":
            price = nissanprices[model];
            break;
        case "Toyota":
            price = toyotaprices[model];
            break;
    }

    return price;
}

/* Function for calculating final price for the selected model and characteristics */
function calculateFinalPrice(datanow, priceofthemodel){
    
}