<template>
  <ModalWrapper>
    <ModalContainer :show="show">
      <button @click="$emit('close')">❌</button>
      Hello
    </ModalContainer>
    <ModalMask :show="show" @click="$emit('close')" />
  </ModalWrapper>
</template>

<script>
import ModalWrapper from '../molecules/Modal/ModalWrapper'
import ModalContainer from '../molecules/Modal/ModalContainer'
import ModalMask from '../molecules/Modal/ModalMask'

export default {
  name: 'ModalAuth',
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
