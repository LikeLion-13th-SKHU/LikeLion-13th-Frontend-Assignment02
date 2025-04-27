function solution() {
  let color = ['Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Navy', 'Indigo'];

  color.push('Babyblue', 'Pink');

  const removed = color.splice(3, 1, 'Lightgreen');

  console.log(removed[0]);
  console.log(color);
  console.log(color.length);
}

solution();
