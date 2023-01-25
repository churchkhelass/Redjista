<template>
	<my-header></my-header>
    <div class="container">
        <div class="midle">
            <div class="midle-icon">
                <img class="icon" src="@/image/Thanks_hotel.svg" alt="key">
                <p class="text-64">Спасибо за визит в наш отель!<br>Ждем Вас снова</p>
            </div>
        </div>
    </div>
    <footer>
        <div class="container">
            <div class="buttons">
                <div class="string">
                    <a class="btn green" href="/#/">
                        <p class="text-42">Завершить</p>
                    </a>
                </div>
            </div>
        </div>
    </footer>
    </template>
    
    <script>
    
    </script>
    
    <style scoped>
    .midle{
        margin-top: 500px;
    }
    .icon{
        display: block;
        margin: auto;
        margin-bottom: 120px;
        widows: 274px;
        height: 274px;
    }
    .buttons{
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
    }
    </style>