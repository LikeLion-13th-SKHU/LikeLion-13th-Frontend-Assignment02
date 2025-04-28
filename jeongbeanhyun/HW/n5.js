function solution() {
    let color = ["Red", "Orange", "Yellow", "Green", "Blue", "Navy", "Indigo"];
    color.push("BabyBlue");
    color.push("Pink");

    let removed = color.splice(3, 1, "LightGreen");

    console.log(removed[0]);
    console.log(color);
    console.log(color.length);
}

solution();