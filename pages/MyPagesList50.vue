<template>
	<my-header>Оценка работы терминала</my-header>
	<div class="container">
		<div class="midle">
			<div class="midle-icon">
				<p class="text-64 mar">Пожалуйста, оцените использование нашего киоска</p>
				<div class="block-ratio">
					<div class="block-text"><p class="text">Удобство</p></div>
					<div class="ratio">
					</div>
				</div>
				<div class="block-ratio">
					<div class="block-text"><p class="text">Скорость работы</p></div>
					<div class="ratio">
					</div>
				</div>
				<div class="block-ratio">
					<div class="block-text"><p class="text">Дизайн / Доступность</p></div>
					<div class="ratio">
					</div>
				</div>
			</div>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn green" href="/#/">
					<p class="text-42">Оценить</p>
				</a>
			</div>
		</div>
	</div>
</footer>
</template>

<script>

</script>

<style scoped>
footer{
	height: 200px;
}
.block-ratio{
	display: flex;
	justify-content: space-between;
	widows: 100%;
	margin: 20px 0;
}
.mar{
	margin: 0 120px 80px 120px;
}
.midle{
	margin-top: 200px;
}
.icon{
	display: block;
	margin: auto;
	margin-bottom: 120px;
	widows: 274px;
	height: 274px;
}
.text{
	font-weight: 300;
	font-size: 40px;
	line-height: 65.5px;
	color: #fff;
	text-align: center;
	opacity: 0.7;
}
/*--------RAting-------------------------------------------------*/
</style>