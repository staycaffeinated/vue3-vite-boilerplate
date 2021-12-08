<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'App',

  computed: {
    layout() {
      console.log("Determining layout...");
      const tmp = (this.$route.meta.layout || "default") + "-layout";
      console.log("Chosen layout: ", tmp);
      return tmp;
    }
  },

  created() {
    // nothing defined here (when this.$route.path is other than "/")
    console.log("app.created: ", this.$route, this.$route.meta.layout);
  },
  updated() {
    // something defined here whatever the this.$route.path
    console.log("app.updated: ", this.$route, this.$route.meta.layout);
  }

});
</script>

<template>
  <div class="flex-shrink-0">
    <div class="container">
      <component :is="layout">
        <router-view/>
      </component>
    </div>
    <footer />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
