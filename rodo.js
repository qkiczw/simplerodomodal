const rodoBtnAccept = document.querySelector('.rodo-btn-accpet');
const rodoBtnDontAccept = document.querySelector('.rodo-btn-dont-accpet');
const rodoModal = document.querySelector('.rodo-section');
const getCookies = decodeURIComponent(document.cookie);

let cookiesArray = getCookies.split(';');
let checkCookie = cookiesArray.some(checkingFunction);

function checkingFunction(value) {
    return value.trim() === 'rodo=true';
}
console.log(`cookie is created ${checkCookie}`);

if (checkCookie) {
    console.log('hurray! cookie is create!');
    rodoModal.classList.add('hidden');
} else {
    console.log('There is no cookie:/ ');
}

rodoAcceptHandler = ()=> {
    document.cookie = 'rodo=true; expires=365; path=/';
    rodoModal.classList.add('hidden');
}
rodoDontAcceptHandler = ()=> {
    rodoModal.classList.add('hidden');
}

rodoBtnAccept.addEventListener('click', rodoAcceptHandler)
rodoBtnDontAccept.addEventListener('click', rodoDontAcceptHandler)