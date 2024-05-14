const sumUnique = (nums) => {
    let sum = 0;
    nums.forEach(num => { 
       if (nums.indexOf(num) === nums.lastIndexOf(num)) sum += num; 
    });   
return sum;
} 

const myArray = [1, 3, 4, 4 , 4]
const myNonNumArray = ["a", "b", "c"]

const sumUniqueNew = (nums) => {
    let sum = 0;
    const frequency = {}
    // first pass
    nums.forEach(num => {
    if (typeof num !== 'number') {
        throw new Error('Please provide an array of numbers');
    }
    if (frequency[num]) {
    	frequency[num] += 1;
    } else {
      frequency[num] = 1;
    }
    })
    // second pass
    Object.keys(frequency).forEach(num => {
    if (frequency[num] > 1) {
    sum += Number(num);
    }
    })
    
return sum;
}

console.log(sumUnique(myArray))
console.log(sumUniqueNew(myArray))
console.log(sumUniqueNew(myNonNumArray))
