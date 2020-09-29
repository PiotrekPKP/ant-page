<template>
  <div class="lister">
    <router-link class="lister-object" v-for="(object, i) in list" :key="i" :to="getUrl(object.id)">
      <img :src="getImageSrc(object.image)" alt="Logo" class="lister-object__image">
      <span class="lister-object__name">{{ object.name }}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Lister",
  props: {
    list: Array
  },
  methods: {
    getImageSrc(src) {
      return require('../assets/images' + src);
    },
    getUrl(id) {
      return '/project/' + id;
    }
  }
}
</script>

<style lang="scss" scoped>
  .lister {
    padding-top: 50px;

    .lister-object {
      text-decoration: none !important;
      color: black !important;
      display: flex;
      align-items: center;
      margin-bottom: 30px;
      cursor: pointer;

      .lister-object__image {
        width: 40px;
        height: 40px;
      }

      .lister-object__name {
        font-weight: bold;
        margin-left: 20px;
        font-size: 1.3rem;
      }
    }
  }
</style>