const obj1 = {};
console.dir(obj1);

const obj2 = new Object();
console.log(obj2);

const arr1 = [];
console.log(arr1);

const arr2 = new Array();
console.dir(arr2);


function User(name) {
    this.name = name;
    this.iAm = function () {
        console.log(`I am ${name}`);
    }
}

const user1 = new User("Nola");
user1.iAm();

const user2 = new User("Nyuszi");
user2.iAm();
// user3 ... user1000
// nem éri meg annyiszor lefuttatni a kódot, ahány példány van => érdemes nem példány szintű metódusokat csinálni

// ez nem példány szintű
User.prototype.iAm2 = function () { // sohase használj arrofunctiont metódusként, mert a this máshova mutat!
    console.log(`I am ${this.name} 2`);
}

const user3 = new User("Bigyula");
console.dir(user3);
user3.iAm2();

const userProto = Object.getPrototypeOf(user3); // ez a standard lekérése a prototypenap
// const userProto = user3.__proto__; // nem standard lekérése a prototypenak
console.log(userProto);

function CustomUser(name, role){ // kb olyan mint a class öröklődés
    User.call(this, name);
    this.role = role;
}

const user4 = new CustomUser("Karcsi", "lakatos");
console.log(user4);


//jsben minden prototype, a classok is cugar codingok