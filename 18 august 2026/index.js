function areaOfCircle(radius){
      let area = Math.PI * radius * radius;
    console.log("Area of the Circle:",area);
}


function isCastVote(age){
    if(age<18){
        console.log("Not applicable for Voting")
    }
    else{
        console.log("You are applicable to vote")
    }
}
isCastVote(18)