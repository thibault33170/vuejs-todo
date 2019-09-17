<template>
  <div class="createTodo">
    <h3> Todo create</h3>

    <b-form>
      <b-form-group
        id="input-group-2"
        label="Title"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          v-model="todo.title"
          required
          placeholder="Enter title"
        />
      </b-form-group>

      <b-form-group
        id="input-group-2"
        label="Description"
        label-for="input-2"
      >
        <b-form-textarea
          id="textarea"
          v-model="todo.description"
          placeholder="Enter description..."
          rows="3"
          max-rows="6"
          required
        />
      </b-form-group>
      <b-form-group
        id="input-group-3"
        label="Categories"
        label-for="input-3"
      >
        <b-form-select
          v-model="todo.category"
          required
        >
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
        </b-form-select>
      </b-form-group>
      <b-form-group
        id="input-group-4"
        label="État"
        label-for="input-4"
      >
        <b-form-input
          id="input-4"
          v-model="todo.date"
          placeholder="due date"
          type="date"
          required
        /> 
      </b-form-group>
      <b-form-group>
        <b-button
          type="button"
          variant="primary"
          @click="create"
        >
          Submit
        </b-button>
      </b-form-group>
    </b-form>
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
