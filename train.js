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

// Shunday 2 parametrli function tuzing, hamda birinchi parametrdagi letterni ikkinchi parametrdagi sozdan qatnashga sonini return qilishi kerak boladi.
// MASALAN countLetter("e", "engineer") 3ni return qiladi.

// function countLetter(letter, word) {
//   let count = 0;

//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === letter) {
//       count++;
//     }
//   }

//   return count;
// }
// console.log(countLetter("e", "engineer")); 

// MITASK B

// Shunday, function tuzingki, bu function yagona parametrga ega bo'lib
// string tarkibidagi sonlar miqdorini qaytarsin

// Masalan: countDigits("ad2a54y79wet0sfgb9")
// Yuqoridagi string tarkibida 7 dona raqam qatnashganligi uchun, natija 7 qaytadi

// function raqamSoni(text){
//   let count = 0;

//   for(let i = 0; i < text.length; i++){
//     if(!isNaN(text[i]) && (text[i] !== " ")) {
//       count++;
//     }
//   }
//   return count
// }

// console.log(raqamSoni("ad2a54y79wet0sfgb9"));

// TASK-C

// Shop nomli class tuzing, va bu class 3 xill parametr qabul qilsin.
// Hamda classning quyidagdek 3'ta metodi bo'lsin:

// 1) qoldiq
// 2) sotish
// 3) qabul

// Har bir metod ishga tushgan vaqtda log qilinsin

// MASALAN:
// const shop = new Shop(4, 5, 2)

// shop.qoldiq();
// natija qaytishi kerak: Hozir 20: 40'da 4'ta non, 5'ta lag'mon va 2'ta cola mavjud

// shop.sotish("non", 3); & shop.qabul("cola", 4); & shop.qoldiq();
// Natija qaytishi kerak: Hozir 20:50da 1ta non, 5ta lag'mon va 6ta cola mavjud!


class Shop {
  constructor(non, lagmon, cola) {
    this.non = non;
    this.lagmon = lagmon;
    this.cola = cola;
  }

  vaqt() {
    const now = new Date();
    const soat = now.getHours();
    const minut = now.getMinutes().toString().padStart(2, "0");
    return `${soat}:${minut}`;
  }

  qoldiq() {
    console.log(
      `Hozir ${this.vaqt()}da ${this.non}ta non, ${this.lagmon}ta lag'mon va ${this.cola}ta cola mavjud`
    );
  }

  sotish(mahsulot, son) {
    if (mahsulot === "non") this.non -= son;
    else if (mahsulot === "lagmon") this.lagmon -= son;
    else if (mahsulot === "cola") this.cola -= son;

    console.log(`${son}ta ${mahsulot} sotildi`);
  }

  qabul(mahsulot, son) {
    if (mahsulot === "non") this.non += son;
    else if (mahsulot === "lagmon") this.lagmon += son;
    else if (mahsulot === "cola") this.cola += son;

    console.log(`${son}ta ${mahsulot} qabul qilindi`);
  }
}

// ===== TEST =====
const shop = new Shop(4, 5, 2);

shop.qoldiq();
shop.sotish("non", 3);
shop.qabul("cola", 4);
shop.qoldiq();

// TASK D

// Ikkita parametra ega function tuzing, va functioning
// berilgan birinchi va ikkinchi parametr qiymatlari o'zaro to'liq
// mos kelsa true qiymat qaytarsin

// Masalan: checkContent("mitgroup", "gmtiprou");
// Yuqoridagi misolda birinchi va ikkinchi parametr qiymatli bir xil
// ya'ni bir xil harflar qatnashganligi uchun true qiymat qaytaradi.

function checkContent(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');

  return sorted1 === sorted2;
}

console.log(checkContent("mitgroup", "gmtiprou"));
console.log(checkContent("salom dunyo", "slmao uonyd"));

// TASK D

// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(str) {
  return str.split("").reverse().join("");
}

console.log(getReverse("hello")); // "olleh"
