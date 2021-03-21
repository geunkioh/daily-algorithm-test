//자연수 뒤집어 배열로 만들기
function solution(n) {
    const arr =`${n}`.split('');
    let answer = [];
    for(let i =0; i<arr.length;i++){
        answer.push(parseInt(arr[i]))
    }
    const reverse = answer.reverse();
    return reverse;
}
