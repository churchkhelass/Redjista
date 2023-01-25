<template>
	<my-header>Оплата</my-header>
    <div class="container">
		<div class="midle">
            <p class="text-48 mar">Не совпадает номер карты</p>
            <p class="text">Номер карты не совпадает с картой, которая была указана при бронировании номера:</p>
            <p class="text-48 mar">**** **** **** 5152</p>
            <p class="text">Вы можете предхъявить нужную карту?</p>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn" href="/#/">
					<p class="text">Да, могу</p>
				</a>
				<a class="btn btn-outline" href="/#/">
					<p class="text">Нет</p>
				</a>
			</div>
			<div class="string">
				<a class="btn back" href="/#/">
					<p class="text">Назад</p>
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
	margin-top: 400px;
}
.mar{
	margin-bottom: 40px;
}
.icon{
	display: block;
	margin: auto;
	margin-bottom: 120px;
}
.text{
	font-weight: 300;
	font-size: 40px;
	line-height: 65.5px;
	color: #fff;
	text-align: center;
	opacity: 0.7;
}
</style>