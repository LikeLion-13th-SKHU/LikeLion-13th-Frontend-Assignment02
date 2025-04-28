// n5. color 라는 변수는 Red, Orange, Yellow, Green, Blue, Navy, Indigo가 요소로 있는 배열이다.  
// 변수 color에 Babyblue 와 Pink 를 배열 끝에 추가하고, Green 위치의 값을 Lightgreen 으로 바꾸어라. 이때 제거된 요소인 Green을 콘솔에 출력해야 한다. (요소 제거 후 출력)
// 변수 color를 출력하고, 변수의 길이도 출력해라.

function solution() {
    //color 라는 변수는 Red, Orange, Yellow, Green, Blue, Navy, Indigo가 요소로 있는 배열이다.  
        let color = ["Red", "Orange", "Yellow", "Green", "Blue", "Navy", "Indigo"];
    
    //이때 제거된 요소인 Green을 콘솔에 출력해야 한다. (요소 제거 후 출력)
        const greenIndex = color.indexOf("Green");
    
        if (greenIndex !== -1) {
            const removedColor = color.splice(greenIndex, 1)[0]; 
            console.log("Removed color: " + removedColor); 
        }
    
    //Green 위치의 값을 Lightgreen 으로 바꾸어라
        color[greenIndex] = "Lightgreen";
    
    //// 변수 color에 Babyblue 와 Pink 를 배열 끝에 추가
        color.push("Babyblue", "Pink"); 
    
    }
    
    // 변수 color를 출력하고, 변수의 길이도 출력해라.
    solution("color: ", color);
    solution("Length: " + color.length)
    