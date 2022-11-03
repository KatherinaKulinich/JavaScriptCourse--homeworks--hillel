/* . Створити клас Людина
властивості
імʼя
вік
методи
конструктор, який приймає два параметри: імʼя та вік
метод, який виводить у консоль інформацію про людину

2. клас Автомобіль
властивості
марка, модель, рік виписку, номерний знак (або на Ваш розсуд)
власник
методи
конструктор, який приймає чотитри параметри (тобто, всі окрім власника): марка, модель, рік виписку, номерний знак
присвоїти власника - метод повинен приймати екземпляр класу Людина, та зберігати екземпляр класу Людина у відповідному полі, якщо вік більше 18, інакше виводити у консоль відповідне повідомлення
метод, який виводить у консоль інформацію про автомобіль та викликає метод виводу інформації класу Людина для виведення інформації про власника


в якості демонстраціїї створити:
декілька екземплярів класу Людина
декілька екземплярів класу Автомобіль
присвоїти власників автомобілям */



class Person {
    name;
    age;

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

   getHumanInfo() {
        console.log(`${this.name} is ${this.age} years old`);
    }
}

const valya = new Person('Valya', 39);
valya.getHumanInfo();

const kate = new Person('Kate', 27);
kate.getHumanInfo();

const petya = new Person('Petya', 54);
petya.getHumanInfo();

const masha = new Person('Masha', 17);
masha.getHumanInfo();


console.log('-----------------');



class Car {
    brand;
    model;
    year;
    color;
    fuel;
    owner;

    constructor(brand, model, year, color, fuel) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.fuel = fuel;
    }
    
    addOwner(person) {
        
        if (Number(person.age) < 18) {
            this.owner = '---';
            console.warn(person.name, ': can not be the owner of a car!');
            return;
        }
        
        this.owner = person;
    }

    getInfoCar () {

        console.log(`
        Car brand: ${this.brand}, 
        model: '${this.model}', 
        production year: '${this.year}', 
        color: '${this.color}', 
        fuel: '${this.fuel}'`);

        
        if (Number(this.owner.age) > 18) {
            console.log('owner:');
            this.owner.getHumanInfo();
            return;
        }
        
        console.warn('no owner');
    }
}

const mazda = new Car('mazda', '6', '2003', 'greey', 'diesel');
mazda.addOwner(kate);
mazda.getInfoCar();

console.log('\n\n');

const toyota = new Car('toyota', 'yaris', '2010', 'red', 'petrol');
toyota.addOwner(masha);
toyota.getInfoCar();
console.warn(toyota);

console.log('\n\n');

const honda = new Car('honda', 'civic', '2014', 'black', 'gas');
honda.addOwner(petya);
honda.getInfoCar();

console.log('\n\n');

const bmw = new Car('bmw', 'm-5', '2020', 'blue', 'diesel');
bmw.addOwner(valya);
bmw.getInfoCar();
























// (Number(this.owner.age) > 18) ? this.owner.getHumanInfo() : console.log('owner: -----');