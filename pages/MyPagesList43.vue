<template>
	<my-header>Оплата</my-header>
	<div class="top-midle">
		<img class="pagination" src="@/image/pagination4.svg" alt="3/5 завершено">
	</div>
	<div class="container">
		<div class="midle mar">
			<div class="midle-icon">
				<img class="icon" src="@/image/Present_card.svg">
				<p class="text-48">Предъявите, пожалуйста, карту, по которой была произведена предоплата за номер</p>
			</div>
			<div class="forma mar">
				<div class="block-form">
					<div class="string marker">
						<div class="text-form">Проживание</div>
						<div class="text-form server"><!--backend-->6 250 RUB</div>
					</div>
					<div class="string marker">
						<div class="text-form">Питание</div>
						<div class="text-form server"><!--backend-->200 RUB</div>
					</div>
					<hr>
					<div class="string marker">
						<div class="text-form text-up">Стоимость</div>
						<div class="text-form text-up server"><!--backend-->6 450 RUB</div>
					</div>
				</div>
			</div>
			<div class="bank">
				<div class="string">
					<img class="help-img" src="@/image/Visa_Inc._logo.svg" alt="">
					<img class="help-img" src="@/image/Mastercard-logo.svg" alt="">
					<img class="help-leng" src="@/image/Android_Pay_logo.svg" alt="">
					<img class="help-img" src="@/image/Apple_Pay_logo.svg" alt="">
					<img class="help-img" src="@/image/mir-logo-h14px.svg" alt="">
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
	margin-top: 150px;
}
footer{
	height: 200px;
}
.icon{
	display: block;
	margin: auto;
	margin-bottom: 60px;
	width: 274px;
	height: 274px;
}
/*-----forma-----------------------------------------------------------------------------------------------------*/
.forma{
	background-color: #889FAB;
	border-radius: 5px;
	margin-bottom: 130px;
}
.block-form{
	padding: 20px;
}
.text-form{
	font-weight: 400;
	font-size: 36px;
	line-height: 41px;
	color: #fff;
	text-align: left;
	opacity: 0.7;
}
.server{
	text-align: right!important;
	opacity: 1!important;
}
.text-up{
	opacity: 1!important;
	font-size: 40px;
	line-height: 46px;
}
.marker{
	margin: 40px 25px;
}
hr {
	border: none;
	border-top: 5px dotted #fff;
	opacity: 0.3;
	height: 1px;
	width: 98%;
}
</style>