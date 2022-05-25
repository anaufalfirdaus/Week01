const score = 70
if (score >= 80) {
    console.log('A'); 
}
else if(score<80 && score>=65) {
    console.log('B');
}
else if(score<65 && score>=55){
    console.log('C');
}
else {
    console.log('D');
}

function getScore(score) {
    let grade;
    if (score >= 80) {
        grade='A'; 
    }
    else if(score<80 && score>=65) {
        grade='B';
    }
    else if(score<65 && score>=55){
        grade='C';
    }
    else {
        grade='D';
    }
    console.log(grade); 
}

getScore(80);