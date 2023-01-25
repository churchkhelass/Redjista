<template>
	<my-header>Сканирование документов</my-header>
    <div class="top-midle">
		<img class="pagination" src="@/image/pagination.svg" alt="начало">
	</div>
	<div class="container">
		<div class="midle">
			<div class="midle-icon">
				<p class="text-48">Посмотрите, пожалуйста, как надо сканировать лицевую сторону ID-карты!</p>
				<video autoplay loop width="100%" height="769px"><source src="@/video/idcard_1.mp4" type="video/mp4"></video>
				<p class="text-64">Когда приложите ID-карту к считывателю нажмите на кнопку!</p>
			</div>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn green" href="/#/">
					<p class="text-42">Сканировать</p>
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

</style>