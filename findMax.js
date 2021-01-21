    //This was used for an ONET API call but is useful for finding
    //the highest value of a multidimensional array. It is also
    //filtering down the array to one subsegment prior to finding
    //the max.
    //"scale_id" was the segment key with the argument "scale" serving
    //as filter to one value. These should be changed if reusing.
    //"title" was the key for another value I wanted access to in the
    //final result.
    //"category" was the key for the value I actually wanted returned.
    
    function findMax(scale) {
      const arr = v.filter(v => v.scale_id == scale);
      const max = arr
        .sort(function (a, b) {
          return a.data_value < b.data_value ? 1 : -1;
        })
        .slice(0, 1);

      maxTitle = max[0].title;

      return max[0].category;
    }
