fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for(const val in collection) { 
       callback(collection[val])
      }
      return collection;
    },

    map: function(collection, callback) {
      newArr = []
        for(const val in collection) { 
          newArr.push(callback(collection[val]));
         }
      return newArr;
    },

    reduce: function(collection, callback, acc = 0) {
      for(const val in collection) { 
        acc = callback(acc, collection[val]);
       }
       return acc;
    },
    
    find: function(collection, predicate) {
      for(const val in collection) {
        if (predicate(collection[val])) {
          return collection[val];
        }
      }
    },

    filter: function(collection, predicate) {
      newArr = [];
      for(const val in collection) {
        if (predicate(collection[val])) {
          newArr.push(collection[val]);
        }
      }
      return newArr;
    },

    size: function(collection) {
      return Object.keys(collection).length;
    },

    first: function(collection, n=1) {
      newStuff = collection.slice(0, n);
      if (newStuff.length === 1) {
        return newStuff[0];
      } else {
        return newStuff;
      }
    },

    last: function(collection, n=1) {
      newStuff = collection.slice(-n);
      if (newStuff.length === 1) {
        return newStuff[0];
      } else {
        return newStuff;
      }
    },

    compact: function(collection) {
      newArr = [];
      for(const val in collection) {
        if (!!collection[val])
          newArr.push(collection[val]);
        }
      return newArr;
    },

    sortBy: function(collection, callback) {
      newArr = [...collection];
      newArr.sort( function(a, b) { return callback(a) - callback(b)} )
      return newArr;
    },

    flatten: function(collection, single=false, newArr=[]) {
      if (single) { return collection.flat() }
      if (!(collection instanceof Array)) {
        return newArr.push(collection)
      } else {
      for (const value of collection) {
        fi.flatten(value, false, newArr);
        }
      }
      return newArr;
    },

    uniq: function(array, isSorted, callback) {
      newArr = []
      valArr = [] 
      for(const val in array) {
        let value = array[val]
        if (callback !== undefined) {
          if (valArr.indexOf(callback(value)) === -1) {
            valArr.push(callback(value))
            newArr.push(value)
          }
        } else {
        if (newArr.indexOf(value) === -1) {
          console.log(value)
          newArr.push(value);
        }
      }
    }
      return newArr;
    },

    keys: function(collection) {
      newArr = [];
      for(const key in collection) {
          newArr.push(key);
        }
      return newArr;
    },

    values: function(collection) {
      newArr = [];
      for(const key in collection) {
          newArr.push(collection[key]);
        }
      return newArr;
    },

    functions: function(collection) {
      newArr = []
      for(const key in collection) {
        if (typeof collection[key] === "function")
         { newArr.push(key)
         }
      }
      return newArr
    },

    giveMeMore: function() {

    },

  }
})()

fi.libraryMethod()
