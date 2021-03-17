//약수의합
function solution(n) {
    let answer = 0;
    for(let i=1; n>=i; i++){
        if(n % i == 0){
            answer += i;
        }
    }
    return answer;
}