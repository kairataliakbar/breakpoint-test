<template>
  <MainTemplate />
</template>

<script>
import MainTemplate from './components/templates/MainTemplate.vue'

export default {
  name: 'App',
  components: {
    MainTemplate,
  },
}
</script>

<style lang="scss">
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin-block-start: 0px;
  margin-block-end: 0px;
}
ul,
ol,
li {
  list-style: none;
  margin: 0;
  padding-left: 0;
}
a {
  text-decoration: none;
}

p {
  margin: 0;
  padding: 0;
}

ul {
  padding: 0;
}
body {
  * {
    box-sizing: border-box;
  }  
}
</style>
