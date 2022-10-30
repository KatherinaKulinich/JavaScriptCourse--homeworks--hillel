/*Створити сутність людини:

ім'я
вік

Метод виведення даних */



/* Створити сутність автомобіля:

Характеристики автомобіля окремими властивостями

Методи:
Виведення на екран даних про цей автомобіль

Привласнення цього автомобіля власнику (записати в автомобіль об'єкт власника) */


class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

     get infoHuman() {
        return `His/her name is ${this.name} and he/she is ${this.age} y.o`
    }
}

const human1 = new Human('Valya', 39);
console.warn(human1);
console.log(human1.infoHuman);

const human2 = new Human('Kate', 27);
console.warn(human2);
console.log(human2.infoHuman);

const human3 = new Human('Petya', 54);
console.warn(human3);
console.log(human3.infoHuman);

console.log('-----------------');




class Car {
    constructor(brand, model, year, color, fuel, owner) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuel = fuel;
        this.owner = owner;
    }

     get infoCar () {
        return `This car is ${this.brand}, model ${this.model}, production year is ${this.year}, color is ${this.color}, fuel is ${this.fuel}, the owner is ${this.owner}`
    }
}

const car1 = new Car('mazda', '6', '2003', 'greey', 'diesel', human2);
console.warn(car1);
console.log(car1.infoCar);

const car2 = new Car('toyota', 'yaris', '2010', 'red', 'petrol', human1);
console.warn(car2);
console.log(car2.infoCar);

const car3 = new Car('honda', 'civic', '2014', 'black', 'gas', human3);
console.warn(car3);
console.log(car3.infoCar);