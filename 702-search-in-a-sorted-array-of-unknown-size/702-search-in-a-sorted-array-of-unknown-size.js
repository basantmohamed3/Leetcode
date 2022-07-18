/**
 * // This is the ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * function ArrayReader() {
 *
 *     @param {number} index
 *     @return {number}
 *     this.get = function(index) {
 *         ...
 *     };
 * };
 */

/**
 * @param {ArrayReader} reader
 * @param {number} target
 * @return {number}
 */
var search = function (reader, target) {
let low = 0
let high = reader.length-1

let mid 

while(low<=high){
    mid =Math.floor((low+high)/2)

if(reader[mid] ===target){
return mid

} if(target > reader[mid]){

 low = mid+1
}else {

high = mid-1

}


}
    return -1

    
};