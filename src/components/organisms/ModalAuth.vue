<template>
  <ModalWrapper>
    <ModalContainer :show="show" class="auth-modal">
      <button @click="$emit('close')">
        <i></i>
      </button>

      <div class="auth-modal__image">
        <img src="../../assets/svg/profile.svg" alt="auth" />
      </div>

      <div class="auth-modal__content">
        <AuthForm @on-submit="$emit('on-submit')" />

        <div class="auth-modal__links">
          <a href="#">Forgot password?</a>
          <i></i>
          <a href="#">User registration</a>
        </div>
      </div>
    </ModalContainer>
    <ModalMask :show="show" @click="$emit('close')" />
  </ModalWrapper>
</template>

<script>
import AuthForm from '../organisms/AuthForm.vue'

import ModalWrapper from '../molecules/ModalWrapper'
import ModalContainer from '../molecules/ModalContainer'

import ModalMask from '../atoms/ModalMask'

export default {
  name: 'ModalAuth',
  components: {
    ModalWrapper,
    ModalContainer,
    ModalMask,
    AuthForm,
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

.auth-modal {
  display: flex;
  flex-direction: row;

  @media (max-width: 560px) {
    flex-direction: column;
  }

  > button {
    width: 30px;
    height: 30px;
    position: absolute;
    top: 14px;
    right: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: 0.3s;

    > i {
      display: block;
      width: 24px;
      height: 24px;
      background-image: url('../../assets/svg/close.svg');
      @media (max-width: 560px) {
        background-image: url('../../assets/svg/close-white.svg');
      }

      > * {
        fill: $c-main;
        stroke: $c-main;
        @media (max-width: 560px) {
          fill: white;
          stroke: white;
        }
      }
    }

    &:hover {
      transform: rotate(180deg);
    }
  }

  &__image {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $c-main;
    @media (max-width: 560px) {
      flex: unset;
      height: 40%;
    }

    > img {
      width: 60%;
      height: auto;
      @media (max-width: 560px) {
        width: auto;
        height: 80%;
      }
    }
  }

  &__content {
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 50px 20px 24px;
    @media (max-width: 560px) {
      padding-top: 22px;
    }
  }

  &__links {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-top: auto;

    > a {
      font-family: Arial;
      font-size: 14px;
      color: #000;
      text-decoration: underline;

      &:hover {
        text-decoration: none;
      }
    }
    > i {
      display: block;
      width: 4px;
      height: 4px;
      background-image: url('../../assets/svg/oval.svg');
      margin: 0 11px;
    }
  }
}
</style>
