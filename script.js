console.log("1dan 25gacha bogan toq sonlar:")
for (let i = 1; i <= 25; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("1dan 10gacha bogan sonlani kubi:")
for (let a1 = 1; a1 <= 10; a1++) {
  console.log(a1 ** 3);
}

console.log("1dan n gacha bogan sonlani ko'paytmasi:")
let n=Number(prompt("n ni kiriting:"))
let kopaytma = 1;

for (let i1 = 1; i1 <= n; i1++) {
  kopaytma *= i1;
}

console.log(kopaytma);
console.log("1dan 100gacha kamayish tartibida:")
for (let i2 = 100; i2 >= 1; i2--) {
  console.log(i2);
}
console.log("1dan 100gacha 3ga karrali sonlar:")
for (let i3 = 1; i3 <= 100; i3++) {
  if (i3 % 3 === 0) {
    console.log(i3);
  }
}
console.log("n sonigacha bogan sonlar yig'indisi")
let n3 =Number(prompt("sonni kiriting:"))
let yigindi = 0;

for (let i4 = 1; i4 <= n3; i4++) {
  yigindi += i4;
}

console.log(yigindi);

let kun=Number(prompt("kunni kiriting:"))

switch (kun) {
  case 1: console.log("Dushanba"); break;
  case 2: console.log("Seshanba"); break;
  case 3: console.log("Chorshanba"); break;
  case 4: console.log("Payshanba"); break;
  case 5: console.log("Juma"); break;
  case 6: console.log("Shanba"); break;
  case 7: console.log("Yakshanba"); break;
  default: console.log("Noto'g'ri son");
}

let oy=Number(prompt("oyni kiriting:"))

switch (oy) {
  case 1: console.log("Yanvar"); break;
  case 2: console.log("Fevral"); break;
  case 3: console.log("Mart"); break;
  case 4: console.log("Aprel"); break;
  case 5: console.log("May"); break;
  case 6: console.log("Iyun"); break;
  case 7: console.log("Iyul"); break;
  case 8: console.log("Avgust"); break;
  case 9: console.log("Sentabr"); break;
  case 10: console.log("Oktabr"); break;
  case 11: console.log("Noyabr"); break;
  case 12: console.log("Dekabr"); break;
  default: console.log("Noto'g'ri oy");
}

let baho=Number(prompt("bahoni kiriting:"))

switch (baho) {
  case 1: console.log("Yomon"); break;
  case 2: console.log("Qoniqarsiz"); break;
  case 3: console.log("Qoniqarli"); break;
  case 4: console.log("Yaxshi"); break;
  case 5: console.log("A'lo"); break;
  default: console.log("Noto'g'ri baho");
}