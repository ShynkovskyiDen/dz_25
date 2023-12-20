class person {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
}

class Apartment {
    residents = [];

    addResident (resident) {
        this.residents.push(resident);
    }
}

class House {
    constructor(maxFlats) {
        this.flats = [];
        this.maxFlats = maxFlats;
    }

    addFlats (flat) {
        if(this.flats.length >= this.maxFlats) {
            console.log(`Перевищена можлива кількість квартир`);
        } else {
            this.flats.push(flat);
        }
    }
}

const person1 = new person('Denis', 'male');
const person2 = new person('Aleksey', 'male');
const person3 = new person('Darina', 'female');

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(person1);
apartment2.addResident(person2);
apartment3.addResident(person3);

const house1 = new House(3);

house1.addFlats(apartment1);
house1.addFlats(apartment2);
house1.addFlats(apartment3);

console.log(house1);