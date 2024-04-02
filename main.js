function findDogNames(string, names) {
    let found = false;
    for (let i = 0; i < names.length; i++) {
        if (string.toLowerCase().includes(names[i].toLowerCase())) {
            console.log("Matched " + names[i]);
            found = true;
        }
    }
    if (!found) {
        console.log("No Matches");
    }
}

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max", "HAS", "PuRple", "dog"];

findDogNames(dog_string, dog_names);

function replaceEvens(arr) {
    for (let i = arr.length - 1; i >= 0; i--) {
        if (i % 2 === 0) {
            arr.splice(i, 1, "even index");
        }
    }
    return arr;
}

// Example usage:
let arr = ["Max", "Baseball", "Reboot", "Goku", "Trucks", "Rodger"];
console.log(replaceEvens(arr)); // Output: ["even index", "Baseball", "even index", "Goku", "even index", "Rodger"]