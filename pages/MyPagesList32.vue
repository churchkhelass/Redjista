<template>
	<my-header>Фото гостя</my-header>
    <div class="top-midle">
		<img class="pagination" src="@/image/pagination2.svg" alt="1/5 выполнена">
	</div>
	<div class="container">
		<div class="midle">
			<div class="midle-icon">
				<p class="text-48">Для проверки достоверности документов будет сделано фото каждого гостя, проживающего в номере</p>
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
				<a class="btn green" href="/#/">
					<p class="text-42">Далее</p>
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