function solution() {

    let color = ["Red", "Orange", "Yellow", "Green", "Blue", "Navy", "Indigo"];


    const greenIndex = color.indexOf("Green");


    if (greenIndex !== -1) {
        const removedColor = color.splice(greenIndex, 1)[0]; 
        console.log("Removed color: " + removedColor); 
    }


    color[greenIndex] = "Lightgreen";


    color.push("Babyblue", "Pink");


    console.log("Updated color array: ", color);

    console.log("Length of color array: " + color.length);
}


solution();
