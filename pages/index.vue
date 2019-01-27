<template>
  <section>
    <div >
      <div>Watcher And Subscriber</div>
      <div>
        <label>rootHoge</label>
        <input
          :value="$store.state.content.hoge"
          @change="e => changeHoge({ value: e.target.value })"
          type="text"
        />
      </div>
      <div>
        <label>rootFuga</label>
        <input
          :value="$store.state.content.fuga"
          @change="e => changeFuga({ value: e.target.value })"
          type="text"
        />
      </div>
      <div>
        <label>rootOptionMemo</label>
        <input
          :value="$store.state.content.option.memo"
          @change="e => changeOptionMemo({ value: e.target.value })"
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
      'changeHoge',
      'changeFuga',
      'changeOptionMemo',
    ]),
  },
};
</script>
