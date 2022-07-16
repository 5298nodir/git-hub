// "use strict" // Qat'iy rejim eski kodlardan foydalanmaslikga yordam beradi.

// // NUMBER

// let number = 16; // Number.

// console.log(8 / 0); // Infinity.

// console.log('adham' * 16); // Ikki xil ma'lumot turi uzaro kupaytirilsa, trajimaso => raqam emas.

// // STRING

// const ism = "adham";

// let familiya = 'sattotov';

// var taxi = 'o\'lmas';
// console.log(taxi);

// let ismFamiliya = `mening ismim ${ism} familiyam ${familiya}`;
// console.log(ismFamiliya);

// // BOOLEAN

// let uylanganmi = false; // Yolg'on, xato, yo'q.

// let ishlaydimi = true; // Rost, xaqiqat, ha, to'g'ri.

// // NULL

// console.log(yoqUzgaruvchi); // Yoq bo'lgan uzgaruvchini chaqirilsa null ni qaytaradi.
// console.log(yoqNarsaniQidirish);

// // UNDEFINED

// let und;
// console.log(und); // o'zgaruvchi bor lekin qiymati yoq bo'lsa undefined ni qaytaradi.
// console.log(quttiBorLekinBumbush);


// // OBJECT

// let samsung = {
//     seria: 'a51',
//     asosiyKamera: "48mp",
//     ram: 4,
//     xotra: 64,
//     suvgaChidam: true
// }; // Object 1 ta o'zgaruvchida kup ma'lumot saqlash uchun.
// samsung.seria = 'a71'; // Object dagi ma'lumotni o'zgartirish.
// console.log(typeof(samsung));
// console.log(samsung.seria); // Object dagi ma'lumotni ko'rish.


// let footballPlayers = {
//     Messi: 'PSJ',
//     Ronaldo: 'MYU',
//     Neymar: 'PSJ',
//     Lwandowski: 'Bavarya'
// }
// console.log(footballPlayers.Messi);


// // ARRAY
// //              0        1       2      3    4       5            6              ma'lumotni chiqarishda tartib raqamdan foydalanamiz.
// let arrayValyu = ['red', 'green', 'black', 10, true, ['array'], {key: 'valyu'}]; // array ichida hohlagancha va hohlagan ma'lumot turini saqlasa buladi.
// console.log(arrayValyu[2]); // Array dagi ma'lumotni ko'rish.
// console.log(arrayValyu[6].key); // Array dagi objektni ko'rish.
// console.log(arrayValyu[5]); // Array dagi array ko'rish.
// arrayValyu[1] = 'qizil';
// console.log(arrayValyu[1]); // Array dagi ma'lumotni ko'rish.

// const footballClubs = ['Barcelona', 'Juventus', 'BVB'];
// console.log(`Messi ${footballClubs[0]} => ${footballPlayers.Messi}`); // Array va objecdan birgalikda foydalanish.
// console.log(`Ronaldo ${footballClubs[1]} => ${footballPlayers.Ronaldo}`);
// console.log(`Lewandowski ${footballClubs[2]} => ${footballPlayers.Lwandowski}`);



// Foydalanuvchi bilan oddiy mulaqot

alert("salom D❤"); // Foydalanuvchini ovgohlantirish uchun.


confirm('dasturchimisiz'); // foydalanuvchidan boolean(true, false) qiymatlarini qabul qiladi.


prompt('qayerdasiz'); // foydalanuvchidan string ma'lumotlarni qabul qiladi.

prompt('qayerdasiz', 'uzbekistan'); // boshlang'ich qiymat uchun ishlatiladi.

+prompt('yoshingiz nechchida'); // foydalanuvchidan number ma'lumotlarni qabul qiladi.



// OPERATORLAR 

console.log(12 + '6'); // 126

console.log(12 + 'salom'); // NaN

console.log(12 + +'6'); // 18 yani stringni number ga aylantirish


let raqam = 12;

console.log(++raqam); // har qanday raqamni 1 taga oshirib beradi yani 1 ni qushadi.
console.log(--raqam); // har qanday raqamni 1 taga kamaytirib beradi yani 1 ni ayiradi.

console.log(raqam++); // avval consolga raqamni chiqarib keyin 1 ni qushadi.

console.log(11 % 2); // 2 ta sonni bo'lganda qancha qoldiq qolishi.

// && = va , || = yoki.
let yosh19 = false;
console.log(!yosh19); // false ni true ga aylantirish.

// == , === tengmi.
// != , !== teng emasmi.

