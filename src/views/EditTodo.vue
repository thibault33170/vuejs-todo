<template>
  <div class="editTodo">
    <h3>Edit</h3>

    <div>
      <label>Title</label>
      <input
        type="text"
        v-model="todo.title"
      >
    </div>

    <div>
      <label>Description</label>
      <textarea v-model="todo.description" />
    </div>

    <div>
      <label>Category</label>
      <select v-model="todo.category">
        <option
          v-for="category in categories"
          :key="category.id"
        >
          {{ category.name }}
        </option>
      </select>
    </div>

    <button @click="edit">
      Save
    </button>
  </div>
</template>

<script>
export default {
  name: 'EditTodo',
  data() {
    return {
      categories: [],
      todo: {},
    }
  },
  methods: {
    edit() {
      this.$store.dispatch('editTodo', this.todo);

      this.$router.push({name: 'todosList'})
    }
  },
  mounted() {
    this.todo = this.$store.getters.getTodoById(+this.$route.params.id)
    this.categories = this.$store.getters.getCategories
  }
}
</script>
