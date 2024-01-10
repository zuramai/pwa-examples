let turn = 'x'

const boxes = document.querySelectorAll('.box')
boxes.forEach(box => box.addEventListener('click', (e) => {
    if(box.classList.length > 1) return 
    box.classList.add(turn)
    console.log((boxes[0].classList.value ))
    console.log((boxes[1].classList.value ))
    if(
        (boxes[0].className !== 'box' && boxes[0].className == boxes[1].className && boxes[1].className  == boxes[2].className) ||
        (boxes[0].className !== 'box' && boxes[0].className == boxes[3].className && boxes[3].className  == boxes[6].className) ||
        (boxes[0].className !== 'box' && boxes[0].className == boxes[4].className && boxes[4].className  == boxes[8].className) ||
        (boxes[1].className !== 'box' && boxes[1].className == boxes[4].className && boxes[4].className  == boxes[7].className) ||
        (boxes[2].className !== 'box' && boxes[2].className == boxes[4].className && boxes[4].className  == boxes[6].className) ||
        (boxes[3].className !== 'box' && boxes[3].className == boxes[4].className && boxes[4].className  == boxes[5].className) ||
        (boxes[6].className !== 'box' && boxes[6].className == boxes[7].className && boxes[7].className  == boxes[8].className) ||
        (boxes[2].className !== 'box' && boxes[2].className == boxes[5].className && boxes[5].className  == boxes[8].className) 
        ) {
            alert(turn + ' win!')
        }
    turn = turn == 'x' ? 'o' : 'x'
}))

