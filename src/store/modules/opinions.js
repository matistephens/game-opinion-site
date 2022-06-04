export const opinionsModule = {
  namespaced: true,
  state: {
    opinions: []
  },
  getters: {},
  mutations: {
    ADD_OPINION(state, opinion) {
      state.opinions.unshift(opinion)
    }
  },
  actions: {
    addOpinion(context, opinion) {
      context.commit('ADD_OPINION', opinion)
    }
  }
}
