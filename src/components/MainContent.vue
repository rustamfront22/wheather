<template>
  <div class="main-content" v-if="getFullWeather">
    <div class="main-content-left">
        <img :src="require(`@/assets/img/${main}.svg`)" alt="">
        <span class="temp">{{Math.round(current.temp)}}°</span>
        <span class="today">Сегодня</span>
        <span class="date">Время: {{new Date(current.dt * 1000).getHours()}}:{{new Date(current.dt * 1000).getMinutes()}}</span>
        <span class="city">Город: {{city}}</span>
    </div>
    <div class="main-content-right">
        <img src="@/assets/img/bg.png" alt="">
        <div>
            <img src="@/assets/img/temp.svg" alt="">
            <span class="title">Температура</span>
            <span class="info">{{Math.round(current.temp)}}° - ощущается как {{Math.round(current.feels_like)}}°</span>
        </div>
        <div>
            <img src="@/assets/img/press.svg" alt="">
            <span class="title">Давление</span>
            <span class="info">{{current.pressure}} мм ртутного столба - нормальное</span>
        </div>
        <div>
            <img src="@/assets/img/precip.svg" alt="">
            <span class="title">Осадки</span>
            <span class="info">{{current.humidity}}%</span>
        </div>
        <div>
            <img src="@/assets/img/wind.svg" alt="">
            <span class="title">Ветер</span>
            <span class="info">{{Math.round(current.wind_speed)}} м/с юго-запад - легкий ветер</span>
        </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    computed: {
        ...mapGetters(['current', 'city', 'main', 'icon']),
        ...mapState(['getFullWeather']),
    },
    methods: {
        ...mapActions(['getWeather'])
    },
    created() {
        this.getWeather('Chirchiq')
    }
}
</script>

<style>

</style>