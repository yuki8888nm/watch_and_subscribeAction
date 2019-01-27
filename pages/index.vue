<template>
  <section class="pa4">
    <div class="bg-white-90 pa4">
      <div class="f1">Watcher And Subscriber</div>
      <div>
        <label>rootHoge</label>
        <input
          :value="$store.state.hoge"
          @change="e => changeRootHoge({ value: e.target.value })"
          class="item-title"
          type="text"
        />
      </div>
      <div>
        <label>rootFuga</label>
        <input
          :value="$store.state.fuga"
          @change="e => changeRootFuga({ value: e.target.value })"
          class="item-title"
          type="text"
        />
      </div>
      <div>
        <label>rootOptionMemo</label>
        <input
          :value="$store.state.option.memo"
          @change="e => changeRootOptionMemo({ value: e.target.value })"
          class="item-title"
          type="text"
        />
      </div>
      <button @click="save">保存</button>
    </div>
    <div class="flex flex-wrap ph2 justify-between bg-white-80"></div>
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
