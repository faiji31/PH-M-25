// console.log('connected')
function makeYellow(){
    document.body.style.backgroundColor = 'yellow';
}

function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

const makeBlue = document.getElementById('btn-makeblue');
makeBlue.onClick  = function Blue(){
    document.body.style.backgroundColor = 'red';
}