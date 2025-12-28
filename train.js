console.log("Jack Ma maslahatli");

const list =[
    "yaxshi talaba bo'ling", //0-20
    "togri boshliq tanlang va koproq hato qiling", //20-30
    "uzingizga ishlashingizni boshlang", //30-40
    "siz kuchli bolgan narslarni qiling", //40-50
    "yoshlarga investitsiya qiling", //50-60
    "endi dam oling, foydasi yoq endi", //60
];
//CALLBACK FUNCTION
// function maslahatBering(a, callback){
//     if (typeof a != "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         callback(null, list[5])
//     }
// }

// maslahatBering(30, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     console.log('Javob:',data);
// })

// Callbackning ishlash jarayonin tushunish
// function maslahatBering(a, callback){
//     if (typeof a != "number") callback("insert a number", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else {
//         setInterval(function () {
//             callback(null, list[5]);
//         }, 1000);
//     }
// }

// console.log("Passe here 0")
// maslahatBering(70, (err, data) => {
//     if(err) console.log("ERROR:", err);
//     else{
//         console.log('Javob:',data);
//     }
// });
// console.log("Passe here 1");

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Synchronous (sinxron): Ishlar ketma-ket bajariladi. Bitta ish tugamasdan keyingisi boshlanmaydi.

// Asynchronous (asinxron): Ishlar bir vaqtda yoki mustaqil bajarilishi mumkin. Bitta ishni kutib turmasdan boshqasi davom etadi.

// Kundalik misol:

// Telefon qo‘ng‘irog‘i — sinxron (javobni kutasan).

// Telegram/WhatsApp xabar — asinxron (javob keyinroq kelishi mumkin).

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ASYNC FUNCTION
// async function maslahatBering(a){
//     if (typeof a !== "number") throw new Error("insert a number");
//     else if (a <= 20) return(list[0]);
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else {
    // //CALL VIA PROMISE
//         return new Promise ((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5]);
//             }, 5000);
//         });

//         // setTimeout(function () {
//         //     return list[5];
//         // }, 5000);
//     }
// }

//  CALL VIA then/catch
// console.log("Passe here 0")
// maslahatBering(25)
//     .then(data => {
//         console.log("javob:", data);
// })
//     .catch(err => {
//         console.log("ERROR:", err);
// })
// console.log("Passed here 1");

// CALL VIA async/await
// console.log("Passe here 0")
// async function run() {
//     let javob = await maslahatBering(25);
//     console.log(javob);
//     javob = await maslahatBering(65);
//     console.log(javob);
//     javob = await maslahatBering(41);
//     console.log(javob);
//     javob = await maslahatBering(51);
//     console.log(javob);
// }
// run();
// console.log("Passe here 1")


// MITTASK A
function countLetter(letter, word) {
  let count = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      count++;
    }
  }

  return count;
}
console.log(countLetter("e", "engineer")); 