<template>
  <div v-if="show" class="modal-mask" @click="$emit('click')"></div>
</template>

<script>
export default {
  name: 'ModalMask',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-mask {
  background: black;
  z-index: 500;
  opacity: 0.2;
  animation: animMask 0.5s;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
@keyframes animMask {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.2;
  }
}
</style>
