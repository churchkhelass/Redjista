<template>
    <header class="top">
        <div class="container">
            <div class="inform">
                <div><p class="top-inform"><slot></slot></p></div>
                <div class="string">
                    <a href="/#/2"><img class="home-img" src="@/image/home.svg" alt="home"></a>
                    <a href="/#/inform"><img class="help-img" src="@/image/help.svg" alt="information"></a>
                    <a href="/#/"><img class="help-leng" src="@/image/RU.svg" alt="lenguage"></a>
                </div>
            </div>
        </div>
	</header>
</template>

<script>
export default {
    name: 'my-header'
}
</script>

<style scoped>
.string{
    align-items: center;
}
</style>