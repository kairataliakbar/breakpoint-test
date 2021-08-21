<template>
  <button @click="$emit('click')">
    <i v-if="iconName" :class="iconName"></i>
    <Loader v-if="isLoading" class="loading" />
    <slot></slot>
  </button>
</template>

<script>
import Loader from './Loader.vue'

export default {
  name: 'Button',
  components: {
    Loader,
  },
  props: {
    iconName: {
      type: String,
      default: '',
    },
    isLoading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
$c-main: #5988d9;

button {
  font-family: Arial;
  font-size: 20px;
  font-weight: 600;
  color: white;
  height: 48px;
  background-color: $c-main;
  border: none;
  border-radius: 10px;
  padding: 0 16px;
  margin: 0;
  transition: all 80ms ease-in;
  text-decoration: none;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    background-color: #5b86d0;
  }

  &:active {
    transform: scale(0.95);
  }

  > i {
    width: 36px;
    height: 36px;
    margin-right: 15px;
  }

  .loading {
    margin-right: 10px;
  }

  .profile {
    background-image: url('../../assets/svg/profile.svg');
  }
}
</style>
