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

    <!-- Begin page content -->
    <main class="flex-shrink-0">
      <div class="container min-vh-100">
        <div class="row py-4">
          <div class="col-md-6">
            <h1 class="mt-5">Main page content</h1>
            <p class="lead">Example code: <code class="small">padding-top: 60px;</code> on the <code class="small">main
              &gt; .container</code>.</p>
            <p>Back to our regularly scheduled programming.</p>
          </div>
        </div>
      </div>
    </main>

    <bottom-navbar />
  </div>
</template>

