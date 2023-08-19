var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
console.log("I am ajmat kathat");
// @ts-ignore
var x = 45;
function ajmat(a, b) {
    return a + b;
}
console.log(ajmat(9, 8));
var str1 = "ajmat";
var str2 = "kathat";
var ans = str1.localeCompare(str2);
console.log(ans);
var kathat = "factual duniya";
var price = 500;
console.log("The product ".concat(kathat, " is priced at ").concat(price));
function isDivisibleBy4And8(a) {
    if (a % 4 == 0 && a % 8 == 0)
        return true;
    else
        return false;
}
console.log(isDivisibleBy4And8(20));
// let z:bigint = 343434343434344343n
// console.log(z)
// object defination in TS:
var person = {
    name: 'ajmat',
    age: 19,
    address: {
        city: "beawar",
        village: "JKB"
    }
};
var aslam = {
    name: "ajmat",
    age: 19,
    tech_stack: "MERN STACK",
    dsa: true
};
var prem = {
    name: "prem",
    age: 19,
    tech_stack: "android developer"
};
console.log(aslam);
console.log(prem);
// enum in ts:
// if you do not provide value  for the enum member then it will provide 0, 1, 2... automatically
var Roles;
(function (Roles) {
    Roles["user"] = "user";
    Roles["admin"] = "admin";
})(Roles || (Roles = {}));
var mohit = {
    email: "dkjfkdjfj",
    password: "skdfjdlj",
    role: Roles.admin
};
var user = {
    name: "ajmat",
    age: 19
};
var place = {
    city: "Jaipur",
    country: "India"
};
var createProfile = function (user, location) {
    // return `The name of user is ${user.name} with age ${user.age} and location details are ${location.city} from the country ${location.country}`
    return __assign(__assign({}, user), location);
};
var ajmatDetails = createProfile(user, place);
console.log(ajmatDetails);
var bio = {
    name: "ajmat",
    age: 24,
    city: 'jaipur',
    state: "rajasthan"
};
// typeof guards:
var favHobbies = function (hobby) {
    if (typeof hobby === "string" && Array.isArray(hobby)) {
        return hobby.map(function (hob) { console.log(hob); });
    }
    else
        console.log(hobby);
};
var answer = favHobbies(["cricket", "football"]);
// getters and setters in TS:
var Persons = /** @class */ (function () {
    function Persons(name, hobbies) {
        this.name = name;
        this.hobbies = hobbies;
    }
    Object.defineProperty(Persons.prototype, "age", {
        // getter:
        get: function () {
            if (this._age === undefined)
                throw new Error("age is not defined");
            else
                return this._age;
        },
        // setter:
        set: function (age) {
            if (age > 0 && age < 120) {
                this._age = age;
            }
            else
                throw new Error("age is not valid");
        },
        enumerable: false,
        configurable: true
    });
    Persons.prototype.introduce = function () {
        return "Hi I am ".concat(this.name, " and my age is  ").concat(this._age, " and I love ").concat(this.hobbies.join(","));
    };
    return Persons;
}());
var persons1 = new Persons("ajmat", ["reading", "writing"]);
persons1.age = 40; // calling setter
console.log(persons1.age); // calling getter
console.log(persons1.introduce());
// Bank account balance problem:
var BankAccount = /** @class */ (function () {
    function BankAccount() {
        this._balance = 0;
    }
    Object.defineProperty(BankAccount.prototype, "balance", {
        get: function () {
            return this._balance;
        },
        set: function (balance) {
            if (balance < 0)
                throw new Error("balance not valid");
            else
                this._balance = balance;
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
var myAccount = new BankAccount();
myAccount.balance = 5000;
console.log(myAccount.balance);
