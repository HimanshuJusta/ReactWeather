function addPromise(a, b) {
  return new Promise(function(resolve, reject){
    if(typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    }else{
      reject('One of them is not a number');
    }
  });
}

addPromise(2,31).then(function(sum){
  console.log('The sum is',sum);
},function(err){
  console.log('Error generating a sum',err);
});

addPromise(2,'31').then(function(sum){
  console.log('The sum is',sum);
},function(err){
  console.log('Error generating a sum:',err);
});
