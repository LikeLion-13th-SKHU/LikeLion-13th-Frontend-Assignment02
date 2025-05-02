let color = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Navy', 'Indigo'];

color.push('Babyblue', 'Pink');

let index = color.indexOf('Green');

let removed = color[index];
color[index] = 'Lightgreen';

console.log('제거된 요소:', removed);

console.log('변경된 color 배열:', color);

console.log('배열 길이:', color.length);