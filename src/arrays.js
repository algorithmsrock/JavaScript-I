// Complete the following functions.
// These functions only need to work with arrays.
// Do NOT use the built in array methods to solve these. forEach, map, reduce, filter, includes, etc.
// You CAN use concat, push, pop, etc. but do not use the exact method that you are replicating
// You can use the functions that you have already written to help solve the other problems
/* eslint-disable */
const each = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
    cb(elements[i], i);
	 }
};
	// Iterates over a list of elements, yielding each in turn to the `cb` function.
  // This only needs to work with arrays.
  // You should also pass the index into `cb` as the second argument
  // based off http://underscorejs.org/#each

const map = (elements, cb) => {
  const mappedArray = []; 
  for (let i = 0; i < elements.length; i++) {
    mappedArray.push(cb(elements[i]));
	}
		return mappedArray;    
};

	// Produces a new array of values by mapping each value in list through a transformation function (iteratee).
  // Return the new array. 

const reduce = (elements, cb, startingValue) => {
   let index = 0;
	 if(startingValue === undefined){
	   startingValue = elements[0];
		 index = 1;
}
    for (let i = index; i < elements.length; i++){
      startingValue = cb(startingValue, elements[i]);
		}
	return startingValue;
  // Combine all elements into a single value going from left to right.
  // Elements will be passed one by one into `cb` along with the `startingValue`.
  // `startingValue` should be the first argument passed to `cb` and the array element should be the second argument.
  // `startingValue` is the starting value.  If `startingValue` is undefined then make `elements[0]` the initial value.
};

const find = (elements, cb) => {
  for (let i = 0; i < elements.length; i++) {
			if (cb(elements[i]) === true) { 
				return elements[i];
	}
}
     return 'undefined'; 
 // Look through each value in `elements` and pass each element to `cb`.
  // If `cb` returns `true` then return that element.
  // Return `undefined` if no elements pass the truth test.
};

const filter = (elements, cb) => {
   const emptyarray = []; 
	 for (let i = 0; i < elements.length; i++) {
			if (cb(elements[i]) === true) {
			    emptyarray.push(elements[i]);
		}
	}
    return emptyarray;

  // Similar to `find` but you will return an array of all elements that passed the truth test
  // Return an empty array if no elements pass the truth test
};

/* STRETCH PROBLEM */

const flatten = (elements) => {
   let nestedarray = [];
	 for (let i = 0; i < elements.length; i++){
			 if(Array.isArray(elements[i])) {
			   nestedarray = nestedarray.concat(flatten(elements[i]));
				} 
				  else {
					nestedarray.push(elements[i]);
					}
			}
			  return nestedarray;

   // Flattens a nested array (the nesting can be to any depth).
  // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
};

/* eslint-enable no-unused-vars, max-len */

module.exports = {
  each,
  map,
  reduce,
  find,
  filter,
  flatten,
}; 
