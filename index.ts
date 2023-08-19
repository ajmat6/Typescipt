console.log("I am ajmat kathat")
// @ts-ignore
let x = 45;

function ajmat (a:number, b:number):number
{
    return a + b;
}

console.log(ajmat(9, 8))

let str1:string = "ajmat";
let str2:string = "kathat"

let ans:number = str1.localeCompare(str2)
console.log(ans)

let kathat: string = "factual duniya"
let price:number = 500

console.log(`The product ${kathat} is priced at ${price}`)

function isDivisibleBy4And8 (a:number):boolean
{
    if(a % 4 == 0 && a % 8 == 0) return true;
    else return false;
}

console.log(isDivisibleBy4And8(20))

// let z:bigint = 343434343434344343n
// console.log(z)

// object defination in TS:
const person: {
    name: string;
    age: number;
    address: {
        city: string;
        village: string
    }
} = {
    name: 'ajmat',
    age: 19,
    address: {
        city: "beawar",
        village: "JKB"
    }
}

// type alises:
type Student = {
    name: string;
    age: number;
    tech_stack: string
    dsa?: boolean
}

const aslam:Student = {
    name: "ajmat",
    age: 19,
    tech_stack: "MERN STACK",
    dsa: true
}

const prem:Student = {
    name: "prem",
    age: 19,
    tech_stack: "android developer"
}

console.log(aslam);
console.log(prem)

// enum in ts:
// if you do not provide value  for the enum member then it will provide 0, 1, 2... automatically
enum Roles {
    user = "user",
    admin = "admin"
}

type Login = {
    email: string;
    password: string;
    role: Roles
}

const mohit: Login = {
    email: "dkjfkdjfj",
    password: "skdfjdlj",
    role: Roles.admin
}

// union and intersection in ts:
type User = {
    name: string;
    age: number
}

type MyLocation = {
    city: string;
    country: string
}

type Whole = User & MyLocation

const user:User = {
    name: "ajmat",
    age: 19
}

const place:MyLocation = {
    city: "Jaipur",
    country: "India"
}

const createProfile = (user:User, location: MyLocation) : User & MyLocation => {
    // return `The name of user is ${user.name} with age ${user.age} and location details are ${location.city} from the country ${location.country}`
    return {...user, ...location}
}

const ajmatDetails: User & MyLocation = createProfile(user, place);
console.log(ajmatDetails)

// interfaces:
interface stud {
    name: string;
    age: number
}

interface studDetails {
    city: string;
    state: string
}

interface total extends stud, studDetails {} // inheriting interface properties

const bio: total = {
    name: "ajmat",
    age: 24,
    city: 'jaipur',
    state: "rajasthan"
}

// typeof guards:
const favHobbies = (hobby: string | string[]) => {
    if(typeof hobby === "string" && Array.isArray(hobby))
    {
        return hobby.map((hob) =>  {console.log(hob)})
    }

    else console.log(hobby)
}

const answer = favHobbies(["cricket", "football"])

// getters and setters in TS:
class Persons
{
    private _age: number | undefined;
    constructor(
        public name: string,
        protected hobbies: string[]
    ){}

    // setter:
    public set age (age:number)
    {
        if(age > 0 && age < 120)
        {
            this._age = age;
        }

        else throw new Error("age is not valid");
    }

    // getter:
    public get age()
    {
        if(this._age === undefined) throw new Error("age is not defined");
        else return this._age;
    }

    introduce():string {
        return `Hi I am ${this.name} and my age is  ${this._age} and I love ${this.hobbies.join(",")}`;
    }
}

const persons1: Persons = new Persons("ajmat", ["reading", "writing"]);
persons1.age = 40; // calling setter
console.log(persons1.age) // calling getter

console.log(persons1.introduce())

// Bank account balance problem:
class BankAccount 
{
    private _balance: number = 0;

    public set balance(balance: number)
    {
        if(balance < 0) throw new Error("balance not valid");
        else this._balance = balance;
    }

    public get balance()
    {
        return this._balance;
    }
}

const myAccount = new BankAccount();
myAccount.balance = 5000;
console.log(myAccount.balance)