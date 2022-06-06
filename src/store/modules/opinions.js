export const opinionsModule = {
  namespaced: true,
  state: {
    opinions: [],
    gameToEdit: ''
  },
  getters: {},
  mutations: {
    ADD_OPINION(state, opinion) {
      state.opinions.push(opinion)
    },
    REMOVE_OPINION(state, index) {
      state.opinions.splice(index, 1)
    },
    EDIT_OPINION(state, opinion) {
      state.opinions[opinion[0].index.id] = opinion[1]
    },
    EDIT_GAME(state, game) {
      state.gameToEdit = game
    }
  },
  actions: {
    addOpinion(context, opinion) {
      context.commit('ADD_OPINION', opinion)
    },
    removeOpinion(context, index) {
      context.commit('REMOVE_OPINION', index)
    },
    editOpinions(context, opinion) {
      context.commit('EDIT_OPINION', opinion)
    },
    editGame(context, game) {
      context.commit('EDIT_GAME', game)
    }
  }
}
