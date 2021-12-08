<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from "vue-i18n";
import Navbar from "../components/Navbar.vue";
import BottomNavbar from "../components/BottomNavbar.vue";

export default defineComponent({
  name: 'Default',

  components: {
    Navbar,
    BottomNavbar
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

    <bottom-navbar />
  </div>
</template>

