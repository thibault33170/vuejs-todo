<template>
  <div id="app">
    <div>
      <b-navbar
        toggleable="lg"
        type="dark"
        variant="info"
      >
        <b-navbar-brand href="#/">
          Home
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse" />

        <b-collapse
          id="nav-collapse"
          is-nav
        >
          <b-navbar-nav>
            <b-nav-item href="#/todos">
              Todos
            </b-nav-item>
          </b-navbar-nav>

          <b-navbar-nav class="ml-auto">
            <b-nav-form>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                @click="goToCreate"
              >
                Create a new Todo
              </b-button>
            </b-nav-form>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>

    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    goToCreate() {
      this.$router.push({name: 'newTodo'})
    }
  }
}
</script>