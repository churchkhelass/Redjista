<template>
	<my-header>Редактирование регистрационной карты</my-header>
    <div class="container">
		<div class="midle mar">
			<div class="midle-string">
				<p class="text">Кем выдан и когда</p>
				<textarea class="text-str" rows="2" placeholder="УФМС №70 по Санкт-Петербургу и Ленинградской области 20.06.2012"></textarea>
			</div>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
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
.mar{
	margin-top: 200px;
}
.text{
	font-weight: 400;
	font-size: 60px;
	line-height: 69px;
	color: #fff;
}
.text-str{
	background: rgba(209, 239, 255, 0.2);
	padding: 40px;
	font-weight: 400;
	font-size: 40px;
	line-height: 50px;
	color: #fff;
	width: 100%;
}
.text-str::placeholder{
	color: #fff;
	opacity: 0.5;
}
.inform{
	padding: 0;
	align-items: center;
}
.top{
	display: flex;
	align-items: center;
}
</style>