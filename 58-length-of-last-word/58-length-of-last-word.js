/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let strArr =s.trim().split(" ")
    let count =0
    
let lastWord = strArr[strArr.length-1]
for(var i =0; i < lastWord.length; i++){
    count= count+1



}
    return count
  
    
};