<template>
	<my-header>Оплата</my-header>
    <div class="container">
		<div class="midle">
			<div class="midle-icon">
				<img class="icon" src="@/image/Done.svg" alt="card-done">
				<p class="text-48 mar">Вами успешно оплачена сумма</p>
				<p class="text">6 450 RUB</p>
			</div>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn green" href="/#/64">
					<p class="text-42">Далее</p>
				</a>
			</div>
			<div class="string">
				<a class="btn back" href="/#/2">
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
	margin-bottom: 60px;
}
.icon{
	display: block;
	margin: auto;
	margin-bottom: 120px;
	widows: 274px;
	height: 274px;
}
.text{
	font-weight: 600;
	font-size: 60px;
	line-height: 65.5px;
	color: #fff;
	text-align: center;
}
</style>