import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

import TodosList from '@/views/TodosList'
import CreateTodo from '@/views/CreateTodo'
import EditTodo from '@/views/EditTodo'

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/todos',
      name: 'todosList',
      component: TodosList
    },
    {
      path: '/newTodo',
      name: 'newTodo',
      component: CreateTodo
    },
    {
      path: '/todos/:id/edit',
      name: 'editTodo',
      component: EditTodo
    }
  ]
})
