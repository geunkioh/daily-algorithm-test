//문자열 다루기 기본
function solution(s) {
    let answer = s.replace(/(\s*)/g, "")
    answer = answer.split('')
    for (let i = 0; i < answer.length; i++) {
        if (Number.isInteger(answer[i] * 1) == false) {
            return false
        }
    }
    if (answer.length === 4 || answer.length == 6) {
        return true
    } else {
        return false
    }
}
