let btn = document.getElementById('btn')

// event click
// btn.addEventListener('dblclick',()=>{

btn.addEventListener('click',()=>{
// alert('clk')

document.querySelector('.box').innerHTML='<b>You are clicked by me</b>'




})
document.addEventListener('keydown',(e)=>{
    console.log(e)
    console.log(e.key,e.keyCode)
})