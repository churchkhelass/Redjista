<template>
	<my-header>Выдача ключей</my-header>
    <div class="container">
        <div class="midle">
            <div class="midle-icon">
                <img class="icon" src="@/image/Key.svg" alt="key">
                <p class="text-48">Пожалуйста, вставьте ключ в приемник</p>
            </div>
        </div>
    </div>
<footer>
    <div class="container">
        <div class="buttons">
            <div class="string">
                <a class="btn green" href="/#/">
                    <p class="text-42">Сдать ключи</p>
                </a>
            </div>
            <div class="string">
                <a class="btn back" href="/#/2">
                    <p class="text-42">Назад</p>
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