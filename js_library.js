var _ = {
    map: function(arr, callBack) {
        let result = [];
        for (let i=0; i<arr.length; i++){
            result.push(callBack(arr[i]));
      }
      return result;
    },
    reduce: function(arr, callBack, memo ) { 
        let total = memo;
        for (let i = 0; i < arr.length; i++){
            total = callBack(total , arr[i]);
        }
        return total;
        },
    find: function(arr, callBack) {   
        let is_even;
        for (let i = 0; i < arr.length; i++){
            if(callBack(arr[i])){
                is_even = arr[i];
                break;
            }
        }
        return is_even;
    },
    filter: function(arr,callBack) { 
        for (let i = 0; i<arr.length; i++){
                if (!callBack(arr[i])){
                    arr.splice(i,1);
                }
        }
        return arr;
    },
    reject: function(arr, callBack) { 
        for (let i = 0; i<arr.length; i++){
                if (callBack(arr[i])){
                    arr.splice(i,1);
                }
        }
        return arr;
    }
  }

  var evens = _.filter([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(evens); // if things are working right, this will return [2,4,6].

  var maps = _.map([1,2,3], function(num){ return num * 3; });
  console.log(maps);

  var sum = _.reduce([1, 2, 3], function(memo, num){ return memo + num; }, 0);
  console.log(sum);

  var even = _.find([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(even);

  var odds = _.reject([1, 2, 3, 4, 5, 6], function(num){ return num % 2 == 0; });
  console.log(odds);
