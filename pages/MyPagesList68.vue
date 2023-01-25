<template>
	<my-header>Дополнить проживание</my-header>
<div class="container">
	<div class="midle">
		<div class="buttons">
			<div class="string">
				<div class="btn-big">
					<img src="@/image/No_Picture.svg" alt="check_in">
					<p class="text-36">Завтрак шведский стол<br>по системе a la carte  </p>
					<div class="kolichestvo">{{Akolichestvo}}</div>
					<div class="servise">
						<button class="btn-servise pb-10" @click="AreturnKol">-</button>
						<p class="text-42 pt-10">1000₽</p>
						<button class="btn-servise" @click="AaddKol">+</button>
					</div>
				</div>
				<div class="btn-big">
					<img src="@/image/No_Picture.svg" alt="additional key">
					<p class="text-36">Завтрак для детей <br>с 3 до 12 лет</p>
					<div class="kolichestvo">{{Bkolichestvo}}</div>
					<div class="servise">
						<button class="btn-servise pb-10" @click="BreturnKol">-</button>
						<p class="text-42 pt-10">600₽</p>
						<button class="btn-servise" @click="BaddKol">+</button>
					</div>
				</div>
			</div>

			<div class="string">
				<div class="btn-big">
					<img src="@/image/No_Picture.svg" alt="chek_out">
					<p class="text-36">Сет ужин <br>в ресторане L’eclat </p>
					<div class="kolichestvo">{{Ckolichestvo}}</div>
					<div class="servise">
						<button class="btn-servise pb-10" @click="CreturnKol">-</button>
						<p class="text-42 pt-10">1990₽</p>
						<button class="btn-servise" @click="CaddKol">+</button>
					</div>
				</div>
				<div class="btn-big">
					<img src="@/image/No_Picture.svg" alt="Receptionist">
					<p class="text-36">Весь каталог <br>доп. услуг</p>
					<a class="servise jc-c" href="/#/69">
						<div class="text-42">Открыть</div>
					</a>
				</div>
			</div>
		</div>


		<div class="form-itog">
			<div class="string">
				<div class="text-42">Стоимость вашего проживания:</div>
				<div class="text-42">5₽</div>
			</div>
			<div class="string">
				<div class="text-42">Стоимость заказанных доп. услуг:</div>
				<div class="text-42">5₽</div>
			</div>
			<div class="string">
				<div class="text-42">ИТОГО к оплате:</div>
				<div class="text-42">10₽</div>
			</div>
		</div>
	</div>
</div>
<footer>
	<div class="container">
		<div class="buttons">
			<div class="string">
				<a class="btn white" href="/#/43">
					<p class="text-42">Перейти к оплате</p>
                </a>
			</div>
			<div class="string">
				<a class="btn back" href="/#/38">
					<p class="text-42">Назад</p>
                </a>
			</div>
		</div>
	</div>
</footer>
</template>

<script>
export default {
	/* eslint-disable */
  data(){
		return{
			Akolichestvo: 0,
			Bkolichestvo: 0,
			Ckolichestvo: 0,
		}
  	},
	useEslint: false,
  	methods: {
		AaddKol(){
		this.Akolichestvo +=1;
		},
		AreturnKol(){
		this.Akolichestvo -=1;
		},

		BaddKol(){
		this.Bkolichestvo +=1;
		},
		BreturnKol(){
		this.Bkolichestvo -=1;
		},

		CaddKol(){
		this.Ckolichestvo +=1;
		},
		CreturnKol(){
		this.Ckolichestvo -=1;
		},
  	}
}
</script>

<style scoped>
.btn-big{
	position: relative;
	/* filter: blur(3px); */
}
.kolichestvo{
	position: absolute;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	padding-top: 30%;
	background: rgba(209, 239, 255, 0.4);
	/* display: none; */
	font-size: 170px;
	color: #fff;
}
.jc-c{
	justify-content: center!important;
}
.midle{
    margin-top: 50px;
}
.form-itog{
	margin: 100px 0;
	background-color: rgba(209, 239, 255, .1);
	border-radius: 10px;
	padding: 20px 10px;
}
.servise{
	display: flex;
	flex-wrap: nowrap;
	justify-content: space-between;
	align-items: center;
	border: 2px solid #fff;
	border-radius: 6px;
	width: 260px;
	height: 60px;
	padding: 0 20px;
}
.btn-servise{
	background: none;
	font-size: 60px;
	line-height: 10px;
	color: #fff;
	z-index: 99;
}
.pt-10{
	padding-top: 10px;
}
.pb-10{
	padding-bottom: 10px;
}
</style>