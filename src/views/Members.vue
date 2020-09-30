<template>
  <div class="members">
    <div class="members__title">
      <Title title="Ant Members" />
      <span class="members__description">Meet our creators and</span><br><span class="members__description">programmers!</span>
    </div>
  </div>
</template>

<script>
import Title from "@/components/Title";
import Lister from "@/components/Lister";

export default {
  name: "Members",
  components: {Lister, Title},
  data() {
    return {

    }
  },
  beforeCreate() {
    document.body.className = 'scroll';
  }
}
</script>

<style lang="scss" scoped>
  .members {
    margin-left: 100px;

    .members__title {
      margin-right: 50%;

      .members__description {
        font-size: 1.7rem;
        margin-left: -20px;
      }
    }
  }
</style>