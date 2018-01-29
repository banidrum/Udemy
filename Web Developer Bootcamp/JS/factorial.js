factorial(num){
  var i, result;
  for(i = 1; i<=num; i++){
    result = result * i;
  }
  return result;
}

factorial(5);
