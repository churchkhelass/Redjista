<!-- <template>
    <div class="btn-big">
        <slot name="image"><img src="@/image/No_Picture.svg" alt="additional key"></slot>
        <p class="text-36"><slot></slot></p>
        <div class="kolichestvo">{{kolichestvo}}</div>
        <div class="servise">
            <button class="btn-servise pb-10" @click="returnKol">-</button>
            <p class="text-42 pt-10"><slot name="cost"></slot>₽</p>
            <button class="btn-servise" @click="addKol">+</button>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            kolichestvo: 0,
        }
    },
    methods: {
        AaddKol(){
            this.kolichestvo +=1;
        },
        AreturnKol(){
            this.kolichestvo -=1;
        }
    }
}
</script>

<style scoped>
.btn-big{
	position: relative;
}
.kolichestvo{
	position: absolute;
	left: 40%;
	top: 30%;
	font-size: 170px;
	color: #fff;
}
.jc-c{
	justify-content: center!important;
}
.btn-servise{
	background: none;
	font-size: 60px;
	line-height: 10px;
	color: #fff;
}
.pt-10{
	padding-top: 10px;
}
.pb-10{
	padding-bottom: 10px;
}
</style> -->