<template>
  <div class="project">
    <Title :title="projectId" />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { reactive, computed } from 'vue';
import Title from "@/components/Title";

export default {
  name: "Home",
  components: {
    Title
  },
  setup() {
    const route = useRoute();
    const projectId = computed(() => route.params.projectId);

    const state = reactive({

    });

    return {
      state,
      projectId
    }
  },
  beforeCreate() {
    document.body.className = 'scroll';
  }
}
</script>

<style lang="scss" scoped>

</style>