/**
 * This file demonstrates how using async/await with loops creates a sequence of
 * promises rather than performing all of the asynchronous operations
 * simultaneously.
 * 
 * Each file will be printed from the directory, with a 1 second delay before
 * printing, so we can perceive it as humans. Because we're using async/await,
 * the promises are completed in linear order. The whole contract of await is
 * that it doesn't move forward in execution until the promise is done.
 * 
 * While this can be convienent for a linear series of operations, it fails with
 * parallel operations.
 */
const fs = require('node:fs/promises');

const wait = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
};

// Async hack.
(async () => {
    const paths = await fs.readdir(process.env.PWD)
    for(let i = 0; i < paths.length; ++i) {
        const path = paths[i];
        const stat = await fs.lstat(path);
        if (!stat.isDirectory()) {
            // readFile returns a promise.
            const fileData = await fs.readFile(path)
            await wait(1000); // Pretend this takes longer.
            console.log('---BEGIN-------------');
            console.log(fileData.toString());
            console.log('---END---------------');
        };
    };
})();