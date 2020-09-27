<template>
  <div class="login">
    <div class="login__image">
      <img src="@/assets/images/big-man.png" alt="Big man" />
    </div>
    <div class="login__content">
      <Title title="Sign in" />
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
export default {
name: "Login",
  components: {Title}
}
</script>

<style lang="scss" scoped>
  .login {
    display: flex;

    .login__image {
      position: absolute;
      z-index: -2;
      bottom: 0;
    }

    .login__content {
      margin-left: 50%;
    }
  }

  @media screen and (max-width: 700px) {
    .login__content {
      margin-left: 50px !important;
    }
  }
</style>