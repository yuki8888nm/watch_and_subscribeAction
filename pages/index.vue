<template>
  <section>
    <div >
      <div>Watcher And Subscriber</div>
      <div>
        <label>rootHoge</label>
        <input
          :value="$store.state.hoge"
          @change="e => changeRootHoge({ value: e.target.value })"
          type="text"
        />
      </div>
      <div>
        <label>rootFuga</label>
        <input
          :value="$store.state.fuga"
          @change="e => changeRootFuga({ value: e.target.value })"
          type="text"
        />
      </div>
      <div>
        <label>rootOptionMemo</label>
        <input
          :value="$store.state.option.memo"
          @change="e => changeRootOptionMemo({ value: e.target.value })"
          type="text"
        />
      </div>
      <button @click="save">保存</button>
    </div>
  </section>
</template>
<script>
import { mapActions, mapMutations } from 'vuex';

export default {
  methods: {
    ...mapActions(['save']),
    ...mapMutations([
      'changeRootHoge',
      'changeRootFuga',
      'changeRootOptionMemo',
    ]),
  },
};
</script>
