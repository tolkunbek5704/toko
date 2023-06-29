let input1 = document.querySelector('.input1')
let input2 = document.querySelector('.input2')
let btn = document.querySelector('button')
let body = document.querySelector('body')
let list =document.querySelector('.list')

body.style.background = '#08082A'
body.style.display = 'flex'
body.style.justifyContent = 'center'
body.style.margin = '70px'






input1.style.width = '190px'
input1.style.height = '20px'
input1.style.margin = '15px'


input2.style.width = '190px'
input2.style.height = '20px'
input2.style.margin = '15px'


btn.style.width = '100px'
btn.style.height = '30px'
btn.style.margin = '15px'
btn.style.color = '#fff'
btn.style.background = '#1D61B5'
btn.style.border = 'none'
btn.style.borderRadius = '5px'

list.style.color = 'red'



btn.addEventListener("click", () => {
    list.innerHTML += `
    <div class="main_list">
    <p>Name: ${input1.value}</p>
    <p>LastName: ${input2.value}</p>
    <button class="btn_del"><ion-icon name="trash-outline"></ion-icon></button>
    </div>
    `
})

list.addEventListener('click', (e)=>{
    if(e.target.classList.contains("btn_del")){
        e.target.parentNode.remove()
    }
})




























