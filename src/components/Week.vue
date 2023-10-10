<template>
<div class="weeks" v-if="getFullWeather">
    <h2>На неделю</h2>
    <div class="weeks-content">
        <WeekDay 
            v-for="(day,idx) in daily"
            :key="idx"
            :day="day"
        />
    </div>
</div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import WeekDay from './WeekDay.vue'
export default {
    components: { WeekDay },
    computed: {
        ...mapState(['getFullWeather']),
        ...mapGetters(['daily'])
    }
}
</script>