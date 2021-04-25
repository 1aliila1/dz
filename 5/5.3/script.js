// let str = 'Hello';
// console.log(str[str.length - 1]);
// console.log(str.length);

// let string = 'hElLo'
// for (let char of string) {
//     console.log(char);
// }

// console.log(string.toLowerCase());
// console.log(string.toUpperCase());

//задания строки 
// 1

// let str = 'вася';
// let newStr = str[0].toUpperCase() + str.slice(1);
// console.log(newStr);

// 2

// let str = 'buy Xxx now';
// function checkSpam(str) {
//     str = str.toLowerCase()
//     return str.includes('viagra') || str.includes('xxx')
// }
// console.log(checkSpam(str));

// 3

// let str = 'Вот, что мне хотелось бы сказать на эту тему:';
// function truncate(str, maxlength) {
//     if (str.length >= maxlength) {
//         newStr = str.substring(0, maxlength - 3) + '...';
//     } else {
//         newStr = str;
//     }
//     return newStr;
// }
// console.log(truncate(str, 20));

// 4

// str = '$120'
// function extractCurrencyValue(str) {
//     newStr = str.slice(1);
//     return newStr;
// }
// console.log(extractCurrencyValue(str));

// задания массивы

// 1

// let fruits = ["Яблоки", "Груша", "Апельсин"];

// // добавляем новое значение в "копию"
// let shoppingCart = fruits;
// shoppingCart.push("Банан");

// // что в fruits?
// alert( fruits.length ); // 4

// 2

// let styles = ['jazz', 'Bluz'];
// console.log(styles);
// styles.push('Rock-n-roll');
// console.log(styles);
// let sr = Math.floor(styles.length / 2);
// styles[sr] = 'Classic';
// console.log(styles);
// console.log(styles.shift());
// console.log(styles);
// styles.unshift('Rap', 'Reggi')
// console.log(styles);

// 3

// let arr = ["a", "b"];

// arr.push(function () {
//     console.log(this);
// })

// arr[2](); // array

// 4

// function sumInput() {
//     let arr = [];
//     while (true) {
//         value = prompt('введите слагаемое', 0);
//         if (value == null || value == '' || !isFinite(value)) break;
//         arr.push(+value);
//     }
//     let summ = 0;
//     for (let number of arr) {
//         summ += number
//     }
//     return summ
// }


// 5
// let arr = [-1, 3, 2, -7];
// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let value = 0;

//     for (let item of arr) {
//         value += item;
//         maxSum = Math.max(maxSum, value);
//         if (value < 0) value = 0;
//     }
//     return maxSum
// }
// console.log(getMaxSubSum(arr));