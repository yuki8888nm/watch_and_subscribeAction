<template>
  <div><nuxt v-if="isInitialized" /></div>
</template>
<script>
export default {
  data() {
    return {
      isInitialized: false,
    };
  },
  mounted() {
    const { $store, state } = this;
    $store.subscribeAction((action, state) => {
      if (action.type === 'init') {
        this.registerPageTransitionWatcher($store.getters.stateKeys);
        this.isInitialized = true;
      } else if (action.type === 'save') {
        $store.dispatch('endEdit');
      }
    });
    $store.dispatch('init');
  },
  methods: {
    registerPageTransitionWatcher(stateKeys) {
      const { $store } = this;
      $store.watch(
        state => stateKeys.map(stateKey => state[stateKey]),
        () => {
          $store.dispatch('startEdit');
        },
        {
          deep: true,
        }
      );
    },
  },
};
</script>
