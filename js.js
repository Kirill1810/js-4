//1

const nast = prompt("як справи"); 
const day = prompt("як день");
const all = Boolean(nast) === true && Boolean(day) === true;

console.log(all)

if (all) {
  alert(`yes`);
}
 else  {
  alert(`no`);
}




//2

const num1 = prompt("число");
const num2 = prompt("2число");
const num = Number(num1) + Number(num2);
console.log(num);
if (num > 10) {
  alert(`most 10`);
} else {
  alert(`lower 10`);
}

//3

const text = prompt("напишіть JvaScipT");
const textSeaker = text.indexOf("JavaScript");

console.log(textSeaker);

if (textSeaker) {
  alert(`no JavaScript`);
} else {
  alert(`true JavaScript`);
}





// 4

const numb = prompt("ведіть число від 10 до 20");
const result = numb > 10 && numb < 20;

console.log(result);

if (result) {
  alert(`true 10 too 20`);
} else {
  alert(`falls 10 too 20`);
}


//5

const Nam = prompt("Імя");

const Email = prompt("ваша пошта ");

const Password = prompt("ваш пароль");



if(Nam.length >= 3 && Email.includes("@") && Email.includes(".") && Password.length >= 6) {
    alert("приемного користування")
} else {
    alert("ні")
}
