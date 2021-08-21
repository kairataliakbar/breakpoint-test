<template>
  <ModalWrapper>
    <ModalContainer :show="show" class="success-modal">
      <div class="checkmark">
        <i></i>
      </div>
      <p>Success!</p>
    </ModalContainer>
    <ModalMask :show="show" @click="$emit('close')" />
  </ModalWrapper>
</template>

<script>
import ModalWrapper from '../molecules/Modal/ModalWrapper'
import ModalContainer from '../molecules/Modal/ModalContainer'
import ModalMask from '../molecules/Modal/ModalMask'

export default {
  name: 'ModalSuccess',
  components: {
    ModalWrapper,
    ModalContainer,
    ModalMask,
  },
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style lang="scss" scoped>
$c-main: #5988d9;
$c-success: #65b878;

.success-modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: $c-success;

  .checkmark {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 167px;
    height: 167px;
    background-color: white;
    border-radius: 50%;
    margin-bottom: 20px;

    > i {
      width: 45px;
      height: 84px;
      border: solid #65b878;
      border-width: 0 18px 18px 0;
      transform: rotate(43deg) translate(0, 10px);
      margin-left: 25px;
      margin-bottom: 25px;
    }
  }

  > p {
    font-family: Arial;
    font-size: 30px;
    font-weight: bold;
    color: white;
    text-transform: uppercase;
    text-align: center;
  }
}
</style>
