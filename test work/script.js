'use strict';

// 1) Переберите вложенный обьект. Выведите на экран ключи и значения обьекта.
// const obj = {
//     name: 'Lia',
//     age:20,
//     city: "Moscow",
//     hobby: {
//         hobby1: "Books",
//         hobby2: "Travel",
//         hobby3: "Art"
//     }
// };
// for (let item in obj){
//     if (typeof obj[item] == "object"){
//         for (let newItem in obj[item]){
//             console.log(`${newItem} является ключом объекта ${obj[item][newItem]}`)
//         }
//     } else {
//         console.log(`${item} является ключом объекта ${obj[item]}`)
//     }
// }



// 2)Переберите вложенный массив. Выведите на экран значения массива.
// let arr = [['banana', 2, 3, false, 5], [6, 7, 8], ['56', 10]];
// const task = () => {
//     for(let i = 0; i < arr.length; i++){
//             console.log(`Текущий элемент главного массива [${arr[i]}]`);
//     }
//     for(let j = 0; j < arr.length; j++){
//             console.log(`Текущий элемент вложенного массива ${arr[j]}`)
//         }
// };
// console.log(task());



// 3) Дан массив с числами. Используя метод map к каждому элементу массива добавьте 20 и запишите результат в новый массив. Выведите в консоли новый массив
// const arr = [2, 4, 6, 8, 10, 15];
// const result = arr.map((element) => {
//     return element + 20
// });
// console.log(result);



// 4)создайте конструктор обьектов для ноутбуков. Свойства: модель, размер, озу, ssd, hdd, видеокарта, цвет, год выпуска и цена.
// Инкапсулируйте цену и год выпуска. Напишите метод getPrice2010 который выводит цену только ноутбуков выше 2010 года выпуска.
// function Laptop(model, size, ram, ssd, hdd, graphics, color, year, price) {
//     this.laptopModel = model;
//     this.laptopSize = size;
//     this.laptopRam = ram;
//     this.laptopSsd = ssd;
//     this.laptopHdd = hdd;
//     this.laptopGraphics = graphics;
//     this.laptopColor = color;
//     let laptopYear = year;
//     let laptopPrice = price;
//     this.getPrice2010 = function () {
//         console.log(`${model} - (${size}). RAM = ${ram}, HDD = ${hdd}, SSD = ${ssd}, graphics card = ${graphics}. color: ${color}. Год производства: ${year} [${price}] `);
//         if (year > 2010){
//             return laptopPrice
//         } else {
//             console.log('Эта функция чувствует отвращение к старым ноутам ниже 2010 года')
//         }
//     }
// }
// const hyperUltraSuperMegaLaptop = new Laptop('Platinum','15.6','22GB','1TB','3TB','GeForce RTX4090','Dark','2050','$1000000');
// console.log(hyperUltraSuperMegaLaptop.getPrice2010());



// 5)Деструктурируйте обьект. Выведите все полученные переменные на консоль.
// const obj = {
//     name: 'Lia',
//     age:20,
//     city: "Moscow",
//     hobby: {
//         hobby1: "Books",
//         hobby2: "Travel",
//         hobby3: "Art"
//     }
// };
// let {name, age, city, hobby:{hobby1,hobby2,hobby3}} = obj;
// console.log(`Name - ${name}`);
// console.log(`Age - ${age}`);
// console.log(`Living city - ${city}`);
// console.log(`Hobby - ${hobby1}, ${hobby2}, ${hobby3}.`);