import Axios from 'axios'

export const gamesModule = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList
    },
    ADD_OPINION(state, { index, opinions }) {
      if (state.list[index].opinions) {
        state.list[index].opinions.push(opinions)
      } else {
        state.list[index].opinions = [opinions]
      }
    }
  },
  actions: {
    async getAllJuegos(context) {
      try {
        if (context.state.list.length === 0) {
          const games = await Axios.get('/games.json')
          context.commit('SET_LIST', games.data)
        }
      } catch (e) {
        console.error(e)
      }
    },
    addOpinion(context, { gameOnList, userOpinion, userName }) {
      const games = context.state.list
      const index = games.findIndex((game) => game.name === gameOnList)
      const opinions = { userName, userOpinion }
      context.commit('ADD_OPINION', { index, opinions })
    }
  }
}
