<template>
	<my-header>Выдача ключей</my-header>
	<div class="top-midle">
		<img class="pagination" src="@/image/pagination5.svg" alt="3/5 завершено">
	</div>
	<div class="container">
		<div class="midle mar">
			<div class="midle-icon">
				<img class="icon" src="@/image/Key.svg" alt="key">
				<p class="text-48">Пожалуйста, заберите ключи от номера</p>
			</div>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn green" href="/#/">
					<p class="text-42">Получить ключ 1 из 3</p>
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
.mar{
	margin-top: 350px;
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