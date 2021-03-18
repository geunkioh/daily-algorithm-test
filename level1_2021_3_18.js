//이상한 문자 만들기
function solution(s) {
    let answer = '';
    const arr = s.split(' ');
    for(let i=0; i<arr.length; i++){
        const string = arr[i].split('');
        for(let i=0; i<string.length; i++){
        const str = string[i];
        answer += i%2 === 0 ? str.toUpperCase() : str.toLowerCase();
        }
        answer += arr.length - 1 === i ? "" : " ";
    }
    return answer;
}
