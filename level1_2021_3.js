//두 개 뽑아서 더하기
function solution(num) {
    let answer = [];
    for (let i = 0; i < num.length; i++) {
        const n1 = num[i]
        num.splice(i, 1);
        const arr = num
        for (let a = 0; a < arr.length; a++) {
            const sum = n1 + arr[a];
            if (-1 == answer.indexOf(sum)) {
                answer.push(sum)
                answer.sort(function (a, b) {
                    return a - b
                })
            }
        }
        num.splice(i, 0, n1);
    }
    return answer;
}