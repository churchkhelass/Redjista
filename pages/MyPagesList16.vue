<template>
<my-header>Сканирование документов</my-header>
<div class="container">
    <div class="midle">
        <div class="midle-icon">
            <img class="icon" src="@/image/Push.svg" alt="(!)">
            <p class="text-64">Вы уверены, что хотите прервать процесс заселения?</p>
        </div>
    </div>
</div>
<footer><div class="container">
    <div class="buttons">
			<div class="string">
				<a class="btn btn-outline" href="/#/2">
					<p class="text-42">Да</p>
				</a>
				<a class="btn" href="/#/2">
					<p class="text-42">Нет</p>
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
.icon{
	display: block;
	margin: auto;
	margin-bottom: 120px;
}
.midle{
	margin-top: 400px;
}
</style>