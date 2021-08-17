<template>
  <div v-if="show" class="modal-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ModalContainer',
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
.modal-container {
  background: #fff;
  box-shadow: 0 0 30px rgba(53, 56, 161, 0.07);
  border-radius: 15px;
  z-index: 600;
  position: relative;
  padding: 16px;
  animation: animModal 0.4s cubic-bezier(0.11, 0.72, 0.56, 1.28);

  @media (max-width: 780px) {
    margin: 60px auto;
  }
}
@keyframes animModal {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
