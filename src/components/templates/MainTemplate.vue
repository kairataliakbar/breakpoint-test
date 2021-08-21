<template>
  <main>
    <div class="container">
      <Button @click="onOpenModal" icon-name="profile">Auth</Button>

      <Like>{{ success }}</Like>

      <Dislike>{{ fails }}</Dislike>

      <ModalAuth v-if="modalShow" :show="modalShow" @close="onCloseModal" />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import ModalAuth from '../organisms/ModalAuth.vue'

import Button from '../atoms/Button.vue'
import Like from '../atoms/Like.vue'
import Dislike from '../atoms/Dislike.vue'

export default {
  name: 'MainTemplate',
  components: {
    Button,
    Like,
    Dislike,
    ModalAuth,
  },
  data() {
    return {
      modalShow: false,
    }
  },
  computed: {
    ...mapGetters({
      success: 'getSuccess',
      fails: 'getFails',
    }),
  },
  methods: {
    onOpenModal() {
      this.modalShow = true
    },
    onCloseModal() {
      this.modalShow = false
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
