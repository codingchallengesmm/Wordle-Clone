

let createBlock = function(){
    let gameblock = document.getElementById('gameblock');
    
    for(let i = 0; i < 30 ; i++){
        let block = document.createElement('div');
        block.setAttribute('id' , i +1)
        block.classList.add('block');
        gameblock.appendChild(block)
    }
}

createBlock()

let aBox = document.getElementById('8');
let bBox = document.getElementById('14');
let cBox = document.getElementById('17');
aBox.innerHTML = 'A';
bBox.innerHTML = 'G';
cBox.innerHTML = 'I';

aBox.classList.add('bg-green');
bBox.classList.add('bg-dark');
cBox.classList.add('bg-light-brown');