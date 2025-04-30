// n5. color 라는 변수는 Red, Orange, Yellow, Green, Blue, Navy, Indigo가 요소로 있는 배열이다.  
// 변수 color에 Babyblue 와 Pink 를 배열 끝에 추가하고, Green 위치의 값을 Lightgreen 으로 바꾸어라. 이때 제거된 요소인 Green을 콘솔에 출력해야 한다. (요소 제거 후 출력)
// 변수 color를 출력하고, 변수의 길이도 출력해라. -> 문제제

function solution() {
    //color 라는 변수는 Red, Orange, Yellow, Green, Blue, Navy, Indigo가 요소로 있는 배열이다.  
        let color = ["Red", "Orange", "Yellow", "Green", "Blue", "Navy", "Indigo"];
    
    //이때 제거된 요소인 Green을 콘솔에 출력, 이때 제거된 요소인 Green을 콘솔에 출력해야 한다. (요소 제거 후 출력)
        const greenIndex = color.indexOf("Green");
    
        //Green 위치의 값을 Lightgreen 으로 바꾸어라.
        // 변수 color를 출력하고, 변수의 길이도 출력해라.
        if (greenIndex !== -1) {
            const removedElements = color.splice(greenIndex, 1,'Lightgreen');
            console.log("Removed color: " + removedElements[0]); 
        }
        // 변수 color에 Babyblue 와 Pink 를 배열 끝에 추가
        color.push("Babyblue","Pink");
        // 수정된 color 배열을 반환
        return color;
    
    }
    let color=solution();
    console.log("color:"+color);
    console.log('length: '+color.length);