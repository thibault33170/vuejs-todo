<template>
  <div class="createTodo">
    <h3> New Todo </h3>

    <form>
      <div>
        <label> Title </label>
        <input
          type="text"
          v-model="todo.title"
        >
      </div>
    
      <div>
        <label> Description </label>
        <textarea v-model="todo.description" />
      </div>

      <div>
        <label> Category </label>
        <select v-model="todo.category">
          <option disabled>
            Choose
          </option>
          <option
            :value="category.name"
            v-for="category in categories"
            :key="category.id"
          >
            {{ category.name }}
          </option>
        </select>
      </div>

      <div>
        <label>Due date</label>
        <input
          type="text"
          v-model="todo.date"
        >
      </div>
    
      <button @click="create">
        Create
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CreateTodo',
  data() {
    return {
      categories: [],
      todo: {
        id: this.generateUid(),
        title: '',
        description: '',
        category: '',
        status: 'new',
        date: ''
      },
    }
  },
  mounted() {
    this.categories = this.$store.getters.getCategories;
  },
  methods: {
    create() {
      this.$store.dispatch('createTodo', this.todo);

      this.$router.push({name: 'todosList'})
    },
    generateUid() {
      return Math.floor(Math.random() * Math.floor(999999));
    }
  }
}
</script>
