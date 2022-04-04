<template>
  <div class="footer">
    <a href="http://marvel.com">Data provided by Marvel. © 2022 MARVEL</a>
    <p>© {{ currentYear }}</p>
  </div>
</template>

<script>
export default {
  name: "PageFooter",
  computed: {
    currentYear() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped>
.footer {
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: black;
}
a {
  color: white;
}
</style>
