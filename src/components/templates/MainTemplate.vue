<template>
  <main>
    <div class="container">
      <Button @click="onOpenModal">Auth</Button>

      <Like>12</Like>

      <Dislike>10</Dislike>
    </div>
  </main>
</template>

<script>
import Button from '../atoms/Button.vue'
import Like from '../atoms/Like.vue'
import Dislike from '../atoms/Dislike.vue'

export default {
  name: 'MainTemplate',
  components: {
    Button,
    Like,
    Dislike
  },
  methods: {
    onOpenModal() {
      console.log('open modal')
    },
  },
}
</script>

<style lang="scss">
main {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  .container {
    width: 400px;
    margin: 60px auto 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
}
</style>
