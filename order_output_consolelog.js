// // console.log('Hello');
// setTimeout(() => console.log(', understanding'), 1);
// // console.log('world');
// Promise.all([
//   new Promise((res) => res('Promise')).then(r => console.log(r)),
//   new Promise((res) => res('Concept')).then(r => console.log(r))
// ]);
// new Promise((res) => res('of')).then((resp) => console.log(resp));
// console.log('JavaScript');
// Promise.race([
//   new Promise((resolve) => setTimeout(resolve, 1000, 'priority')),
//   new Promise((resolve) => setTimeout(resolve, 300, 'execution'))
// ]).then(r => console.log(r));
// setTimeout(() => console.log('order'), 1);
// Promise.all(['micro', 'task']).then((resp) => console.log(resp));

[P,st,cl]=[Promise,setTimeout,console.log];

st(()=>cl('queue'),1);

P.all([new P(r=>r('JS')).then(r=>cl(r))]);

P.race([new P(r=>st(r,9,'priority')),new P(r=>st(r,3,'exec'))]).then(r=>cl(r));

P.all(['micro','task']).then(r=>cl(r));
