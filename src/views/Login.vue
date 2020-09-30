<template>
  <div class="login">
    <div class="login__image">
      <img src="@/assets/images/big-man.png" alt="Big man" />
    </div>
    <div class="login__content">
      <Title title="Sign in" />
      <form class="login__content-inputs" v-on:submit.prevent="onSubmit">
        <label for="name">Name</label>
        <br />
        <input placeholder="Enter your name..." v-model="name" type="text" id="name" class="login__input" />
        <br />
        <label for="surname">Surname</label>
        <br />
        <input placeholder="Enter your surname..." v-model="surname" type="text" id="surname" class="login__input" />
        <br />
        <label for="password">Password</label>
        <br />
        <input placeholder="Enter your password..." v-model="password" type="password" id="password" class="login__input" />
        <div class="break"><br /></div>
        <button class="login__submit-btn">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";

export default {
  name: "Login",
  components: { Title },
  data() {
    return {
      name: "",
      surname: "",
      password: ""
    }
  },
  beforeCreate() {
    document.body.className = 'no-scroll';
  },
  methods: {
    onSubmit() {

    }
  }
}
</script>

<style lang="scss" scoped>
  .break {
    display: none;
  }

  .login {
    display: flex;

    .login__image {
      position: absolute;
      z-index: -2;
      bottom: -120px;
    }

    .login__content {
      width: 100%;
      margin-left: 50%;

      .login__content-inputs {
        margin-top: 80px;

        label {
          font-weight: bold;
        }

        .login__input {
          border: none;
          outline: none;
          padding: 20px;
          background-color: rgba(255, 68, 60, 0.2);
          width: 20vw;
          margin: 10px 0 50px;

          &::placeholder {
            color: #bc0d00;
          }
        }

        .login__submit-btn {
          float: right;
          margin-right: 70px;
          width: 16vw;
          margin-top: 10px;
          height: 55px;
          background-color: #ff443c;
          color: white;
          font-size: 1.3rem;
          border: none;
          outline: none;
          cursor: pointer;
        }
      }
    }
  }

  @media screen and (max-width: 983px) {
    .break {
      display: block;
    }

    .login__content {
      margin-left: 50px !important;

      .login__input {
        width: 40vw !important;
      }

      .login__submit-btn {
        float: none !important;
        width: calc(40vw + 40px) !important;
        margin-top: -20px !important;
      }
    }
  }

  @media screen and (max-width: 450px) {
    .break {
      display: block;
    }

    .login__content {
      margin-left: 50px !important;

      .login__input {
        width: 60vw !important;
      }

      .login__submit-btn {
        float: none !important;
        width: calc(60vw + 40px) !important;
        margin-top: -20px !important;
      }
    }
  }
</style>