<template>
	<my-header>Получение цифрового ключа</my-header>
    <div class="container">
		<div class="midle mar">
			<div class="string">
				<div class="grup">
					<img class="qr-kod" src="@/image/creambee-qrcode_app_1.svg" alt="">
					<img class="store" src="@/image/App_Store_rus.svg" alt="">
				</div>
				<div class="grup">
					<img class="qr-kod" src="@/image/creambee-qrcode_android_1.svg" alt="">
					<img class="store" src="@/image/Google_Play_rus.svg" alt="">
				</div>
			</div>
			<p class="text-48 opac">Для получения цифрового ключа установите мобильное приложение на ваш смартфон.<br><br></p>
			<p class="text-64">Пожалуйста, считайте QR-код, соответствующий вашему смартфону!</p>	
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
	margin-top: 350px;
}
.opac{
	opacity: 0.5;
}
.grup{
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	margin-bottom: 100px;
}
.qr-kod{
	margin-bottom: 40px;
}
.store{
	margin: 20px;
}
footer{
	height: 200px;
}
</style>