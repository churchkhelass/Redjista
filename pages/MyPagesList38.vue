<template>
	<my-header>Регистрационная карта</my-header>
	<div class="top-midle">
		<img class="pagination" src="@/image/pagination3.svg" alt="2/5 завершено">
	</div>
	<div class="container">
		<div class="midle mar">
			<div class="forma">
				<div class="block-form">
					<div class="string marker">
						<div class="text-form">ФИО</div>
						<div class="grup-edit">
							<div class="text-form server">Иванов Дмитрий Прокофьевич</div>
							<a class="edit-image" href="/#/"><img class="size-img" src="@/image/edit_symbol.svg" alt="изм."></a>
						</div>
					</div>
					<div class="string marker">
						<div class="text-form">Серия, № паспорта</div>
						<div class="grup-edit">
							<div class="text-form server">4012 565656</div>
							<a class="edit-image" href="/#/"><img class="size-img" src="@/image/edit_symbol.svg" alt="изм."></a>
						</div>
					</div>
					<div class="string marker">
						<div class="text-form">Кем выдан и когда</div>
						<div class="grup-edit">
							<div class="text-form server">УФМС №70 по Санкт-Петербургу и Ленинградской области 20.06.2012</div>
							<a class="edit-image" href="/#/"><img class="size-img" src="@/image/edit_symbol.svg" alt="изм."></a>
						</div>
					</div>
					<hr>
					<div class="string marker">
						<div class="text-form">Дата заезда</div>
						<div class="text-form server">19 Июня 2019 </div>
					</div>
					<div class="string marker">
						<div class="text-form">Дата выезда</div>
						<div class="text-form server">21 Июня 2019</div>
					</div>
					<div class="string marker">
						<div class="text-form">Категория номера</div>
						<div class="text-form server">Standard</div>
					</div>
					<div class="string marker">
						<div class="text-form">Количество гостей</div>
						<div class="text-form server">2</div>
					</div>
					<hr>
					<div class="string marker">
						<div class="text-form text-up">Стоимость</div>
						<div class="text-form text-up server">6 450 RUB</div>
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
.size-img{
	width: 25px;
	height: 25px;
}
.forma{
	background-color: #889FAB;
	border-radius: 5px;
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
.edit-image{
	position: absolute;
	right: -35px;
	top: 5px;
}
.grup-edit{
	display: flex;
	max-width: 500px;
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
	position: relative;
}
hr {
	border: none;
	border-top: 5px dotted #fff;
	opacity: 0.3;
	height: 1px;
	width: 98%;
}
</style>