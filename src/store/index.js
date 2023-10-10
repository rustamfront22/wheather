import axios from 'axios';
import { createStore } from 'vuex'

export default createStore({
  state: {
     apiKey: '852fea6c8191e19d3d72f836adf3521f',
     getFullWeather: null
  },
  getters: {
      current(state){
        return state.getFullWeather.current
      },
      daily(state){
        return state.getFullWeather.daily
      },
      city(state){
        return state.getFullWeather.name
      },
      main(state){
        return state.getFullWeather.current.weather[0].main
      }
  },
  mutations: {
    getWeather(state, payload){
      state.getFullWeather = payload
    }
  },
  actions: {
      async getWeather({commit, state}, city){
        try {
          let res = await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${state.apiKey}`)
          let weather = res.data[0]
          let {lat, lon, name} = weather
          let res2 = await axios.get(`https://api.openweathermap.org/data/2.8/onecall?exclude=minutely,hourly&lat=${lat}&lon=${lon}&lang=ru&units=metric&appid=${state.apiKey}`)
          let allData = {...res2.data, name}
          commit('getWeather', allData)
        } catch (error) {
          console.log(error, 'Произошла ошибка при получении погоды');
        }
      }
  },
})











