var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

arr.push(6);
arr.push("Qualquer coisa");

console.log(arr);

arr.pop();

arr.unshift(0);
arr.unshift('teste');

console.log(arr);

arr.shift();

console.log(arr)

console.log(arr[arr.length - 1])

console.log(Array.isArray(arr));