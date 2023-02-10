console.log('griglia')
let btnEl = document.getElementById("bottone")

bottone.addEventListener("click",
    function myFunction() {
        btnEl.classList.add("nodisplay")


        let gridSide = 10
        let playArea = gridSide * gridSide
        const gridEl = document.querySelector('.griglia')

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

let refresh = document.getElementById("refresh-btn")
refresh.addEventListener("click",
    function refreshFunction() {
        window.location.reload(true)
    }
)






