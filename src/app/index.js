console.log("ВХОДНОЙ_ФАЙЛ___INDEX.JS");

import '../scss/main.scss';
import '../public/images/favicon.ico';

// const wiki = {
//     "firstName": "Иван",
//     "lastName": "Иванов",
//     "address": {
//         "streetAddress": "Московское ш., 101, кв.101",
//         "city": "Ленинград",
//         "postalCode": 101101
//     },
//     "phoneNumbers": [
//         "812 123-1234",
//         "916 123-4567"
//     ]
//  }

 const wiki = [
    {
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
    },
    {
        "firstName": "Семен",
        "lastName": "Слепаков",
        "address": {
            "streetAddress": "Свинцовая ул., 7, кв.2",
            "city": "Пермь",
            "postalCode": 150101
        },
        "phoneNumbers": [
            "888 123-1234",
            "999 123-4567"
        ]
    },
    {
        "firstName": "Петр",
        "lastName": "Сидоров",
        "address": {
            "streetAddress": "ул.Горького, 23, кв.8",
            "city": "Москва",
            "postalCode": 100999
        },
        "phoneNumbers": [
            "950 123-1234",
            "915 123-4567"
        ]
    }
];


// for (var key in wiki) {
    console.log(wiki);
// }

// for (var  i=0; i<length; i++) {
//     output.innerHTML = wiki[i].firstName + ' ' + wiki[i].lastName;
// }
var output = document.getElementById('output');

output.innerHTML = wiki[1].firstName + ' ' + wiki[1].lastName;


// console.log("__output__" + output);
console.log("КОНЕЦ________");