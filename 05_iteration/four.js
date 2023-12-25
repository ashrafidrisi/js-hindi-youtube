
const obj = {
    js : "javascript",
    cpp : "c++",
    py : "python",
    db : "batabase"
}
// for (const key in obj) {
//     console.log(key);
// }

// js
// cpp
// py
// db

// for (const key in obj) {
//         console.log(`${key} shortcut for ${obj[key]}`);
//     }

//     js shortcut for javascript
//     cpp shortcut for c++
//     py shortcut for python
//     db shortcut for batabase

  const myArray = ["js","db","cpp","html"]
   for (const key in myArray) {
     console.log(`${key}  and value  ${myArray[key]}`);
   }