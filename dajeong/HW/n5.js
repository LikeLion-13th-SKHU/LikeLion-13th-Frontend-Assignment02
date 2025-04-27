console.log("n5)");

let color = [
    "Red", "Orange", "Yellow", "Green", "Blue", "Navy", "Indigo"
]

color.push("BabyBlue");
color.push("Pink");

let removed = color.splice(color.indexOf("Green"), 1, "LightGreen");

console.log(removed);

console.log("color 배열: "+color);
console.log("color 길이: "+color.length);