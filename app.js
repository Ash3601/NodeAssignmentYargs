const fs = require("fs");

var argv = require("yargs").argv;
var filename = argv._[0];
const folder = "./files/";

// FUNCTIONS
function containsFiles(dirname) {
  let files = fs.readdirSync(dirname);
  if (!files.length) {
    console.log("Directory appears to be empty");
    return false;
  }
  return true;
}

function writeFileNameInFile(filename) {
  fs.appendFileSync("file_data.txt", filename + "\n");
}

function readFilesIntoList(array) {
  let files = fs.readdirSync(folder);
  files.forEach((file) => {
    array.push(file);
  });
}

function createNewFile(filename) {
  let output = fs.writeFileSync(folder + filename, "You are awesome");
  writeFileNameInFile(filename);
  console.log(filename + " created successfully!");
}

// LOGIC
// if folder contains files then
if (!containsFiles(folder)) {
  filename !== undefined
    ? createNewFile(filename)
    : console.log("Give some name to the file");
} else {
  let fileArray = [];
  readFilesIntoList(fileArray);
  if (fileArray.includes(filename)) {
    console.log("File exist please give a new file name");
    process.exit();
  } else {
    createNewFile(filename);
  }
}
