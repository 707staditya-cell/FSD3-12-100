import{EventEmitter} from "node:events";

const login = (name) => {
    console.log(`${name} logged in`);
};

const start =() => {
    console.log("System starts");
};
const working = (name) => {
  console.log(`${name} add items to cart`);
};
const checkout =(name) => {
console.log(`${name} logged out`);
};

//login("Aditya Singh");
//start();
//working("Aditya Singh")
//checkout("Aditya Singh")

const task = new EventEmitter();
task.once("greet" , start);
task.on("greet" , login);
task.on("greet" , working);
task.on("greet" , checkout);
task.once("exit" , () => {
    console.log("System shutting down");
});

task.emit("greet", "Aditya Singh");
task.emit("greet", "Akshat Gupta");
task.emit("greet", "Aditya Kasaudhan");
task.emit("exit");