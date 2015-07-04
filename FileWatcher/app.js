console.log('Node File Watcher!');

var __dirname = 'C:\\Temp\\';

var chokidar = require('chokidar');

// One-liner for current directory, ignores .dotfiles
chokidar.watch(__dirname, { ignored: /[\/\\]\./ }).on('all', function (event, path) {
    console.log(event, path);
});

console.log('Watching Directory: ' + __dirname);
