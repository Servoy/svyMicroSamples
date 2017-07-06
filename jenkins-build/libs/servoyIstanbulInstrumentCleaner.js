const fs = require('fs');

var gDirToClear = '';

processArgs(process.argv.slice(2));
clearInstrumentDirectory(gDirToClear);

function processArgs(args) {
    if(args.length == 0) {
        throw new Error('No path given as argument!');
    } else {
        gDirToClear = args[0];
    }
}

function isServoySolution(fileArray) {
    if(fileArray.indexOf(".buildpath") == -1) return false
    else return true;
}

function deleteFolderRecursive(path) {
    var files = [];
    if( fs.existsSync(path) ) {
        files = fs.readdirSync(path);
        files.forEach(function(file,index){
            var curPath = path + "/" + file;
            if(fs.lstatSync(curPath).isDirectory()) { // recurse
                deleteFolderRecursive(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(path);
    }
};

function clearInstrumentDirectory(dirToClear) {
    if(dirToClear) {
        var files = fs.readdirSync(dirToClear);
        for (var i in files) {
            if (!files.hasOwnProperty(i)) {
                continue;
            }

            var dirname = files[i];
            var name = dirToClear + '/' + dirname;
            if (fs.statSync(name).isDirectory()) {
                if(dirname.charAt(0) == ".") continue; //Hidden dirs

                var subFiles = fs.readdirSync(name);
                if(subFiles.indexOf(".git") != -1) {
                    //It is a git submodule
                    for(var j in subFiles) {
                        if (!subFiles.hasOwnProperty(j)) {
                            continue;
                        }
                        var subDirName = subFiles[j];
                        var name = dirToClear + "/" + dirname + "/"+ subDirName;
                        if(fs.statSync(name).isDirectory()) {
                            if(!isServoySolution(fs.readdirSync(name))) {
                                deleteFolderRecursive(name);
                            } 
                        }
                    }

                } else if(!isServoySolution(subFiles)){
                    deleteFolderRecursive(name)
                }
            } 
        }
    }
}

//project.setProperty('code.coverage.instrument.exclude', foldersToSkip.join('-x '));