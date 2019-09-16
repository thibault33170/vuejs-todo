<template>
  <div class="home">
    Welcome to my awesome VueJS Todolist !  
    <router-link :to="{name: 'todosList'}">
      Click here to check that :)
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>
