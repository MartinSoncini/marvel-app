<template>
  <div class="header">
    <img src="@/assets/marvel.svg" alt="logo de marvel" />
    <nav>
      <router-link to="/">INICIO </router-link>
      <router-link to="/characters">PERSONAJES </router-link>
      <router-link to="/comics">COMICS </router-link>
      <router-link to="/series">SERIES</router-link>
    </nav>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  position: fixed;
  top: 0;
  width: 100%;
  height: 150px;
  background-color: black;
}
img {
  width: 200px;
}
a {
  color: white;
  border: solid 1px red;
  margin: 5px;
  padding: 5px;
}
</style>
