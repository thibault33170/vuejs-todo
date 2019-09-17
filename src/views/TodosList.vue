<template>
  <div class="todos">
    <h3>All my awesome todos</h3>

    <b-form inline>
      <label
        class="sr-only"
        for="inline-form-input-name"
      >Search</label>
      <b-input
        id="inline-form-input-name"
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="Rechercher"
        v-model="search"
      />
      <b-form-group
        id="input-group-3"
        label="Categories"
        label-for="input-3"
        class="mb-2 mr-sm-2 mb-sm-0"
      >
        <b-form-select
          v-model="filters.category"
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
        class="mb-2 mr-sm-2 mb-sm-0"
        label-for="input-4"
      >
        <b-form-select
          v-model="filters.state"
          required
        >
          <option disabled>
            Choose
          </option>
          <option
            :value="state.name"
            v-for="state in states"
            :key="state.id"
          >
            {{ state.name }}
          </option>
        </b-form-select>
      </b-form-group>
    </b-form>

    <div
      v-for="(todos,index) in groupedTodos"
      :key="index"
      class="row"
      style="margin-top: 18px;">
      <div
        v-for="todo in todos"
        :key="todo.id"
        class="col-lg-4"
        style="margin-top: 18px;"
      >
        <b-card>
          <b-card-title>
            {{ todo.title }} | {{ diffForHuman(todo.date) }}
          </b-card-title>
          <b-card-text>
            {{ todo.description }}
          </b-card-text>
          <router-link
            :to="{ name:'editTodo', params: {id: todo.id} }"
            class="card-link"
          >
            Edit
          </router-link>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

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
    },
    chunk(arr, size) {
      return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
        arr.slice(i * size, i * size + size)
      )
    },
    diffForHuman(date){
      return moment(date, 'YYYY-MM-DD').format('DD/MM/YYYY');
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
    },
    groupedTodos() {
      return this.chunk(this.filteredTodos, 4)
    }
  }
}
</script>
