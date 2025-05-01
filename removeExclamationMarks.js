// function removeExclamationMarks(s) {
//     let string = [];
//     for(let i = 0; i <= s.length; i++){
//         if(i !== '!'){
//             string.push[i]
//         }
//     }
//     return string
//   }
function removeExclamationMarks(s) {
    let string = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== '!') {
            string.push(s[i]);
        }
    }
    return string.join('');
}

function removeExclamationMarks(s) {
    return s.split('!').join('');
}
