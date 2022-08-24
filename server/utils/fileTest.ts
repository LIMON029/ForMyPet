export {};

const fs = require('fs');
const path = require('path');

fs.readdir('server/assets', (error) => {
    if(error) {
        console.log('error');
        // fs.mkdirSync('server/assets')
    } else {
        // for(var i in fileList){
        //     console.log(fileList[i]);
        //   }
    }
})