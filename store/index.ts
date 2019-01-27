export const state = () => ({
  hoge: '',
  fuga: 0,
  option: {
    memo: '',
  },
  isEditing: false,
});

export const mutations = {
  changeRootHoge(state, payload) {
    state.hoge = payload.value;
  },
  changeRootFuga(state, payload) {
    state.fuga = payload.value;
  },
  changeRootOptionMemo(state, payload) {
    state.option.memo = payload.value;
  },
  changeIsEditing(state, payload) {
    state.isEditing = payload.value;
  },
};

export const actions = {
  init({ commit }) {
    // モック（本来はデータをサーバー側から取得してcommitする）
    commit('changeRootHoge', {
      value: 'test',
    });
    commit('changeRootFuga', {
      value: 10,
    });
    commit('changeRootOptionMemo', {
      value: 'Hello World!',
    });
  },
  startEdit({ commit }) {
    window.onbeforeunload = () => true;
    commit('changeIsEditing', { value: true });
  },
  endEdit({ commit }) {
    window.onbeforeunload = () => undefined;
    commit('changeIsEditing', { value: false });
  },
  save({ commit, state }) {
    // モック（本来はーバー側にリクエストしてそのレスポンスをcommitする）
    commit('changeRootHoge', {
      value: state.hoge,
    });
    commit('changeRootFuga', {
      value: state.fuga,
    });
    commit('changeRootOptionMemo', {
      value: state.option.memo,
    });
  },
};

export const getters = {
  doubleFuga(state) {
    return state.fuga * 2;
  },
  stateKeys() {
    return ['hoge', 'fuga', 'option'];
  },
};
