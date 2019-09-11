<template>
  <div class="editTodo">
    Edit

    <input
      type="text"
      v-model="todo.title"
    >
    <textarea v-model="todo.description" />

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
  }
}
</script>
