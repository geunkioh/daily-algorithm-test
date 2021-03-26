//문자열 내 p와 y의 개수
const solution = s => {
    let p = 0, y = 0;
    for (let i of s) {
        const ea = i.toLowerCase();
        ea === "p" && p++;
        ea === "y" && y++;
    }
    const answer = p === y ? true : false;
    return answer;
}

