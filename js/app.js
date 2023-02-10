console.log('griglia')
const gridEl = document.querySelector('.griglia')
let btnEl = document.getElementById("bottone")

function gridCheck() {
    gridEl.innerHTML = ``
}

bottone.addEventListener("click",
    function myFunction() {

        gridCheck()

        let gridSide = 10
        let playArea = gridSide * gridSide

        for (let i = 0; i < playArea; i++) {
            let num = i + 1
            console.log(num)
            let divString = `<div class="cella" style="width: calc(100% / ${gridSide});" >${num}</div>`
            gridEl.innerHTML += divString

        }

        const cellEl = document.querySelectorAll('.cella')

        for (let i = 0; i < cellEl.length; i++) {
            const cell = cellEl[i]

            cell.addEventListener('click', function () {
                cell.classList.toggle("indicatore")
                console.log(i + 1)
            })
        }
    }
)

const bombPosition = []
 
do {
    const randomNumber = Math
        .floor(Math.random() * 100) + 1

    if (!bombPosition.includes(randomNumber)) {
        bombPosition.push(randomNumber);
    }
  
} while (bombPosition.length < 16);

console.log(bombPosition);

