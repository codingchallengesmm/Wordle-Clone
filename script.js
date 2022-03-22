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


// create the global game object
window.wordle = {
    onKeyPressed: function (key) {
        console.log(key + " is pressed");
    }
};


let hookEvents = function () {
    let buttons = document.querySelectorAll('.btn');
    for (let i = 0; i < buttons.length; i++) {

        // we don't want to hard code the event handler here.
        // we'll let the wordle object handle it.
        // button[i].addEventListener('click' , function(){
        //     console.log(`${button[i].innerText} is pressed`);
        // })

        // let key = buttons[i].innerText;
        let key = buttons[i].dataset.key;

        buttons[i].addEventListener('click', function () {
            window.wordle.onKeyPressed(key);
        })

        // note: this is not the same as this:
        /*
        buttons[i].addEventListener('click', 
            window.wordle.onKeyPressed(key)
        )
        */
    }
}

hookEvents();

// window.wordle = {
//     onkeypress : pressKey(),
// };