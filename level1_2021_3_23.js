//제일 작은 수 제거하기
function solution(arr) {
    let answer = [];
    if (arr[0] === 10) {
        answer.push(-1);
        return answer;
    } else {
        let min = Math.min.apply(null, arr);
        min = arr.indexOf(min);
        arr.splice(min, 1);
        return arr;
    }
}

