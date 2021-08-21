<template>
  <div class="modal-wrapper">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ModalWrapper',
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 500;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  @media (max-width: 780px) {
    display: block;
    overflow: auto;
  }
}
</style>
