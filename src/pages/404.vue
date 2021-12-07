<template>
  <div>
    <h1 class="title"></h1>
    <p class="notification is-info">
      The page you are looking for was not found.
      <router-link class="button is-white" to="/">Return home</router-link>
    </p>
  </div>
</template>

<script>
export default {
  name: "404"
}
</script>

