// Створити та описати сутності Багатоквартирного будинку, квартири, мешканця.
// Додати можливість створювати нові будинки на певну кількість квартир.
// Не обмежувати кількість мешканців у квартирі



class Person {
    name;
    gender;

    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    }

    getFullInfo() {
        return `${this.name} (${this.gender})`
    }
}



class Flat {
    residents = [];
    heating = 'central';
    walls = 'brick';
    renovation = 'new';

    addPerson(person) {
        this.residents.push(person);
    }

    showResidents() {
        console.log('Residents of this flat:');
        console.warn(this.residents);
    }
}


class House {
    flatsMax;
    flatsOccupied = [];
    location = 'center';
    parking = 'yes';
    floors = 6;

    constructor(flatsMax) {
        this.flatsMax = flatsMax;
    }

    addFlat(flat) {

        if (this.flatsOccupied.length < this.flatsMax) {
            this.flatsOccupied.push(flat);
            return this.flatsOccupied;
        }

        return console.warn('house is full');
    }

    showOccupiedFlats() {
        console.log(this.flatsOccupied);
    }
}



console.log('=======persons========');

const lena = new Person('Olena', 'female');
console.log(lena.getFullInfo());

const boris = new Person('Boris', 'male');
console.log(boris.getFullInfo());

const anna = new Person('Anna', 'female');
console.log(anna.getFullInfo());

const petro = new Person('Petro', 'male');;
console.log(petro.getFullInfo());

const vlad = new Person('Vlad', 'male');;
console.log(vlad.getFullInfo());



console.log('\n\n======flats=======');

const twoRoomFlat = new Flat();
// console.log(twoRoomFlat);

twoRoomFlat.addPerson(boris);
twoRoomFlat.addPerson(anna);
twoRoomFlat.showResidents();


const threeRoomFlat = new Flat();

threeRoomFlat.addPerson(vlad);
threeRoomFlat.addPerson(lena);
threeRoomFlat.addPerson(petro);
threeRoomFlat.showResidents();


const flat1 = new Flat();
const flat2 = new Flat();
const flat3 = new Flat();
const flat4 = new Flat();
const flat5 = new Flat();
const flat6 = new Flat();


console.log('\n\n======house=======');

const isSmallHouse = new House(5);
// console.log(isSmallHouse);
const isBigHouse = new House(8);

isSmallHouse.addFlat(threeRoomFlat);
isSmallHouse.addFlat(twoRoomFlat);
isSmallHouse.addFlat(flat1);
isSmallHouse.addFlat(flat2);
isSmallHouse.addFlat(flat3);

isSmallHouse.showOccupiedFlats();

isSmallHouse.addFlat(flat4);


























// class House {

//     constructor(flatsOccupied, floors, resients) {
//         this.flatsAll = 30;
//         this.floors = floors;
//         this.resients = resients;
//         this.flatsOccupied = flatsOccupied;
//     }

//     newFlatOccupied() {
//         if (this.flatsOccupied >= this.flatsAll) {
//             console.warn('the house is full');
//             return;
//         }

//         this.flatsOccupied++;
//         this.resients++;
//         return this;
//     }

//     get flats() {
//         if ((this.flatsAll - this.flatsOccupied) <= 0) {
//             return 'no free flats';
//         }

//         return `now ${this.flatsAll - this.flatsOccupied} flats are free`
//     }
// }

// const house1 = new House(25, 9, 44);
// console.warn(house1);
// console.log(house1.flats);

// house1.newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied();
// console.log(house1);
// console.log(house1.flats);

// house1.newFlatOccupied();
// house1.newFlatOccupied();
// house1.newFlatOccupied();
// console.log(house1);
// console.log('-----------');


// const house2 = new House(40, 12, 100);
// console.log(house2);
// house2.newFlatOccupied();
// console.log(house2);
// console.log('-----------');


// const house3 = new House(10, 5, 22);
// console.log(house3);
// console.log(house3.flats);
// house3.newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied().newFlatOccupied();
// console.log(house3);
// console.log(house3.flats);







