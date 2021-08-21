<template>
  <main>
    <div class="container">
      <Button @click="onOpenAuthModal" icon-name="profile">Auth</Button>

      <Like>{{ success }}</Like>

      <Dislike>{{ fails }}</Dislike>

      <ModalAuth
        v-if="authModalShow"
        :show="authModalShow"
        @close="onCloseAuthModal"
        @on-submit="onSubmit"
      />
      <ModalSuccess
        v-if="successModalShow"
        :show="successModalShow"
        @close="onCloseSuccessModal"
      />
    </div>
  </main>
</template>

<script>
import { mapGetters } from 'vuex';

import ModalAuth from '../organisms/ModalAuth.vue'
import ModalSuccess from '../organisms/ModalSuccess.vue'

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
    ModalSuccess,
  },
  data() {
    return {
      authModalShow: false,
      successModalShow: false,
    }
  },
  computed: {
    ...mapGetters({
      success: 'getSuccess',
      fails: 'getFails',
    }),
  },
  methods: {
    onOpenAuthModal() {
      this.authModalShow = true
    },
    onCloseAuthModal() {
      this.authModalShow = false
    },
    onOpenSuccessModal() {
      this.successModalShow = true
    },
    onCloseSuccessModal() {
      this.successModalShow = false
    },
    onSubmit() {
      this.onCloseAuthModal()
      this.onOpenSuccessModal()
      setTimeout(() => {
        this.successModalShow = false
      }, 3000)
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
