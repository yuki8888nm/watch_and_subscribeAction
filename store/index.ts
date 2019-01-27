export const state = () => ({
  content: {
    hoge: '',
    fuga: 0,
    option: {
      memo: '',
    },
  },
  isInitialized: false,
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
  changeIsInitialized(state, payload) {
    state.isInitialized = payload.value;
  },
};

export const actions = {
  init({ commit, getters }) {
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
    this.watch(
      state => getters.activateAlertStateKeys.map(key => state[key]),
      () => window.onbeforeunload = () => true,
      {
        deep: true,
      }
    );
    this.subscribeAction(action => {
      if (getters.invalidateAlertActions.includes(action.type)) {
        window.onbeforeunload = () => undefined;
      }
    });
    commit('changeIsInitialized', {
      value: true,
    });
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
  activateAlertStateKeys() {
    return ['content'];
  },
  invalidateAlertActions() {
    return ['save']
  }
};
