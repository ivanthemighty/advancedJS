let nameInput = document.getElementById('name');
let printUser = document.getElementById('print-user');
let printBtn = document.getElementById('button');
let showForm = document.getElementById('show-form');
let tableUsers = document.getElementById('users-list')
// let tableUsers = document.getElementsByTagName('tr')

// Inputs
let firstNameInput = document.getElementById('first-name');
let lastNameInput = document.getElementById('last-name');
let cityInput = document.getElementById('city');
let countryInput = document.getElementById('country');
let ageInput = document.getElementById('age');
var spouseCheck = document.getElementsByName('spouse'); 
var petsCheck = document.getElementsByName('pets');

let users = [];

showForm.style.display = 'block'
function listUsers() {
    if(validateInputs([firstNameInput,lastNameInput, ageInput, countryInput, cityInput])) {
        tableUsers.innerHTML += 
        `
        <tr>
                        <td>${getFullName(firstNameInput.value, lastNameInput.value)}</td>
                        <td>${firstNameInput.value}</td>
                        <td>${lastNameInput.value}</td>
                        <td>${ageInput.value}</td>
                        <td>${cityInput.value}</td>
                        <td>${countryInput.value}</td>
                        <td>${displayRadioValue(spouseCheck)}</td>
                        <td>${displayRadioValue(petsCheck)}</td>
        </tr>
        `
    let newUser = new User(firstNameInput.value, lastNameInput.value, ageInput.value, countryInput.value, cityInput.value, displayRadioValue(spouseCheck), displayRadioValue(petsCheck));
    users.push(newUser)
    console.log(users);
    // cleanUp();
    // cleanUpInputs([spouseCheck, petsCheck])
    } else {
        alert('asd')
    }
    
    
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function displayRadioValue(input) { 
    for(i = 0; i < input.length; i++) { 
        if(input[i].checked) 
        return(input[i].value);
    }
} 

function validateInputs(inputs) {
    for(let input of inputs) {
        if(!input.value) {
            return false;
        }
    }
    return true;
}

function cleanUp() {
    firstNameInput.value = '';
    lastNameInput.value = '';
    ageInput.value = '';
    cityInput.value = '';
    countryInput.value = '';
}

function cleanUpInputs(inputs) {
    for(const input of inputs) {
        input.checked = false;
    }
}

printBtn.addEventListener('click', listUsers);

// Models 
function User(firstName, lastName, age, city, country, spouse, pets) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.country = country;
    this.spouse = spouse;
    this.pets = pets;
}

// https://stackoverflow.com/questions/17621515/how-to-show-and-hide-input-fields-based-on-radio-button-selection   