

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