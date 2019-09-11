<template>
  <div class="todos">
    <h3>All my awesome todos</h3>
    
    <button @click="goToCreate">
      New
    </button>

    <ul>
      <li
        v-for="todo in todos"
        :key="todo.id"
      >
        {{ todo.title }}
        {{ todo.description }}
        {{ todo.category }}
        {{ todo.status }}
        {{ todo.date }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: []
    }
  },
  mounted() {
    this.todos = this.$store.getters.todos
  },
  methods: {
    goToCreate() {
      this.$router.push({path: 'newTodo'})
    }
  }
}
</script>
