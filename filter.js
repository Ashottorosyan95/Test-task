Array.prototype.myFilter = function(callback){
 
  let arr = [];
  
  for(let i = 0; i < this.length; i++) {
    if(callback(this[i])) {
      arr.push(this[i]);
    }
  }
  
  return arr;
 }

 let newArr = [5, 14, 75, 89];
 let result = newArr.myFilter(i => i === 5);

 console.log('result', result);