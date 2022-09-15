
console.log('Start of program');

// const numbers = [8]
//   .map(x => x +1)
//   .map(y => y / 2);
// console.log(numbers);

// const promise = Promise.resolve(8)
// promise.then(x => x + 1)
//   .then(y => y / 2)
//   .then(result => console.log(result));
const fs = require('node:fs/promises');

// Promise.resolve(10)
//   .then(x => {
//       return Promise.resolve(x + 1);
//   })

const handleSearch = searchBuffer => {
    const search = searchBuffer.toString().trim();
    console.log('replace with: ');
    return fs.readFile('/dev/stdin')
        .then(str => {
            return str.toString().toUpperCase().trim();
        })
        .then((replace) => {
            return handleReplace(search, replace);
        });
}

const actuallyReplaceTheFile = (search, replace, buffer) => {
    console.log(`Changing ${search} to ${replace}.`);
    const newFile = buffer.toString().replace(
        search,
        replace,
    );
    console.log('New file:\n', newFile);
    return fs.writeFile('index.html', newFile);
}

const handleReplace = (search, replace) => {
    return fs.readFile('index.html')
        .then((buffer) => {
            return actuallyReplaceTheFile(search, replace, buffer);
        });
}

console.log('search for: ');
fs.readFile('/dev/stdin')
  .then(handleSearch)
  .catch((e) => console.error('Error in promise chain', e));

//   .then(x => { // step1 
//       return x + 1;
//   })
//   .then(y => { // step 2
//       return y / 2;
//   })
//   .then(booger => { //step 3
//       console.log(booger);
//   });

// const x = 10;
// const y = x + 1;
// const z = y / 2;
// console.log(z);

// console.log('End of program?');