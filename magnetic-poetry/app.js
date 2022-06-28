// select the item element


const item = document.querySelector('.item');
const magnet = document.querySelector('magnet');

// attach the dragstart event handler


// handle the dragstart

function dragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.id);
    setTimeout(() => {
        e.target.classList.add('hide');
    }, 0)
}

//create an array of the words from Diving Into the Wreck

// map over that array and for each word and punctuation mark make a div with the magnet class creating the magnets

//create a target I can drag the words to.

const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('dragenter', dragEnter);
    box.addEventListener('dragover', dragOver);
    box.addEventListener('dragleave', dragLeave);
    box.addEventListener('drop', drop);
})

function dragEnter(e) {
    e.preventDefault();
    e.target.classList.add('drag-over');
}

function dragOver(e) {
    e.preventDefault()
    e.target.classList.add('drag-over');
}

function dragLeave(e) {
    e.target.classList.add('drag-over');
}

function drop(e) {
    e.target.classList.remove('drag-over');
    const id = e.dataTransfer.getData('text/plain');
    const draggable = document.getElementById(id);

    e.target.appendChild(draggable);

    draggable.classList.remove('hide');
}

// getting the text I'm going to use for magnetic poetry

const myJSON = '["Diving", "into", "the", "wreck"]';
const myArray = JSON.parse(myJSON);
document.getElementsByClassName('poem').innerHTML = myArray;


// let text = 'We are, I am, you are by cowardice or courage the one who find our way back to this scene carrying a knife, a camera a book of myths in which our names do not appear.'
// const poetryArray = text.split(",")



