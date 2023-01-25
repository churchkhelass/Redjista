<template>
<my-header>Информация о брони</my-header>
<div class="top-midle">
	<img class="pagination" src="@/image/pagination.svg" alt="начало">
</div>
<div class="container">
	<div class="midle">
		<div class="forma">
			<div class="block-form">
				<button class="verifact-form">Подтвержден</button>
				<div class="string mar">
					<div class="text-36">ФИО</div>
					<div class="text-36 baze">Иванов Дмитрий Прокофьевич</div>
				</div>
				<div class="string mar">
					<div class="text-36">Дата заезда</div>
					<div class="text-36 baze">19 Июня 2019 </div>
				</div>
				<div class="string mar">
					<div class="text-36">Дата выезда</div>
					<div class="text-36 baze">21 Июня 2019</div>
				</div>
				<div class="string mar">
					<div class="text-36">Категория номера</div>
					<div class="text-36 baze">Standard</div>
				</div>
				<div class="string mar">
					<div class="text-36">Количество гостей</div>
					<div class="text-36 baze">2</div>
				</div>
				<div class="string mar">
					<div class="text-36">Завтрак</div>
					<div class="text-36 baze">Включен</div>
				</div>
				<div class="string mar">
					<div class="text-36">Стоимость</div>
					<div class="text-36 baze">6 450 RUB</div>
				</div>
			</div>
		</div>
		<div class="person-info">
			<input type="checkbox" id="politics" onclick="check();" value="" autocomplete="off"/>
			<p class="text-48">Я согласен на обработку персональных данных </p>
		</div>
	</div>
</div>
<footer>
	<div class="container">
        <div class="buttons">
			<div class="string">
				<a class="btn btn-outline" href="/#/16">
					<p class="text-36">Отмена</p>
				</a>
				<a class="btn" href="/#/17">
					<input class="text-36 btn none" value="Подтвердить" name="submit" и disabled="">
				</a>
			</div>
			<div class="string">
				<a class="btn back" href="/#/7">
					<p class="text-36">Назад</p>
				</a>
			</div>
		</div>
	</div>
</footer>
</template>

<script scoped>
	// function check() {
	// var submit = document.getElementsByName('submit')[0];
	// if (document.getElementById('politics').checked)
	// submit.disabled = '';
	// else
	// submit.disabled = 'disabled';
	// }
</script>

<style scoped>
.forma{
	background-color: #889FAB;
	border-radius: 5px;
}
.block-form{
	padding: 20px;
}
.verifact-form{
	display: block;
	border-radius: 100px;
	padding: 12px 32px;
	background-color: #128415;
	font-weight: 500;
	font-size: 32px;
	line-height: 36.8px;
	color: #fff;
	align-items: center;
	margin: 20px 0;
}
.baze{
	text-align: right!important;
	opacity: 1!important;
}
.mar{
	margin: 40px 25px;
}
.none{
	margin: 0;
}
</style>