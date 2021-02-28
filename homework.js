let printUser = document.getElementById('print-user');
let printBtn = document.getElementById('button');
let showForm = document.getElementById('show-form');
let tableUserTemplate = document.getElementById('users-list');
let tableUsers = document.getElementById('users-list')

// Inputs
const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const cityInput = document.getElementById('city');
const countryInput = document.getElementById('country');
const ageInput = document.getElementById('age');
let spouseInput = document.getElementById('spouse');

let searchInput = document.getElementById('searchinput')

let txtInputs = ([firstNameInput, lastNameInput, ageInput, countryInput, cityInput, spouseInput])

// changeView
// const showForm

let users = [];
let pets = [];
let uniqueId = 0;

showForm.style.display = 'block'

function saveUser()
{
    // debugger;
    const isOk = validateInputs([firstNameInput, lastNameInput, ageInput, countryInput, cityInput]);
    if (isOk) {

        let pets =  checkBoxesChecked();
        let isMarried = (spouseInput.value.length == 0 ? 'Not married yet' : `${spouseInput.value}`);

        let newUser = new User(firstNameInput.value, 
                                lastNameInput.value, 
                                ageInput.value, 
                                countryInput.value, 
                                cityInput.value, 
                                isMarried, 
                                pets,
                                uniqueId);

                                uniqueId += 1;

        users.push(newUser);

        listUsers();

        // console.log(`Inside push user`, users);
        
        cleanUp(txtInputs);
        
        uncheckCheckbox();

    } else {
        alert('Check your inputs');
    }
} 

function listUsers() {
    tableUsers.innerHTML = 
    `
        <tr>
            <th>Full Name</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Age</th>
            <th>City</th>
            <th>Country</th>
            <th>Spouse</th>
            <th>Pets</th>
            <th>Actions</th>
        </tr>
    ` 

    let curUser = users;

    for (let i=0; i<= users.length-1; i++)
    {
        curUser = users[i];

        tableUsers.innerHTML +=
        `
        <tr>
                        <td>${getFullName(curUser.firstName, curUser.lastName)}</td>
                        <td>${curUser.firstName}</td>
                        <td>${curUser.lastName}</td>
                        <td>${curUser.age}</td>
                        <td>${curUser.city}</td>
                        <td>${curUser.country}</td>
                        <td>${curUser.isMarried}</td>
                        <td>${curUser.pets}</td>
                        <td>${curUser.id} <button type="button" onclick="deleteRow(this)">Delete User</button><button type="button" onclick="editUser(${curUser.id})">Edit User</button></td>
        </tr>
        `
        
    }

    // searchInput.addEventListener('input', e =>     
    // (users.filter(user => user.firstName.toLowerCase().includes(e.target.value) ||
    // user.lastName.toLowerCase().includes(e.target.value)))) // searching method da se dosredi za full name nekako
}

let editUser = (r) => {

    console.log(r)
}

let deleteRow = (r) => {
    let i = r.parentNode.parentNode.rowIndex;
    tableUsers.deleteRow(i);
    let index = users.findIndex(users => users = r)
    if (index > -1) {
    users.splice(index, 1);
    }
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

const validateInputs = inputs => {
    for (let input of inputs) {
        if (!input.value) {
            return false;
        }
    }
    return true; 
}

function cleanUp(inputs) {
    for (let input of inputs) {
        input.value = '';
    }
}

const cleanUpInputs = inputs => inputs.forEach(input => input.value = '');

let checkBoxesChecked = () => {
    pets = [];  //BRISI Se sto imas vo memeroija i puno povtorno
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (let i = 0; i < checkboxes.length; i++) {
        pets.push(checkboxes[i].value);
    }
    if(pets.length > 0) {
        return pets.join(', ')
    }else {
        return 'No pets yet';
    }
}

const uncheckCheckbox = () => {
    let items = document.getElementsByName('pets');
    for (let i = 0; i < items.length; i++) {
        if (items[i].type == 'checkbox')
            items[i].checked = false;
    }
}

printBtn.addEventListener('click', saveUser);

// Models 
function User(firstName, lastName, age, city, country, isMarried, pets, id) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.city = city;
    this.country = country;
    this.isMarried = isMarried;
    this.pets = pets;
    this.id = id;
}
