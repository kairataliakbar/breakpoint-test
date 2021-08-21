<template>
  <form @submit.prevent.stop="onSubmit">
    <TextInput
      v-model.trim="email"
      label="E-mail"
      type="email"
      :error="errorEmail"
      @blur="checkEmail"
    />

    <TextInput
      v-model.trim="password"
      label="Password"
      type="password"
      :error="errorPassword"
      @blur="checkPassword"
    />

    <Button :is-loading="loading">Login</Button>
  </form>
</template>

<script>
import data from '../../mock/users.json'

import TextInput from '../atoms/TextInput.vue'
import Button from '../atoms/Button.vue'

export default {
  name: 'AuthForm',
  components: {
    TextInput,
    Button,
  },
  data() {
    return {
      email: '',
      password: '',

      errorEmail: '',
      errorPassword: '',

      loading: false,
    }
  },
  computed: {
    validateEmail() {
      const re = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
      return re.test(this.email)
    },
  },
  watch: {
    email() {
      this.errorEmail = ''
    },
    password() {
      this.errorPassword = ''
    },
  },
  methods: {
    checkEmail() {
      if (this.email === '') {
        this.errorEmail = 'This field is required'
      } else if (!this.validateEmail) {
        this.errorEmail = 'Not valid E-mail address'
      } else {
        this.errorEmail = ''
      }
    },
    checkPassword() {
      this.errorPassword = this.password ? '' : 'This field is required'
    },
    onSubmit() {
      this.loading = true

      const user = data.users.find((user) => user.email === this.email)

      if (user) {
        if (user.password === this.password) {
          this.$store.dispatch('incrementSuccess')
          this.$emit('on-submit')
        } else {
          this.$store.dispatch('incrementFails')
          this.errorPassword = 'Wrong password'
        }
      } else {
        this.$store.dispatch('incrementFails')
        this.errorEmail = 'Not valid E-mail address'
      }

      this.loading = false
    }
  },
}
</script>

<style lang="scss" scoped>
form {
  display: flex;
  flex-direction: column;

  > button {
    border-radius: 3px;
  }
}
</style>
