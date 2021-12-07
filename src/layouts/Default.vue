<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from "vue-i18n";
import Navbar from "/@/components/Navbar.vue";
import Sidebar from "/@/components/Sidebar.vue";
import Footer from "/@/components/Footer.vue";

export default defineComponent({
  name: 'Default',

  components: {
    Navbar,
    Sidebar,
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
    <div class="container section">
      <div class="columns">
        <div class="column is-8">
          <slot />
        </div>

        <div class="column is-4">
          <sidebar />
        </div>
      </div>
    </div>
    <footer />
  </div>
</template>

