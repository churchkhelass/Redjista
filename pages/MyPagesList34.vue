<template>
	<my-header>Фото гостя</my-header>
    <div class="container">
		<div class="midle">
			<div class="midle-icon">
				<img class="icon" src="@/image/ErrorPage.svg" alt="error">
				<p class="text-64">Ошибка распознования!</p><br><br><br><p class="text-48 opac">Процент схожести фото в паспорте и вашего нынешнего фото слишком низкий.<br>Такое бывает, если паспорт был получен давно.<br> Попробуйте еще раз или вызовите администратора.</p>
			</div>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn" href="/#/">
					<p class="text-42">Повторить</p>
				</a>
				<a class="btn green" href="/#/">
					<p class="text-42">Позвать администратора</p>
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
.opac{
	opacity: 0.5;
}
.midle{
	margin-top: 350px;
}
.icon{
	display: block;
	margin: auto;
	margin-bottom: 60px;
}
</style>