<template>
	<my-header>Сканирование документов</my-header>
    <div class="container">
		<div class="midle">
			<div class="midle-icon">
				<img class="icon" src="@/image/ErrorPage.svg" alt="error">
				<p class="text-64"><span style="font-weight: 300;">Ошибка сканирования!</span><br><br><br>Убедитесь, что документы правильно расположены на сканере, и отсканируйте еще раз</p>
			</div>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn green">
					<p class="text-42">Повторить</p>
				</a>
			</div>
			<div class="string">
				<a class="btn back">
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
	margin-bottom: 120px;
}
.midle{
	margin-top: 350px;
}
</style>