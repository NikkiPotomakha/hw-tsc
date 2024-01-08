//let userName = "Veronika";

//userName = "Veronika";
//userName = 28;

//let UserAge = 28;
//let isValid = true;

//string, number, boolean

let userID: string | number = "abc1";
userID = "123";
// userID = true;

//let user: object;

type User = {
  name: string;
  age: number;
  isAdmin: boolean;
  id: string | number; // this simbol '|' means or;
}; // So this method is vailable for shape in ts;
//user = "Veronika"; - it's error, cause its not an object;

let user: User;
// Attantion! Change this symbol to'=' on ':' from JavaScript to this TypeScript

user = {
  name: "Veronika",
  age: 28,
  isAdmin: true,
  id: "abc", // 123
};

//user = {};

//let hobbies: Array<string>;
let hobbies: string[]; // number[], boolean[];

// {name: string; age: number}[]

hobbies = ["Sports", "Cooking", "Reading"];
//hobbies = [1,2,3];

function add(a: number, b: number) {
  const result = a + b;
  return result;
}

type AddFn = (a: number, b: number) => number; // super important feature which use a lot;

function calculate(a: number, b: number, calcFn: AddFn) {
  calcFn(a, b);
}
calculate(2, 5, add);

// Popular way for defining object types

interface Credencials {
  password: string;
  email: string;
}

let creds: Credencials;

creds = {
  password: "abc",
  email: "test@gmail.com",
};

// Interface and Custom Type
// class AuthCredentials implements Credentials {
//   password: string;
//   email: string;
//   userName: string;
// }

// function login(credentials: Credentials) {}
// login(new AuthCredentials()); //valid

// Merging Types

// type Admin = {
//  permission: string[];
// };
// type AppUser = {
//   userName: string;
// };
// type AppAdmin = Admin & AppUser;

// let admin: AppAdmin;

// admin = {
//   permission: ["login"],
//   userName: "Veronika",
// };

interface Admin {
  permission: string[];
}
interface AppUser {
  userName: string;
}
interface AppAdmin extends Admin, AppUser {}
let admin: AppAdmin;
admin = {
  permission: ["login"],
  userName: "Veronika",
};
// Literal Types
type Role = "admin" | "user" | "editor";

let role: Role; // 'admin', 'user', 'editor'

role: "admin";
role: "user";
role: "editor";
// role: "abc";

// Adding Type Guards
function PerformAction(action: string, role: Role) {
  if (role === "admin" && typeof action === "string") {
    //...
  }
}
let roles: Array<Role>;
roles = ["admin", "editor"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: [],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U) {
  return {
    ...a,
    ...b,
  };
}

const newUser = merge({ name: "Veronika" }, { age: 28 });
