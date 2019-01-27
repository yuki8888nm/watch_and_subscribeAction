export const state = () => ({
  content: {
    hoge: '',
    fuga: 0,
    option: {
      memo: '',
    },
  },
  isEditing: false,
});

export const mutations = {
  changeHoge(state, payload) {
    state.content.hoge = payload.value;
  },
  changeFuga(state, payload) {
    state.content.fuga = payload.value;
  },
  changeOptionMemo(state, payload) {
    state.content.option.memo = payload.value;
  },
  changeIsEditing(state, payload) {
    state.isEditing = payload.value;
  },
};

export const actions = {
  init({ commit }) {
    // モック（本来はデータをサーバー側から取得してcommitする）
    commit('changeHoge', {
      value: 'test',
    });
    commit('changeFuga', {
      value: 10,
    });
    commit('changeOptionMemo', {
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
    commit('changeHoge', {
      value: state.content.hoge,
    });
    commit('changeFuga', {
      value: state.content.fuga,
    });
    commit('changeOptionMemo', {
      value: state.content.option.memo,
    });
  },
};

export const getters = {
  stateKeys() {
    return ['content'];
  },
};
