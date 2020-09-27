<template>
  <div class="title">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
  .title {
    h1 {
      font-size: 5rem;
      position: relative;

      &:after {
        z-index: -1;
        content: '';
        position: absolute;
        bottom: -20px;
        left: -20px;
        right: 70px;
        height: 50px;
        background: #FF443C;
      }
    }
  }

  @media screen and (max-width: 700px) {
    .title {

      h1 {
        font-size: 3rem !important;

        &:after {
          bottom: -10px;
          left: -20px;
          right: 70px;
          height: 30px !important;
        }
      }
    }
  }
</style>