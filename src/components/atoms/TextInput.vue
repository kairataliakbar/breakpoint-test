<template>
  <label>
    <p class="input-label">{{ label }}</p>

    <div :class="['wrapper-input', error && 'error']">
      <input v-model="model" :type="type" />
    </div>

    <p v-if="error" class="error">{{ error }}</p>
  </label>
</template>

<script>
export default {
  name: 'TextInput',
  model: {
    event: 'input',
    props: 'value',
  },
  props: {
    type: {
      type: String,
      default: 'text',
    },
    label: {
      type: String,
      default: '',
    },
    error: {
      type: String,
      default: '',
    },
    value: {
      type: [String, Number],
      default: '',
    },
  },
  computed: {
    model: {
      get() {
        return this.value
      },
      set(value) {
        this.$emit('input', value)
      },
    },
  },
}
</script>

<style lang="scss" scoped>
$c-error: #db6969;

label {
  display: block;
  margin-bottom: 24px;

  .input-label {
    font-family: Arial;
    font-size: 14px;
    font-weight: bold;
    text-decoration: none solid rgb(0, 0, 0);
    color: #000;
    margin-bottom: 12px;
  }

  .wrapper-input {
    height: 48px;

    > input {
      width: 100%;
      height: 100%;
      font-family: Arial;
      font-size: 14px;
      color: #000;
      padding: 0 16px;
      border: 1px solid #f7f7f7;
      border-radius: 3px;
      background-color: #f7f7f7;
      outline: none;
      transition: 0.3s;
    }

    &.error {
      > input {
        border-color: $c-error;
      }
    }
  }
  .error {
    font-family: Arial;
    font-size: 12px;
    color: $c-error;
    margin-top: 3px;
  }
}
</style>
