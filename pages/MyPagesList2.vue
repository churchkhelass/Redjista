<template>
<header class="top">
	<div class="container">
		<div class="inform">
			<div><p class="top-inform">Важный вопрос</p></div>
			<div class="string">
				<a href="/#/inform"><img class="help-img" src="@/image/help.svg" alt="information"></a>
				<a href="/#/2"><img class="help-leng" src="@/image/RU.svg" alt="lenguage"></a>
			</div>
		</div>
	</div>
</header>
<div class="container">
	<div class="midle">
		<div class="buttons">
			<div class="string">
				<a class="btn-big" href="#/3" >
					<img src="@/image/check_in.svg" alt="check_in">
					<p class="text-31">Заселение в отель</p>
				</a>
				<a class="btn-big">
					<img src="@/image/additional_key.svg" alt="additional key">
					<p class="text-31">Получить дополнительный ключ</p>
				</a>
			</div>

			<div class="string">
				<a class="btn-big" href="#/56">
					<img src="@/image/chek_out.svg" alt="chek_out">
					<p class="text-31">Выезд из отеля</p>
				</a>
				<a class="btn-big">
					<img src="@/image/Receptionist.svg" alt="Receptionist">
					<p class="text-31">Связь с портье</p>
				</a>
			</div>

			<div class="string">
				<a class="btn-big">
					<img src="@/image/Additional_services.svg" alt="Additional_services">
					<p class="text-31">Дополнительные услуги</p>
				</a>
				<a class="coming btn-big">
					<img class="soon" src="@/image/coming_soon.png" alt="coming soon">
					<img src="@/image/Info.svg" alt="Info">
					<p class="text-31">Справочная информация</p>
				</a>
			</div>

		</div>
	</div>
</div>   
</template>
<script>

</script>

<style scoped>
.midle{
    margin-top: 150px;
}
.coming{
    position: relative;
}
.soon{
    position: absolute;
    left: -10px;
}
</style>