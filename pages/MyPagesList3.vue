<template>
<my-header>Важный вопрос</my-header>
<div class="container">
    <div class="midle">
        <div class="midle-icon">
            <img class="icon" src="@/image/Kid_1.svg" alt="check_in">
            <p class="text-64">Заселяются ли с Вами дети младше 14 лет?</p>
        </div>
    </div>
</div>
<footer>
    <div class="container">
        <div class="buttons">
            <div class="string">
                <a href="#/4" class="btn">
                    <p class="text-42">Да</p>
                </a>
                <a href="#/7" class="btn">
                    <p class="text-42">Нет</p>
                </a>
            </div>
            <div class="string">
                <a href="/#/2" class="btn back">
                    <p class="text-42">Назад</p>
                </a>
            </div>
        </div>
    </div>
</footer>    
</template>

<style scoped>
.midle{
    margin-top: 400px;
}
.icon{
	display: block;
	margin: auto;
	margin-bottom: 120px;
}
</style>