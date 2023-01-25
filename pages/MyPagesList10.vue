<template>
<my-header>Информация о брони</my-header>
<div class="top-midle">
    <img class="pagination" src="@/image/pagination.svg" alt="начало">
</div>
<div class="container">
    <div class="midle">
        <div class="midle-icon">
            <div class="block-text">
                <p class="text-64">Чтобы система распознала Вашу бронь, посмотрите в камеру и нажмите кнопку</p>
            </div>
            <div class="image">
                <img class="icon" src="@/image/capture-webcam.png" alt="face_foto">
            </div>
        </div>
    </div>
</div>
<footer>
    <div class="container">
        <div class="buttons">
            <div class="string">
                <a class="btn btn-outline" href="/#/7">
                    <p class="text-36">Другой способ</p>
                </a>
                <a class="btn" href="/#/11">
                    <p class="text-36">Подтвердить</p>
                </a>
            </div>
            <div class="string">
                <a class="btn back" href="/#/7">
                    <p class="text-36">Назад</p>
                </a>
            </div>
        </div>
    </div>
</footer>
</template>

<script>

</script>

<style scoped>
.block-text{
	margin-bottom: 50px;
}
.image{
	background-color: #000;
}
.icon{
	display: block;
	margin: auto;
}
</style>