console.log('1');

setTimeout(() => console.log('2'), 1);

console.log('3');

Promise.all([1, 2]).then((resp) => console.log(resp));

new Promise((res, rej) => res('4')).then((resp) => console.log(resp));

console.log('5');

setTimeout(() => console.log('6'), 1);

Promise.all([3, 4]).then((resp) => console.log(resp));
