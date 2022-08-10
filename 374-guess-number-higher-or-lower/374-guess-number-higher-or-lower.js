/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    let lowNo = 1
    let highNo= n
    let mid 
    while(lowNo<= highNo){

 mid = Math.floor((lowNo+highNo)/2)
let res = guess(mid)
if(res== 0){
return mid
}
else if(res < 0){
highNo= mid-1

}else {
lowNo = mid+1
    
}
   

}
         return -1
    
    
};