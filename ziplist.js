
function zipList(arr1, arr2){
  if (arr1.length !== arr2.length){
    return -1;
  }
  let temp_arr = [];
  for (let i = 0; i < arr1.length; i++){
    temp_arr.push(arr1[i]);
    temp_arr.push(arr2[i]);
  }
  return temp_arr;
}

function zipListTheSimpleWay (arr1, arr2){
  let temp_arr = _.zip(arr1, arr2);
  return _.flatten(temp_arr);
}

let lis1 = ['a','b','c'];
let lis2 = [1,2,3];

console.log(zipList(lis1, lis2));
console.log(zipListTheSimpleWay(lis1, lis2));