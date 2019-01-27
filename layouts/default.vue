<template>
  <div><nuxt v-if="$store.state.isInitialized" /></div>
</template>
<script>
export default {
  mounted() {
    const { $store } = this;
    $store.dispatch('init');
  },
};
</script>
