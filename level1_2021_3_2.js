//특정 요일 구하기
function solution(a, b) {
    const day = `2016-${a}-${b}`,
    week = ['SUN','MON','TUE','WED','THU','FRI','SAT'],
    today = new Date(day).getDay();
    return week[today];
}

