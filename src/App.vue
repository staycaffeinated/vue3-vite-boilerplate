<script lang="ts">
import {defineComponent} from 'vue';
import BottomNavbar from "./components/BottomNavbar.vue";

export default defineComponent({
  name: 'App',
  components: {BottomNavbar},
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
  <div class="container min-vw-100">
    <component :is="layout">
      <router-view/>
    </component>
  </div>
</template>

<style>
body {
  margin: 0;
  /* margin-bottom: 60px; */
}
</style>
