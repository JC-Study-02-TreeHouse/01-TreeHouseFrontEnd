// Example 1
/*
const player1 = {
    name: 'Ashley',
    color: 'purple',
    isTurn: true,
    play: function(){
      if(this.isTurn) {
        return player1['name'] + ' is now playing!'
      }
    }
}
*/

//Class 1 - Object literals
/*
const fruits = ['apple', 'pear', 'strawberry'];

const ernie = {
	animal: 'dog',
	age: '1',
	breed: 'pug',
	bark: function () {
		console.log('Woof!');
	},
};

// console.log(ernie.age);
// console.log(ernie.breed);

// ernie.bark();

console.log(fruits[0]);

var prop = 'breed';
ernie[prop];

// this is to add or update an object literal
ernie.color = 'black';
console.log(ernie);
*/

//Class 2 - class
// constructor Method (make the first letter capital)
/*
class Pet {
	constructor(animal, age, breed, sound) {
		this.animal = animal;
		this.age = age;
		this.breed = breed;
		this.sound = sound;
	}

	speak() {
		console.log(this.sound);
	}
}

const ernie = new Pet('dog', 1, 'pug', 'woof');
const vera = new Pet('dog', 8, 'border', 'yap');

ernie.speak();
vera.speak();

console.log(ernie);
console.log(vera);
*/

//Class 3 - Getter & Setter

//Test Example of Getter
/*
class Student {
    constructor(gpa, credits){
        this.gpa = gpa;
        this.credits = credits;
    }

    stringGPA() {
        return this.gpa.toString();
    }


    get level() {
       if(this.credits <= 30) {
           return 'Freshmen';
        } else if((this.credits) >= 31 && (this.credits) <= 60) {
           return 'Sophomore';
        } else if((this.credits) >= 61 && (this.credits) <= 90) {
           return 'Junior';
        }  else if(this.credits > 90){
           return 'Senior'; 
        }
    }

}

const student = new Student(3.9);
*/
// Test Example of a setter
/*     set major(major) {
        this._major = major
        if (this.level !== 'Senior' && this.level !== 'Junior') {
            this._major = 'None'
        }
     }
*/

class Pet {
	constructor(animal, age, breed, sound) {
		this.animal = animal;
		this.age = age;
		this.breed = breed;
		this.sound = sound;
	}
	// getter
	get activity() {
		const today = new Date();
		const hour = today.getHours();

		if (hour > 8 && hour <= 20) {
			return 'playing';
		} else {
			return 'sleeping';
		}
	}

	get owner() {
		return this._owner;
	}

	set owner(owner) {
		this._owner = owner;
		console.log(`setter called: ${owner}`);
	}

	speak() {
		console.log(this.sound);
	}
}

class Owner {
	constructor(name, address) {
		this.name = name;
		this.address = address;
	}

	set phone(phone) {
		const phoneNorm = phone.replace(/[^0-9]/g, '');
		this._phone = phoneNorm;
	}

	get phone() {
		return this._phone;
	}
}

const ernie = new Pet('dog', 1, 'pug', 'woof');
console.log(ernie);
// notice how getter are not added tot he object itself
console.log(ernie.activity);

//ernie.owner = 'ashley';
ernie.owner = new Owner('just', '123 lane');
ernie.owner.phone = '+44 79506 64646';

console.log(ernie.owner);
console.log(ernie.owner.name);
console.log(ernie.owner.phone);
