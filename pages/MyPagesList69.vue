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
					<img src="@/image/No_Picture.svg" alt="chek_out">
					<p class="text-36">Проживание <br>с животными </p>
					<div class="kolichestvo">{{Dkolichestvo}}</div>
					<div class="servise">
						<button class="btn-servise pb-10" @click="DreturnKol">-</button>
						<p class="text-42 pt-10">3000₽</p>
						<button class="btn-servise" @click="DaddKol">+</button>
					</div>
				</div>
			</div>

            <div class="string">
				<div class="btn-big">
					<img src="@/image/No_Picture.svg" alt="chek_out">
					<p class="text-36">Трансфер</p>
					<div class="kolichestvo">{{Ekolichestvo}}</div>
					<div class="servise">
						<button class="btn-servise pb-10" @click="EreturnKol">-</button>
						<p class="text-42 pt-10">2000₽</p>
						<button class="btn-servise" @click="EaddKol">+</button>
					</div>
				</div>
				<div class="btn-big">
					<img src="@/image/No_Picture.svg" alt="chek_out">
					<p class="text-36">Посещение смотровой площадки</p>
					<div class="kolichestvo">{{Fkolichestvo}}</div>
					<div class="servise">
						<button class="btn-servise pb-10" @click="FreturnKol">-</button>
						<p class="text-42 pt-10">200₽</p>
						<button class="btn-servise" @click="FaddKol">+</button>
					</div>
				</div>
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
			Dkolichestvo: 0,
			Ekolichestvo: 0,
			Fkolichestvo: 0,
		}
  	},
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

		DaddKol(){
		this.Dkolichestvo +=1;
		},
		DreturnKol(){
		this.Dkolichestvo -=1;
		},

		EaddKol(){
		this.Ekolichestvo +=1;
		},
		EreturnKol(){
		this.Ekolichestvo -=1;
		},

		FaddKol(){
		this.Fkolichestvo +=1;
		},
		FreturnKol(){
		this.Fkolichestvo -=1;
		},
  	}
} 
</script>

<style scoped>
.btn-big{
    justify-content: space-between;
	position: relative;
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
.midle{
    margin-top: 50px;
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