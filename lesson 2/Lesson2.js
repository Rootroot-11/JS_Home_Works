// 1. --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
let mas1_1 = [5, 7, -10, 35, -100];
let mas1_2 = ['asd', 'fgh', 'jkl', 'hello', 'world'];
let mas1_3 = ['hello', 125, -7, true, false];
console.log(mas1_1);
console.log(mas1_2);
console.log(mas1_3);

// // 2. -- Створити пустий масив.
// // Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
console.log('------------');
document.write('<br>--------<br>');

let mas2 = [];
mas2[0] = 'hello';
mas2[1] = false;
mas2[5] = -100;
mas2[10] = 'asd';
mas2[99] = true;
console.log(mas2);
//
// // 3. - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// // - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// // - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//

console.log('--------');
document.write('<br>-------------<br>');

let mas3 = ['asd', 'fgh', 'jkl', 'hello', 'world', 'qwe', 'rty', 'uio', "zxc", 'vbnm', 'asd', 'fgh', 'jkl', 'hello', 'world', 'qwe', 'rty', 'uio', "zxc", 'vbnm'];
// for (i = 0, i < mas3_1.length, i++) {
for (i = 0; i < 10; i++) {
    document.write(`<div>${mas3[i]}</div>`);
}
for (i = 0; i < 10; i++) {
    document.write(`<div>${i} ${mas3[i]}</div>`);
}
for (i = 0; i < 20; i++) {
    document.write(`<h1>${mas3[i]}</h1>`);
}
for (i = 0; i < 20; i++) {
    document.write(`<h1>${i} ${mas3[i]}</h1>`);
}
//
// // 4. - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
// console.log('--------');
// document.write('<br>-------------<br>');
// // -  Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
// let mas4_1 = [15, -2, 3, 7, 44, -88, 3, 7, 48, 97];
// for (const mas of mas4_1) {
//     console.log(mas);
// }
// // - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
// let mas4_2 = ['asd', 'fgh', 'jkl', 'hello', 'world', 'qwe', 'rty', 'uio', "zxc", 'vbnm'];
// for (const mas of mas4_2) {
//     console.log(mas);
// }
// // - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
// let mas4_3 = ['hello', 125, -7, true, false, 'asd', '5', false, 'world', false];
// for (const mas of mas4_3) {
//     console.log(mas);
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
// document.write('<br>----boolean:');
// for (let i = 0; i < mas4_3.length; i++) {
//     const mas43Element = mas4_3[i];
//     if (typeof mas43Element === 'boolean') {
//         document.write('<br>' + mas43Element);
//     }
// }
// // - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
// document.write('<br>----number:');
// for (let i = 0; i < mas4_3.length; i++) {
//     const mas43Element = mas4_3[i];
//     if (typeof mas43Element === 'number') {
//         document.write('<br>' + mas43Element);
//     }
// }
// // - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
// document.write('<br>----string:');
// for (let i = 0; i < mas4_3.length; i++) {
//     const mas43Element = mas4_3[i];
//     if (typeof mas43Element === 'string') {
//         document.write('<br>' + mas43Element);
//     }
// }


// // 5. - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
//

// console.log('-----------');
// document.write('<br>------------<br>');
//
// // - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
// let mas5_1 = [];
// mas5_1[0] = 'hello';
// mas5_1[1] = false;
// mas5_1[2] = -100;
// mas5_1[3] = 'asd';
// mas5_1[4] = true;
// mas5_1[5] = 125;
// mas5_1[6] = false;
// mas5_1[7] = '5';
// mas5_1[8] = 'world';
// mas5_1[9] = true;
// console.log(mas5_1);
// for (const mas51Element of mas5_1) {
//     console.log(mas51Element);
// }

// // - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// console.log('--------');
// document.write('<br>-------------<br>');
// for (let i = 0; i < 10; i++) {
//     console.log(i);
//     document.write(i);
// }

// // - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
// console.log('--------');
// document.write('<br>-------------<br>');
// for (let i = 0; i < 100; i++) {
//     console.log(i);
//     document.write(i);
// }

// // - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
// console.log('--------');
// document.write('<br>-------------<br>');
// for (let i = 0; i < 100; i = i + 2) {
//     console.log(i);
//     document.write(i);
// }

// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
// // - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
console.log('--------');
document.write('<br>-------------<br>');
for (let i = 0; i < 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
        document.write(i);
    }
}

// // - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
console.log('--------');
document.write('<br>-------------<br>');
for (let i = 0; i < 100; i++) {
    if (i % 2 === 1) {
        console.log(i);
        document.write(i);
    }
}

// // - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)
// console.log('--------');
// document.write('<br>-------------<br>');
// console.log(0 + 'm ' + 0 + 's');
// for (let i = 0; i <2; i++) {
//     for (let j = 1; j <= 60; j++) {
//         if (j == 60) {
//             console.log((i+1) + 'm ' + 0 + 's');
//         }else {
//             console.log(i + 'm ' + j + 's');
//         }
//      }
// }


// // - Відтворити роботу годинника, відрахувавши  2 години 20 хвилини (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
// console.log('--------');
// document.write('<br>-------------<br>');
// for (let i = 0; i <= 2; i++) {
//     for (let j = 0; j < 60; j++) {
//         if (i === 2 && j === 20) {
//             console.log(i + 'h ' + j + 'm ' + 0 + 's');
//             break;
//         }
//         for (let k = 0; k < 60; k++) {
//             // if (k <= 2 || k >= 58) {
//             if (k <= 1 || k >= 59) {
//                 console.log(i + 'h ' + j + 'm ' + k + 's');
//             } else if (k === 3) {
//                 console.log('--------');
//             }
//         }
//     }
// }
