<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from "vue-i18n";
import Navbar from "/@/components/Navbar.vue";
import Footer from "/@/components/Footer.vue";

export default defineComponent({
  name: 'Default',

  components: {
    Navbar,
    Footer
  },

  setup() {
    const { t } = useI18n();
    return { t };
    }
})
</script>

<template>
  <div>
    <navbar />

    <div class="container">
      <slot />
    </div>

    <footer />
  </div>
</template>

<style scoped>
</style>
