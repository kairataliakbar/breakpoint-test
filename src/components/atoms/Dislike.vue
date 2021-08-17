<template>
  <div class="dislike">
    <i class="dislike__icon"></i>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'Dislike',
}
</script>

<style lang="scss" scoped>
$c-fail: #dc3545;

.dislike {
  font-family: Arial;
  font-size: 20px;
  font-weight: 600;
  color: white;
  height: 48px;
  background-color: $c-fail;
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
    background-image: url('../../assets/svg/dislike.svg');
    margin-right: 15px;
  }
}
</style>
