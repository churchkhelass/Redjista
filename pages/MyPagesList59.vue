<template>
	<my-header>Поиск по фото</my-header>
    <div class="top-midle">
		<img class="pagination" src="@/image/pagination.svg" alt="1/5 выполнена">
	</div>
	<div class="container">
		<div class="midle">
			<div class="midle-icon">
				<p class="text-48">Чтобы система распознала Вашу бронь, посмотрите в камеру и нажмите кнопку</p>
				<div class="image">
					<img class="icon" src="@/image/capture-webcam.png" alt="face_foto">
				</div>
				<p class="text-64">Гость 1, посмотрите, пожалуйста, в камеру и нажмите кнопку</p>
			</div>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn btn-outline" href="/#/">
					<p class="text-42">Другой способ</p>
                </a>
				<a class="btn green" href="/#/">
					<p class="text-42">Подтвердить</p>
                </a>
			</div>
			<div class="string">
				<a class="btn back" href="/#/">
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
.icon{
	display: block;
	margin: auto;
}
.image{
	background-color: #000;
	margin: 20px 0;
}
</style>