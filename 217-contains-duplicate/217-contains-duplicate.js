/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let uniqueValues = [...new Set(nums)]
   if(uniqueValues.length< nums.length){
return true}
return false 

//     let sortedArray = nums.sort()
//     console.log(sortedArray)
//     for(var i=0;i <sortedArray.length; i++){
//         if(sortedArray[i]- sortedArray[i+1]===0){
// return true
// }
//         return false 


// };

    
};