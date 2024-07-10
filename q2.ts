// const axios = require("axios");
import axios from "axios";
import {resourceUsage} from "process";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    const A = await axios.get("https://jsonplaceholder.typicode.com/todos/" + todoId);
    const B = A.data;
    const C = await axios.get("https://jsonplaceholder.typicode.com/users/" + B.userId);
    return {
      owner: C.data.name,
      title: B.title,
      completed:  B.completed
    };
  }
  catch (err) {
    return  "INVALID TODO ID";
  }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;