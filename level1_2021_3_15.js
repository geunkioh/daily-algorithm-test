//시저 암호
function solution(s, n) {
    let answer = '';
    for(let i=0; s.length > i; i++){
        if(" " == s[i]){
            answer += " "
        } else {
        let codeNumber = s.charCodeAt(i);
        let nextCodeNumber = codeNumber+n;
        if(64 < codeNumber && codeNumber < 91){
            if(90 < nextCodeNumber){
                nextCodeNumber = nextCodeNumber - 90 + 64;
            }
        } 
        if(96 < codeNumber && codeNumber < 123){
            if(122 < nextCodeNumber){
                nextCodeNumber = nextCodeNumber - 122 + 96;
            }
        }      
        const nextCodeString = String.fromCharCode(nextCodeNumber);
        answer += nextCodeString;
        }
    }
    return answer;
}