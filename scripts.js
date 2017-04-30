var sprintFunctions = {
  largestEl: function(arr){
    arr.sort(compare);
    max = arr.pop();
    return max

    function compare(a,b){
      return a - b;
    }
  },
  
  reversed: function(str){  
    strArr = str.split("")
    revArr = [];

    for(var i = strArr.length; i >= 0; i--){
     revArr.push(strArr[i]);  
    }
   return revArr.join("");
  },

  loudSnakeCase: function(str){  
    str = str.split(" ")
    for(var i = 0; i < str.length; i++){
      str[i][0].toUpperCase();
    }
  },

  compareArrays: function(arr1, arr2){ 
    arr1 = arr1.sort();
    arr2 = arr2.sort();

    
  },

  fizzBuzz: function(number){  
    var arr = [];

    for (i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        arr.push("FIZZBUZZ");
      }
      else if (i % 3 === 0) {
        arr.push("FIZZ");
      }
      else if (i % 5 === 0) {
        arr.push("BUZZ");
      }
      else {
        arr.push(i);
      };
    };
    return arr;
  },

  myMap: function(){  
    // your code here
  },

  primes: function(n){  
    primeArr = []
      for(var i = 2; i < n; i++){
        for(var j = 2; j < i; j++){
          if(i % j == 0)
            primeArr.push(i)
        }
      }
  
    
  },
}

