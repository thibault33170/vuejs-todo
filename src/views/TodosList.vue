<template>
  <div class="todos">
    <h3>All my awesome todos</h3>
    
    <button @click="goToCreate">
      New
    </button>

<input type="text" v-model="search">
    <ul>
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
      >
        {{ todo.title }}
        {{ todo.description }}
        {{ todo.category }}
        {{ todo.status }}
        {{ todo.date }}
        <button @click="goToEdit(todo.id)">
          Edit
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
      search:''
    }
  },
  mounted() {
    this.todos = this.$store.getters.todos
  },
  methods: {
    goToCreate() {
      this.$router.push({name: 'newTodo'})
    },
    goToEdit(id) {
      this.$router.push({name:'editTodo', params: {id}})
    }
  },
  computed: {
    filteredTodos() {
      return this.todos.filter((todo) => {
        if (this.search === '') {
          return true;
        }

        if(todo.title.toLowerCase().includes(this.search.toLowerCase()) || todo.description.toLowerCase().includes(this.search.toLowerCase())) {
          return true;
        }

        return false;
      })
    }
  }
}
</script>
