<script lang="ts">
import { defineComponent } from 'vue';
import { useI18n } from "vue-i18n";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import BottomNavbar from "../components/BottomNavbar.vue";

export default defineComponent({
  name: 'Default',

  components: {
    Navbar,
    Sidebar,
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
    <main>
      <p>Some content</p>
    </main>
    <!-- Footer -->
    <bottom-navbar />
  </div>
</template>

