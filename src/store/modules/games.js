import Axios from 'axios'

export const gamesModule = {
  namespaced: true,
  state: {
    list: []
  },
  mutations: {
    SET_LIST(state, newList) {
      state.list = newList
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
    }
  }
}
