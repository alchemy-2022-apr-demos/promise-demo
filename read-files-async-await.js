
const fs = require('node:fs/promises');

const wait = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
}


// Async hack.
(async () => {
    const paths = await fs.readdir(process.env.PWD)
    paths.forEach(async path => {
        console.log('path', path);
        const stat = await fs.lstat(path);
        if (stat.isDirectory()) {
            return '';
        } else {
            // readFile returns a promise
            const fileData = await fs.readFile(path)
            await wait(3000); // Pretend this takes longer.
            console.log('---BEGIN-------------');
            console.log(fileData.toString());
            console.log('---END---------------');
        };
    });
    // promises.forEach(async (promise) => {
    // });
})();