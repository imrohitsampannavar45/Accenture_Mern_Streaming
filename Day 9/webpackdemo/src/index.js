import D from "dates-in-js";
import { sum } from "./arithmetic";
let today = new D();
console.log(today.date);
console.log(today.day);
console.log(sum(10, 20));
