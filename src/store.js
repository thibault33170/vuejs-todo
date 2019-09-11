import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [
      {
        id: 1,
        title: 'title 1',
        description: 'description 1',
        category: 'category 1',
        status: 'new',
        date: '2019-10-10 16:00:00'
      },
      {
        id: 2,
        title: 'title 2',
        description: 'description 2',
        category: 'category 2',
        status: 'new',
        date: '2019-10-10 16:00:00'
      }
    ]
  },
  mutations: {
    createTodo(state, todo) {
      state.todos.push(todo);
    }
  },
  actions: {
    createTodo(context, todo) {
      context.commit('createTodo', todo);
    }
  },
  getters: {
    todos(state) {
      return state.todos;
    }
  }
})
