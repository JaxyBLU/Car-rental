/* Variables to hold input elements and etc */
const makeInput = document.getElementById('make');
const modelInput = document.getElementById('model');
const yearInput = document.getElementById('year');
const engineInput = document.getElementById('engine');
const crashInput = document.getElementById('crashed');
const searchButton = document.getElementById('search-button');
const inputForm = document.getElementById('search-form');
const yearNow = 2022;

const bmwmodels = `
<option value="M5Competition">M5 Competition</option>
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
    console.log(collectInput());
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

