<template>
  <form @submit.prevent.stop="onSubmit">
    <TextInput v-model="email" label="E-mail" type="email" />

    <TextInput v-model="password" label="Password" type="password" />

    <Button>Login</Button>
  </form>
</template>

<script>
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
    }
  },
  methods: {
    onSubmit() {
      console.log(this.email, this.password)
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
