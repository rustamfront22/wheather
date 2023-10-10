<template>
    <header class="header">
        <nav class="header-nav">
            <a href="#">
                <img src="@/assets/img/logo.svg" alt="">
                VUE WEATHER
            </a>
            <input 
                type="text" placeholder="Выбрать город"
                v-model="city"
                @keydown.enter="getWeather(city)"
            >
        </nav>
    </header>
</template>

<script>
    import { mapActions } from "vuex";
    export default {
        data() {
            return {
                city: ''
            }
        },
        methods: {
            ...mapActions(['getWeather'])
            // setWeather(){
            //     this.$store.dispatch('getWeather', this.city)
            // }
        }
    }
</script>

<style lang="scss" scoped>

</style>