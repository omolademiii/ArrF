//////1
//Mutating array methods: These methods modify the original array and return the modified array.
//  In other words, they mutate the array on which they are called.
// Examples of mutating array methods include:

// push(): Adds one or more elements to the end of an array and returns the new length of the array.
// pop(): Removes the last element from an array and returns that element.
// splice(): Adds or removes elements from an array at a specified index and returns the removed elements.
// shift(): Removes the first element from an array and returns that element.
// unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.

//Non-mutating array methods: These methods do not modify the original array,
//  but instead return a new array with the specified modifications.
// Examples of non-mutating array methods include:

// map(): Creates a new array by calling a function on each element in the original array.
// filter(): Creates a new array containing all elements that pass a test specified by a function.
// concat(): Creates a new array by concatenating two or more arrays together.
// slice(): Returns a new array containing a portion of the original array.
// reduce(): Executes a provided function for each value of the array, and returns a single value based on the result.

////////2
let languages = ['C#', 'JavaScript', 'Ruby', 'PHP', 'Python']

// Add 'Kotlin' to the end of the array
languages.push('Kotlin')

// Add 'Java' after 'Ruby'
languages.splice(3, 0, 'Java')

// Remove the first item in the array
languages.shift()

// Add 'Scala' and 'Swift' to the beginning of the array
languages.unshift('Scala', 'Swift')

// Replace 'PHP' with 'Go' and 'Rust'
languages.splice(languages.indexOf('PHP'), 1, 'Go', 'Rust')

console.log(languages)

///////3
let fruit = ['apple', 'mango', 'banana']
function changeFruit(fruit) {
  fruit[2] = 'orange'
  return fruit
}
///// The value of fruit after calling the function will be ['apple', 'mango', 'orange']