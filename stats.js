import fs from 'fs'

fs.stat("notes.txt",(err,stats)=>{
    if(err){
        console.log(err);
        return;
    }
    console.log("Information of [notes.txt]",stats);
    console.log("Size of the file: ",stats.size);
    console.log("Created on: ",stats.birthtime);
    console.log("Modification of the file : ",stats.mtime);
    console.log("Access time of the file : ",stats.atime);
    console.log("Change time of the file : ",stats.ctime);


});