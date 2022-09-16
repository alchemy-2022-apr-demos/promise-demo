/**
 * This file demonstrates how using async/await with tools like forEach will
 * orphan the promises and prevent downstream consumption of any result of that
 * forEach.
 * 
 * Each file will be printed from the directory, with a 1 second delay before
 * printing, so we can perceive it as humans.
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
    let totalBytes = 0;
    paths.forEach(async path => {
        const stat = await fs.lstat(path);
        if (!stat.isDirectory()) {
            const fileData = await fs.readFile(path)
            totalBytes += fileData.length;
            console.log('Read file done!')
        };
    });
    console.log('Total bytes read:', totalBytes);
})();