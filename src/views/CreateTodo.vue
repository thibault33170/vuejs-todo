<template>
  <div class="createTodo">
    Create a new Todo

    <input
      type="text"
      v-model="todo.title"
    >
    <textarea v-model="todo.description" />

    <button @click="create">
      Create
    </button>
  </div>
</template>

<script>
export default {
  name: 'CreateTodo',
  data() {
    return {
      todo: {
        id: this.generateUid(),
        title: '',
        description: '',
        category: '',
        status: '',
        date: ''
      },
    }
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
