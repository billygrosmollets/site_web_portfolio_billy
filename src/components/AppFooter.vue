<template>
  <footer id="end">
    <p class="connect-text">© Clément Billy 2025</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
}
</script>

<style scoped>
#end {
  font-size: 1.5rem;
  text-align: center;
  color: rgb(158, 149, 137);
  padding: 2rem 0;
  margin-top: auto;
}

[data-theme='light'] #end {
  color: rgb(102, 102, 102);
}
</style>
