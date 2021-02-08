const fs = require("fs");

var argv = require("yargs").argv;
var filename = argv._[0];
const folder = "./files/";

let output;
containsFiles(folder, output);
console.log("output is", output);
if (output) {
  // if the directory is empty then create a file for the filename
  if (filename !== undefined) createNewFile(filename);
  else console.log("Give some name to the file");
} else {
  let fileArray = [];
  readFilesIntoList(fileArray);
  console.log("file array", fileArray);
  if (fileArray.includes(filename)) {
    console.log("File exist please give a new file name");
    process.abort();
  }
}
// Checks if the directory contains files or not
function containsFiles(dirname, output) {
  fs.readdirSync(dirname, function (err, files) {
    if (err) {
      console.log("Error occurred while reading directory", err);
      return err;
    } else {
      console.log("files test", files.length);

      if (!files.length) {
        console.log("Directory appears to be empty");
        output = false;
        return false;
      } else output = true;
      //   else {
      //   }
    }
    // return true;
    // return "blah";
  });
}

function readFilesIntoList(array) {
  //   var array = [];
  fs.readdir(folder, (err, files) => {
    files.forEach((file) => {
      console.log("Getting file name in files as", file);
      array.push(file);
      //   console.log(file);
      //   return array;
    });
    // return array;
  });
}

function createNewFile(filename) {
  fs.writeFile("./files/" + filename, "You are awesome", function (err) {
    if (err) {
      return console.error(err);
    } else {
      console.log("Data written successfully!");
    }
  });
}
