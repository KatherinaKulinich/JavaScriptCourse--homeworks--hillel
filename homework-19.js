// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.
// Додати можливість створювати нові будинки на певну кількість квартир.
// Не обмежувати кількість мешканців у квартирі



console.log('=======persons========');

class Person {
    constructor(name, surname, age, job) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.job = job;
    }

    fullName() {
        return `${this.name} ${this.surname}`
    }
}

const lena = new Person('Olena', 'Ivanova', 30, 'teacher');
console.warn(lena);
console.log(lena.fullName());

const boris = new Person('Boris', 'Petrov', 28, 'manager');
console.warn(boris);
console.log(boris.fullName());

const anna = new Person('Anna', 'Kolesnik', 41, 'doctor');
console.warn(anna);
console.log(anna.fullName());


console.log('======flats=======');



class Flat {
    constructor(rooms, floor, persons) {
        this.rooms = rooms;
        this. floor = floor;
        this.persons = 0;
    }

    newPersonInFlat() {
        this.persons++;
        return this;
    }

    get descriptionFlat() {
        return `this flat on ${this.floor} floor with ${this.rooms} rooms, ${this.persons} persons live here`
    }
}

const flat1 = new Flat(2, 5, 3);

console.log(flat1);
console.warn(flat1.descriptionFlat);
flat1.newPersonInFlat().newPersonInFlat().newPersonInFlat();
console.log(flat1);
console.warn(flat1.descriptionFlat);
console.log('-----------');


const flat2 = new Flat(3, 2, 2);

console.log(flat2);
console.warn(flat2.descriptionFlat);
flat2.newPersonInFlat().newPersonInFlat().newPersonInFlat().newPersonInFlat().newPersonInFlat();
console.log(flat2);
console.warn(flat2.descriptionFlat);


console.log('======house=======');


class House {

    constructor(flatsOccupied, floors, resients) {
        this.flatsAll = 30;
        this.floors = floors;
        this.resients = resients;
        this.flatsOccupied = flatsOccupied;
    }

    newFlatOccupied() {
        if (this.flatsOccupied >= this.flatsAll) {
            console.warn('the house is full');
            return;
        }

        this.flatsOccupied++;
        this.resients++;
        return this;
    }

    get flats() {
        if ((this.flatsAll - this.flatsOccupied) <= 0) {
            return 'no free flats';
        }

        return `now ${this.flatsAll - this.flatsOccupied} flats are free`
    }
}

const house1 = new House(25, 9, 44);
console.warn(house1);
console.log(house1.flats);

house1.newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied();
console.log(house1);
console.log(house1.flats);

house1.newFlatOccupied();
house1.newFlatOccupied();
house1.newFlatOccupied();
console.log(house1);
console.log('-----------');


const house2 = new House(40, 12, 100);
console.log(house2);
house2.newFlatOccupied();
console.log(house2);
console.log('-----------');


const house3 = new House(10, 5, 22);
console.log(house3);
console.log(house3.flats);
house3.newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied();
console.log(house3);
console.log(house3.flats);











