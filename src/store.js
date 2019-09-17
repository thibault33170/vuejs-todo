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
    states: [
      {
        id: 1,
        name: 'new'
      },
      {
        id: 2,
        name: 'wip'
      },
      {
        id: 3,
        name: 'done'
      }
    ],
    todos: [
      {
        id: 1,
        title: 'Faire a manger',
        description: "Manger c'est quand même super important",
        category: 'home',
        state: 'new',
        date: '2019-10-10'
      },
      {
        id: 2,
        title: 'Faire le CV',
        description: "Avec un CV à jour c'est toujours",
        category: 'work',
        state: 'new',
        date: '2019-10-10'
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
    getStates(state) {
      return state.states
    },
    getTodos(state) {
      return state.todos
    },
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id)
    }
  }
})
