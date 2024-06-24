<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md q-ma-md" style="max-width: 500px; margin: 0 auto;">
      <q-card-section>
        <h1>CEK CUACA</h1>

        <div class="q-gutter-y-md row items-center justify-center">
          <q-input
            color="teal"
            outlined
            v-model="city"
            label="Masukkan kota"
            @keyup.enter="fetchWeather"
          >
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
          </q-input>
          <q-btn color="red" @click="fetchWeather" label="Cari" style="margin-left: 10px;" />
        </div>

        <div class="center-content" v-if="weather">
          <p>Location: {{ weather.name }}</p>
          <p>Temperature: {{ weather.main.temp }} °C</p>
          <p>Weather: {{ weather.weather[0].description }}</p>
        </div>
        <div class="center-content" v-else-if="error">
          <p>Kota "{{ city }}" tidak ditemukan.</p>
        </div>
        <div class="center-content" v-else>
          <p>Masukkan nama kota yang ingin dicari.</p>
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
import axios from "axios";

export default {
  name: "Weather",
  data() {
    return {
      city: "", // Default city
      weather: null,
      error: false,
    };
  },
  methods: {
    async fetchWeather() {
      if (!this.city) return;
      try {
        const apiKey = "d5ab084885614f61214d0f84ea3ed977"; // Ganti dengan API key Anda
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${apiKey}&units=metric`
        );
        if (response.data.cod === 200) {
          this.weather = response.data;
          this.error = false; // Reset error state
        } else {
          this.weather = null;
          this.error = true; // Set error state
        }
      } catch (error) {
        console.error(error);
        this.weather = null;
        this.error = true; // Set error state
      }
    },
  },
};
</script>

<style>
.center-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 0 auto;
}

h1 {
  text-align: center;
}
</style>
