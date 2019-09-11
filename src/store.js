import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {
        id: 1,
        name: 'work'
      },
      {
        id: 2,
        name: 'home'
      },
      {
        id: 3,
        name: 'whatever'
      }
    ],
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
      state.todos.push(todo)
    },
    editTodo(state, todo) {
      const index = state.todos.findIndex(elem => elem.id === todo.id)
      Vue.set(state.todos, index, todo)
    }
  },
  actions: {
    createTodo(context, todo) {
      context.commit('createTodo', todo)
    },
    editTodo(context, todo) {
      context.commit('editTodo', todo)
    }
  },
  getters: {
    getCategories(state) {
      return state.categories
    },
    getTodos(state) {
      return state.todos
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
