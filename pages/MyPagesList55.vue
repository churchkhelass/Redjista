<template>
	<my-header>Выбор типа удостоверения личности</my-header>
    <div class="container">
		<div class="midle">
			<p class="text-48 mar">Выберите, пожалуйста, тип вашего удостоверения личности</p>
			<div class="buttons mar2">
				<div class="string">
					<button class="btn-big">
						<img class="pasport" src="@/image/Pasport_RF.svg" alt="">
						<p class="text-36">Паспорт гражданина РФ</p>
					</button>
					<button class="btn-big">
						<img class="pasport" src="@/image/International_pasport.svg" alt="">
						<p class="text-36">Международный паспорт</p>
					</button>
				</div>
				<div class="string">
					<button class="btn-big">
						<img class="pasport_gorizont" src="@/image/ID_card.svg" alt="">
						<p class="text-36">ID card</p>
					</button>
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
.mar{
	margin-top: 200px;
}
.mar2{
	margin-top: 100px;
}
.pasport{
	margin-bottom: 40px;
	width: 122px;
	height: 152px;
}
.pasport_gorizont{
	margin-bottom: 40px;
	width: 150px;
	height: 106px;
}
footer{
	height: 200px;
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