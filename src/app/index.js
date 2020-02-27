console.log("ВХОДНОЙ_ФАЙЛ___INDEX.JS");

import '../scss/main.scss';
import '../public/images/favicon.ico';

const wiki = {
    "firstName": "Иван",
    "lastName": "Иванов",
    "address": {
        "streetAddress": "Московское ш., 101, кв.101",
        "city": "Ленинград",
        "postalCode": 101101
    },
    "phoneNumbers": [
        "812 123-1234",
        "916 123-4567"
    ]
 }

console.log(wiki);



var output = document.getElementById('output');
output.innerHTML = wiki.firstName + ' ' + wiki.lastName;
// console.log("__output__" + output);
console.log("КОНЕЦ________");