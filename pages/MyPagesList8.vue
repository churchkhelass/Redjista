<template>
<my-header>Сканирование паспорта</my-header>
<div class="top-midle">
    <img class="pagination" src="@/image/pagination.svg" alt="начало">
</div>
<div class="container">
    <div class="midle">
        <div class="midle-icon">
            <p class="text-48">Посмотрите, пожалуйста, как надо <span style="font-weight: bold;">сканировать главную</span> страницу паспорта!</p>
            <video autoplay loop width="100%" height="769px"><source src="@/video/pass_ru_1.mp4" type="video/mp4"></video>
			<p class="text-64">Когда приложите паспорт к считывателю нажмите на кнопку!</p>
        </div>
    </div>
</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn" href="/#/9">
					<p class="text-42">Сканировать</p>
				</a>
			</div>
			<div class="string">
				<a class="btn back" href="/#/7">
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
video{width: "100%"; height: "769px"; margin: 20px 0;}
</style>