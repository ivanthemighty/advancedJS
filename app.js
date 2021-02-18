const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const ageInput = document.getElementById('age');
const cityInput = document.getElementById('city');
const countryInput = document.getElementById('country');
const spouseInput = document.getElementById('spouse');

// button
let submitBtn = document.getElementById('button')

//(firstNameInput.value, lastNameInput.value, ageInput.value, cityInput.value, countryInput.value, spouseInput.value)

// Data
let users = [];
let pets = [];

function addUsers() {
    let user = new User(firstNameInput.value, lastNameInput.value, ageInput.value, cityInput.value, countryInput.value, spouseInput.value, checkBoxesChecked());
    users.push(user);
    uncheckCheckbox();
    console.log(users);
}

const checkBoxesChecked = () => {
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (let i = 0; i < checkboxes.length; i++) {
    pets.push(checkboxes[i].value);
    }
    return pets.join(', ')
}

const uncheckCheckbox = () => {
    let items=document.getElementsByName('pets');
	for(let i=0; i<items.length; i++){
	if(items[i].type=='checkbox')
		items[i].checked=false;
	}
}

submitBtn.addEventListener('click', addUsers);

// Model 
function User (firstName, lastName, age, city, country, spouse, pets) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.country = country;
    this.spouse = spouse;
    this.pets = pets;
}
