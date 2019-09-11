<template>
  <div class="todos">
    <h3>All my awesome todos</h3>

    <div>
      <label>Search</label>
      <input
        type="text"
        v-model="search"
      >

      <label>Filters</label>
      <select v-model="filters.category">
        <option
          v-for="category in categories"
          :key="category.id"
          :value="category.name"
        >
          {{ category.name }}
        </option>
      </select>

      <select v-model="filters.state">
        <option
          v-for="state in states"
          :key="state.id"
          :value="state.name"
        >
          {{ state.name }}
        </option>
      </select>
    </div>
  
    <ul>
      <li
        v-for="todo in filteredTodos"
        :key="todo.id"
      >
        {{ todo.title }}
        {{ todo.description }}
        {{ todo.category }}
        {{ todo.state }}
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
      filters: {
        category: '',
        state: ''
      },
      categories: [],
      states: [],
      todos: [],
      search:''
    }
  },
  mounted() {
    this.todos = this.$store.getters.getTodos
    this.categories = this.$store.getters.getCategories
    this.states = this.$store.getters.getStates
  },
  methods: {
    goToEdit(id) {
      this.$router.push({name:'editTodo', params: {id}})
    }
  },
  computed: {
    filteredTodos() {
      return this.todos.filter((todo) => {
        if (this.search === '' && this.filters.category === '') {
          return true
        }

        let searchFlag = true;
        let filtersFlag = true;

        if (this.search !== '') {
          searchFlag = todo.title.toLowerCase().includes(this.search.toLowerCase()) || todo.description.toLowerCase().includes(this.search.toLowerCase())
        }

        if(this.filters.category !== '') {
          filtersFlag = todo.category === this.filters.category
        }

        if (this.filters.state !== '') {
          filtersFlag = filtersFlag && (todo.state === this.filters.state)
        }

        return filtersFlag && searchFlag
      })
    }
  }
}
</script>
