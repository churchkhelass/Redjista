<template>
	<my-header>Правила проживания в отеле</my-header>
	<div class="container">
		<div class="midle mar">
			<div class="midle-icon">
				<div class="string">
					<div class="grup-icon">
						<img class="icon" src="@/image/Rule_1.svg" alt="card-done">
						<p class="text-32">Время заезда - 14:00</p>
					</div>
					<div class="grup-icon">
						<img class="icon" src="@/image/Rule_4.svg" alt="card-done">
						<p class="text-32">Завтрак с  07:30 до 10:30</p>
					</div>
				
					<div class="grup-icon">
						<img class="icon" src="@/image/Rule_2.svg" alt="card-done">
						<p class="text-32">Время выезда - 12:00</p>
					</div>
					<div class="grup-icon">
						<img class="icon" src="@/image/Rule_5.svg" alt="card-done">
						<p class="text-32">Проживание с домашними<br>животными не разрешается</p>
					</div>
				
					<div class="grup-icon">
						<img class="icon" src="@/image/Rule_3.svg" alt="card-done">
						<p class="text-32">Курение не разрешается,<br>в т.ч. электронных сигарет</p>
					</div>
					<div class="grup-icon">
						<img class="icon" src="@/image/Rule_6.svg" alt="card-done">
						<p class="text-32">Разведение открытого огня не<br>разрешается, в т.ч. свечи и т.п.</p>
					</div>
				</div>
			</div>
			<p class="text-42">Нажимая “Подписать” вы прочли и согласны с правилами проживания</p>
		</div>
	</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn green" href="/#/">
					<p class="text-42">Подписать</p>
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
	margin-top: 180px;
}
.midle-icon{
	margin-bottom: 200px;
}
.icon{
	display: block;
	margin: auto;
	margin-bottom: 50px;
	width: 80px;
	height: 80px;
}
.grup-icon{
	padding: 40px 0;
	width: 50%;
}
.string{
	display: flex;
	flex-wrap: wrap;
}
</style>