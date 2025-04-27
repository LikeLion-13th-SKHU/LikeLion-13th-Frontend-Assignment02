function solution() {
    let color = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Navy', 'Indigo'];

    color.push('Babyblue', 'Pink');
    let colorGreen = color.splice(3, 1, 'Lightgreen');
    console.log(colorGreen);


    console.log(color);
    console.log(color.length);
}

solution();