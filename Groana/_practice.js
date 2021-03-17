/*
Diff Between Two Strings

Given two strings of uppercase letters source and target, list (in string form) a sequence of edits to convert from source to target that uses the least edits possible.
*/

const diffBetweenTwoStrings = (source, target) => {
  if (source[0] === target[0]) {
    return source[0] + '' + diffBetweenTwoStrings(source.slice(1), target.slice(1));
  } else {
    let ans1 = diffBetweenTwoStrings(source.slice(1), target);
    let ans2 = diffBetweenTwoStrings(source, target.slice(1));
    
    if (ans1.length <= ans2.length) {
      return '-' + source[0] + '' + ans1;
    } else {
      return '+' + target[0] + '' + ans2;
    }
  }

}


console.log(diffBetweenTwoStrings("ABCDEFG", "ABDFFGH"))