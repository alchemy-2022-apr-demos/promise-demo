const fs = require('node:fs/promises');

const wait = (delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, delay);
    });
}

fs.readdir(process.env.PWD)
  // paths: Array of strings (paths)
  .then(paths => {
    // promises is an Array of Promises.
    const promises = paths.map(path => {
        console.log('path', path);
        return fs.lstat(path)
            .then(stat => {
                if(stat.isDirectory()) {
                    return '';
                } else {
                    // readFile returns a promise
                    return fs.readFile(path)
                      .then((fileData) => {
                          return wait(1000)
                            .then(() => fileData);
                      });
                }
            });
    });
    return Promise.all(promises)
      .then(fileDatas => {
        fileDatas.forEach((fileData) => {
            console.log('---BEGIN-------------');
            console.log(fileData.toString());
            console.log('---END---------------');
        });
      });
  });