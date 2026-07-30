//DOM -> Document Object Model
import { EventEmitter } from "events";

const button = new EventEmitter();

button.on("click", (uname) => {
  console.log(`button clicked by ${uname}`);
});
button.emit("click", "Aditya");
button.emit("click", "Ashi");
button.emit("click", "Akshat");
button.emit("click", "Kaju");