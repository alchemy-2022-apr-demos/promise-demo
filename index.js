console.log('start');
const x = 1;
const y = 2;
const z = x + y;

setTimeout(() => {
    console.log("step 1 done")
}, 5000);

setTimeout(() => {
    console.log("step 2 done")
}, 6000);