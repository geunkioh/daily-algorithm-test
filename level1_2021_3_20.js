//자연수 뒤집어 배열로 만들기
//내장함수 o
function solution(n) {
    const arr =`${n}`.split('');
    let answer = [];
    for(let i =0; i<arr.length;i++){
        answer.push(parseInt(arr[i]))
    }
    const reverse = answer.reverse();
    return reverse;
}

// 내장함수 x
function solution(n) {
    const arr =`${n}`;
    let answer = [];
    for(let i=arr.length-1; i>=0; i--){
        answer.push(arr[i]*1)
    }
    return answer;
}
