<template>
<div class="keyboard-base">
    <div class="row">
        <button class="keys">1</button>
        <button class="keys">2</button>
        <button class="keys">3</button>
        <button class="keys">4</button>
        <button class="keys">5</button>
        <button class="keys">6</button>
        <button class="keys">7</button>
        <button class="keys">8</button>
        <button class="keys">9</button>
        <button class="keys">0</button>
    </div>
    <div class="row">
        <button class="keys">Q</button>
        <button class="keys">W</button>
        <button class="keys">E</button>
        <button class="keys">R</button>
        <button class="keys">T</button>
        <button class="keys">Y</button>
        <button class="keys">U</button>
        <button class="keys">I</button>
        <button class="keys">O</button>
        <button class="keys">P</button>
    </div>
    <div class="row">
        <button class="keys">A</button>
        <button class="keys">S</button>
        <button class="keys">D</button>
        <button class="keys">F</button>
        <button class="keys">G</button>
        <button class="keys">H</button>
        <button class="keys">J</button>
        <button class="keys">K</button>
        <button class="keys">L</button>
    </div>
    <div class="row">
        <button class="keys">Z</button>
        <button class="keys">X</button>
        <button class="keys">C</button>
        <button class="keys">V</button>
        <button class="keys">B</button>
        <button class="keys">N</button>
        <button class="keys">M</button>
        <button class="keys delete"><img src="@/image/delete.svg"></button>
    </div>
    <div class="row">
        <button class="keys language">RUS</button>
        <button class="keys space">Space</button>
        <button class="keys">.</button>
    </div>
</div>
</template>
  
<script>
  export default {
    name: 'key-board'
}
// const buttons = document.querySelectorAll('.keys')
// const textarea = document.querySelector('textarea')

// const delete_btn = document.querySelector('.delete')
// const space_btn = document.querySelector('.space')

// let chars = []

// buttons.forEach(btn => {
//     btn.addEventListener('click', () => {
//         textarea.value += btn.innerText
//         chars = textarea.value.split('')
//     })
// })

// delete_btn.addEventListener('click', () => {
//     chars.pop()
//     textarea.value = chars.join('')
// })

// space_btn.addEventListener('click', () => {
//     chars.push(' ')
//     textarea.value = chars.join('')
// })

</script>
  
<style scoped>
.delete{
    background-color: #506773!important;
}
.row{
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    justify-content: center;
}
.keyboard-base {
    background-color: #546F7D;
    padding: 50px 0;
}
.keys {
    background-color: #fff;
    font-size: 30px;
    display: flex;
    height: 80px;
    width: 80px;
    margin: 5px;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
}
.keys:active {
    background-color: grey;
}
.space {
    width: 500px;
}
</style>