const fs= require("fs")

// Implement CRUD operation using Node.js 'fs' module
// 1. create a file
fs.writeFileSync("note.txt","hello node.js")

// 2. Read the content of the file
const data=fs.readFileSync("note.txt")
console.log("Read Data: ",data);

// update the content of the file 
fs.appendFileSync("notes.txt", "Hello ECE-B")
