//자릿수 더하기
function solution(n) {
    const nums = `${n}`.split('')
    let answer = 0;
    for(let i=0; i<nums.length; i++){
        answer += nums[i]*1;
    }
    return answer;
}
