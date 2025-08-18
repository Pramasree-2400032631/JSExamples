// let today = new Date();
// console.log("Date:",today);

// let students=["Pramasree","Anusree","Geetha"];
// students.push("Srivalli"); // add at end
// console.log(students);
// students.unshift("Joshiha"); // add at start
// console.log(students);
// students.splice(2,1,"Sai"); // Replce at index 2
// console.log(students);
// students.pop("Sai");
// console.log("Loopinng through students:");
// console.log(students);
// for (let student in students){
//     console.log(student);
// }

// console.log("While loop-Roll Numbers:");
// let rn = 101;
// while(rn<=103){
//     console.log("Roll No:",rn);
//     rn++;
// }

// console.log("Do..While loop - Hostel Floors:");
// let floor = 1;
// do{
//     console.log("Hostel Floor:",floor);
//     floor++;
// }while(floor <=3);


// console.log("Round 4.3:", Math.round(4.3));    // 4
// console.log("Ceil 4.1:", Math.ceil(4.1));      // 5
// console.log("Floor 4.9:", Math.floor(4.9));    // 4
// console.log("Truncate 4.9:", Math.trunc(4.9)); // 4
// console.log("Absolute of -25:", Math.abs(-25)); // 25
// console.log("2^3:", Math.pow(2, 3));           // 8
// console.log("Square root of 49:", Math.sqrt(49)); // 7

let studentMap = new Map();
studentMap.set("101",{name:"Pramasree",dept:"CSE"});
studentMap.set("102",{name:"Navya",dept:"CSE"});
studentMap.set("103",{name:"Spandana",dept:"CSE"});
console.log("Student 101:",studentMap.get("101"));

