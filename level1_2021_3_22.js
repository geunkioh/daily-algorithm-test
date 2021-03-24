//정수 제곱근 판별
function solution(n) {
    for(let i=1; i<=n; i++){
        if(i*i === n){
            const p1 = i+1;
            return p1*p1;
        }
    }
    return -1;
}