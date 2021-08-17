<template>
  <div class="like">
    <i class="like__icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Like',
}
</script>

<style lang="scss" scoped>
$c-success: #28a745;

.like {
  font-family: Arial;
  font-size: 20px;
  font-weight: 600;
  color: white;
  height: 48px;
  background-color: $c-success;
  border: none;
  border-radius: 10px;
  padding: 0 16px;
  text-decoration: none;
  text-align: center;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;

  &__icon {
    display: block;
    width: 32px;
    height: 32px;
    background-image: url('../../assets/svg/like.svg');
    margin-right: 15px;
  }
}
</style>
