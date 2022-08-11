/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function(arr) {
    let low =0
let high = arr.length-1
let med
while(low<=high){
med = Math.floor((low+high)/2)
if(arr[med-1]<arr[med] && arr[med+1]<arr[med]){

return med 

}
if(arr[med-1]>arr[med] && arr[med]> arr[med+1] ){
high = med
}
     if( arr[med-1]<arr[med]&& arr[med]< arr[med+1])
  low = med+1  

}
    low 
};