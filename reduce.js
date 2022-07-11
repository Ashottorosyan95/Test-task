Array.prototype.myReduce = function(callback){
  let number = 0;

  for(let i = 0; i < this.length; i++) {
    callback(number = number + this[i])
  }
   
  return number;
}

let newArr = [1, 2, 3, 4];
let result = newArr.myReduce((acc, item) => acc + item);

console.log('result', result);