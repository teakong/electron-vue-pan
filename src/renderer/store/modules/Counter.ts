const state = {
    main: 0
};

const mutations = {
  DECREMENT_MAIN_COUNTER (state: any) {
    state.main--
  },
  INCREMENT_MAIN_COUNTER (state: any) {
    state.main++
  }
}

const actions = {
  someAsyncTask ({ commit }: any) {
    // do something async
    console.log(12321312312)
    commit('INCREMENT_MAIN_COUNTER')
  }
}

export default {
    state,
    mutations,
    actions
};
