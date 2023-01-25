<template>
	<my-header>Заселение в отель</my-header>
    <div class="container">
		<div class="midle">
			<div class="text-64 mar">Поиск брони</div>
			<div class="buttons">
				<div class="string">
					<button class="btn-big">
						<img src="@/image/Scan_passport.svg" alt="pasport">
						<p class="text-36">Сканировать паспорт</p>
					</button>
					<button class="btn-big">
						<img src="@/image/Search_by_photo.svg" alt="search to foto">
						<p class="text-36">Поиск по фото</p>
					</button>
				</div>

				<div class="string">
					<input class="btn-in text-36" type="text" size="6" value="Поиск по номеру комнаты">
				</div>
			</div>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
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
.midle{
	margin-top: 350px;
}
.btn-in{
	background: rgba(209, 239, 255, 0.1);
	width: 100%;
	height: 100px;
	margin: 20px 0;
}
.mar{
    margin-bottom: 200px;
}
footer{
	height: 200px;
}
</style>