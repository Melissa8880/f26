// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log("FizzBuzz");
//   } else if (i % 3 === 0) {
//     console.log("Fizz");
//   } else if (i % 5 === 0) {
//     console.log("Buzz");
//   } else {
//     console.log(i);
//   }
// }


// console.log("Student Score Calculator");
// console.log("========================");

// // let score = 55;

// // if (score < 60) {
// //     console.log("F");
// // }
// // else if (score < 70) {
// //     console.log("D");
// // }
// // else if (score < 80) {
// //     console.log("C");
// // }
// // else if (score < 90) {
// //     console.log("B");
// // }
// // else if (score <= 100) {
// //     console.log("A")
// // }

console.log("Array Calculator");
console.log("================");
x = [1, 2, 3, 4, 5, 6];
let sum = 0;

for (let i = 0; i < x.length; i++) {
    sum += x[i];
}

console.log(sum);