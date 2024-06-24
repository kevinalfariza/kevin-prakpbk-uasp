<!-- src/App.vue -->
<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-red text-white">
      <q-toolbar>
        <q-avatar size="50px" round>
          <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/cristiano-ronaldo-icon.png">
        </q-avatar>
        <q-toolbar-title>kevinalfariza</q-toolbar-title>
        <q-btn-dropdown
          label="Tugas"
          color="primary"
          text-color="white"
          no-caps
        >
          <q-list>
            <q-item clickable v-ripple to="/assignment/1">
              <q-item-section>Tugas 1</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/2">
              <q-item-section>Tugas 2</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/3">
              <q-item-section>Tugas 3</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/4">
              <q-item-section>Tugas 4</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/5">
              <q-item-section>Tugas 5</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/6">
              <q-item-section>Tugas 6</q-item-section>
            </q-item>
            <q-item clickable v-ripple to="/assignment/7">
              <q-item-section>Tugas 7</q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <div id="app">
        <router-view />
      </div>
    </q-page-container>

    <q-footer class="bg-red text-white">
      <q-toolbar>
        <q-toolbar-title>kevinalfariza</q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.weather-check-container {
  background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ7YdvjJrS_OMvpuzKezR9kv4qFsca5DMQ8w&s');
  background-size: cover;
  background-position: center;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
.q-header {
  background-color: var(--q-primary);
  color: white;
}

.q-footer {
  background-color: var(--q-primary);
  color: white;
}

.q-btn--primary {
  background-color: var(--q-primary);
  color: white;
}

.q-btn-dropdown__label {
  font-size: 16px;
}

.q-list .q-item {
  font-size: 16px;
  color: black;
}
</style>
