import fs from 'fs'
function sizeChecker(){                           //Keyword Function
    const stats = fs.statSync()
    const limit=2*1024*1024

    if(stats.size>limit){
        console.log("File should be less than 2 MB")
    }
    else{
        console.log("File has been submitted successfully")
    }

}


                                            //Arrow function
        // const sizeChecker= ()=>